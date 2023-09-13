/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.30.1.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { Coin } from "@cosmjs/amino";
import { MsgExecuteContractEncodeObject } from "@cosmjs/cosmwasm-stargate";
import { MsgExecuteContract } from "cosmjs-types/cosmwasm/wasm/v1/tx";
import { toUtf8 } from "@cosmjs/encoding";
import { InstantiateMsg, ExecuteMsg, BondingCurve, Uint128, Decimal, PairType, PairConfigForString, PairImmutableForString, QueryMsg, QueryBoundForUint64, Addr, QueryOptionsForUint64, Pair, PairConfigForAddr, PairImmutableForAddr, PairInternal, QuoteSummary, TokenPayment, Binary, NextPairResponse, ArrayOfTupleOfUint64AndAddr, QuotesResponse } from "./InfinityFactory.types";
export interface InfinityFactoryMessage {
  contractAddress: string;
  sender: string;
  createPair: ({
    pairConfig,
    pairImmutable
  }: {
    pairConfig: PairConfigForString;
    pairImmutable: PairImmutableForString;
  }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
  createPair2: ({
    pairConfig,
    pairImmutable
  }: {
    pairConfig: PairConfigForString;
    pairImmutable: PairImmutableForString;
  }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
}
export class InfinityFactoryMessageComposer implements InfinityFactoryMessage {
  sender: string;
  contractAddress: string;

  constructor(sender: string, contractAddress: string) {
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.createPair = this.createPair.bind(this);
    this.createPair2 = this.createPair2.bind(this);
  }

  createPair = ({
    pairConfig,
    pairImmutable
  }: {
    pairConfig: PairConfigForString;
    pairImmutable: PairImmutableForString;
  }, _funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          create_pair: {
            pair_config: pairConfig,
            pair_immutable: pairImmutable
          }
        })),
        funds: _funds
      })
    };
  };
  createPair2 = ({
    pairConfig,
    pairImmutable
  }: {
    pairConfig: PairConfigForString;
    pairImmutable: PairImmutableForString;
  }, _funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          create_pair2: {
            pair_config: pairConfig,
            pair_immutable: pairImmutable
          }
        })),
        funds: _funds
      })
    };
  };
}