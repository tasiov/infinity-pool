/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.30.1.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { CosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { Decimal, Uint128, InstantiateMsg, GlobalConfigForString, Coin, ExecuteMsg, QueryMsg, Addr, GlobalConfigForAddr, NullableCoin } from "./InfinityGlobal.types";
export interface InfinityGlobalReadOnlyInterface {
  contractAddress: string;
  globalConfig: () => Promise<GlobalConfigForAddr>;
  minPrice: ({
    denom
  }: {
    denom: string;
  }) => Promise<NullableCoin>;
}
export class InfinityGlobalQueryClient implements InfinityGlobalReadOnlyInterface {
  client: CosmWasmClient;
  contractAddress: string;

  constructor(client: CosmWasmClient, contractAddress: string) {
    this.client = client;
    this.contractAddress = contractAddress;
    this.globalConfig = this.globalConfig.bind(this);
    this.minPrice = this.minPrice.bind(this);
  }

  globalConfig = async (): Promise<GlobalConfigForAddr> => {
    return this.client.queryContractSmart(this.contractAddress, {
      global_config: {}
    });
  };
  minPrice = async ({
    denom
  }: {
    denom: string;
  }): Promise<NullableCoin> => {
    return this.client.queryContractSmart(this.contractAddress, {
      min_price: {
        denom
      }
    });
  };
}