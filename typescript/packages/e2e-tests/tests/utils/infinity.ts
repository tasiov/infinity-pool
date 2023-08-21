import { toUtf8 } from '@cosmjs/encoding'
import { denom } from '../../configs/chain_config.json'
import Context from '../setup/context'
import { getQueryClient } from '../utils/client'
import { mintNft } from '../utils/nft'
import { contracts } from '@stargazezone/infinity-types'
import { ExecuteMsg as InfinityFactoryExecuteMsg } from '@stargazezone/infinity-types/lib/InfinityFactory.types'
import { GlobalConfigForAddr } from '@stargazezone/infinity-types/lib/InfinityGlobal.types'
import { ExecuteMsg as InfinityPairExecuteMsg } from '@stargazezone/infinity-types/lib/InfinityPair.types'
import { MsgExecuteContract } from 'cosmjs-types/cosmwasm/wasm/v1/tx'
import _ from 'lodash'

const { InfinityFactoryQueryClient } = contracts.InfinityFactory
const { InfinityPairQueryClient } = contracts.InfinityPair

export const createPair = async (
  context: Context,
  globalConfig: GlobalConfigForAddr,
  liquidityProviderName: string,
  createPairMsg: InfinityFactoryExecuteMsg,
  collectionAddress: string,
  numNfts: number,
  depositTokens: { denom: string; amount: string },
) => {
  const creator = context.getTestUser('user1')
  const liquidityProvider = context.getTestUser(liquidityProviderName)

  const queryClient = await getQueryClient()

  let tokenIds = []
  for (let i = 0; i < numNfts; i++) {
    let tokenId = await mintNft(context, creator.client, creator.address, liquidityProvider.address)
    tokenIds.push(tokenId)
  }

  let infinityFactoryQueryClient = new InfinityFactoryQueryClient(queryClient, globalConfig.infinity_factory)

  let nextPairResponse = await infinityFactoryQueryClient.nextPair({ sender: liquidityProvider.address })
  let pairAddress = nextPairResponse.pair

  const encodedMessages: any[] = []

  encodedMessages.push({
    typeUrl: '/cosmwasm.wasm.v1.MsgExecuteContract',
    value: MsgExecuteContract.fromPartial({
      sender: liquidityProvider.address,
      contract: globalConfig.infinity_factory,
      msg: toUtf8(JSON.stringify(createPairMsg)),
      funds: [{ denom: globalConfig.pair_creation_fee.denom, amount: globalConfig.pair_creation_fee.amount }],
    }),
  })

  // Deposit Tokens
  let depositTokensMsg: InfinityPairExecuteMsg = {
    deposit_tokens: {},
  }

  encodedMessages.push({
    typeUrl: '/cosmwasm.wasm.v1.MsgExecuteContract',
    value: MsgExecuteContract.fromPartial({
      sender: liquidityProvider.address,
      contract: pairAddress,
      msg: toUtf8(JSON.stringify(depositTokensMsg)),
      funds: [depositTokens],
    }),
  })

  // Deposit NFTs
  _.forEach(tokenIds, (tokenId) => {
    let depostNftsMsg = {
      send_nft: {
        contract: pairAddress,
        token_id: tokenId,
        msg: '',
      },
    }
    encodedMessages.push({
      typeUrl: '/cosmwasm.wasm.v1.MsgExecuteContract',
      value: MsgExecuteContract.fromPartial({
        sender: liquidityProvider.address,
        contract: collectionAddress,
        msg: toUtf8(JSON.stringify(depostNftsMsg)),
        funds: [],
      }),
    })
  })

  await liquidityProvider.client.signAndBroadcast(liquidityProvider.address, encodedMessages, 'auto')

  let infinityPairQueryClient = new InfinityPairQueryClient(queryClient, pairAddress)
  let pair = await infinityPairQueryClient.pair()

  expect(pair.immutable.collection).toEqual(collectionAddress)
  expect(pair.immutable.owner).toEqual(liquidityProvider.address)
  expect(pair.immutable.denom).toEqual(denom)
}
