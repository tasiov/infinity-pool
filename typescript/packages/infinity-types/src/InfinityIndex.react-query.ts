/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.30.1.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { UseQueryOptions, useQuery } from "react-query";
import { InstantiateMsg, ExecuteMsg, Uint128, QueryMsg, QueryBoundForPairQuoteOffset, QueryOptionsForPairQuoteOffset, PairQuoteOffset, Addr, ArrayOfPairQuote, PairQuote, Coin } from "./InfinityIndex.types";
import { InfinityIndexQueryClient } from "./InfinityIndex.client";
export const infinityIndexQueryKeys = {
  contract: ([{
    contract: "infinityIndex"
  }] as const),
  address: (contractAddress: string | undefined) => ([{ ...infinityIndexQueryKeys.contract[0],
    address: contractAddress
  }] as const),
  sellToPairQuotes: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...infinityIndexQueryKeys.address(contractAddress)[0],
    method: "sell_to_pair_quotes",
    args
  }] as const),
  buyFromPairQuotes: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...infinityIndexQueryKeys.address(contractAddress)[0],
    method: "buy_from_pair_quotes",
    args
  }] as const)
};
export const infinityIndexQueries = {
  sellToPairQuotes: <TData = ArrayOfPairQuote,>({
    client,
    args,
    options
  }: InfinityIndexSellToPairQuotesQuery<TData>): UseQueryOptions<ArrayOfPairQuote, Error, TData> => ({
    queryKey: infinityIndexQueryKeys.sellToPairQuotes(client?.contractAddress, args),
    queryFn: () => client ? client.sellToPairQuotes({
      collection: args.collection,
      denom: args.denom,
      queryOptions: args.queryOptions
    }) : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  buyFromPairQuotes: <TData = ArrayOfPairQuote,>({
    client,
    args,
    options
  }: InfinityIndexBuyFromPairQuotesQuery<TData>): UseQueryOptions<ArrayOfPairQuote, Error, TData> => ({
    queryKey: infinityIndexQueryKeys.buyFromPairQuotes(client?.contractAddress, args),
    queryFn: () => client ? client.buyFromPairQuotes({
      collection: args.collection,
      denom: args.denom,
      queryOptions: args.queryOptions
    }) : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  })
};
export interface InfinityIndexReactQuery<TResponse, TData = TResponse> {
  client: InfinityIndexQueryClient | undefined;
  options?: UseQueryOptions<TResponse, Error, TData>;
}
export interface InfinityIndexBuyFromPairQuotesQuery<TData> extends InfinityIndexReactQuery<ArrayOfPairQuote, TData> {
  args: {
    collection: string;
    denom: string;
    queryOptions?: QueryOptionsForPairQuoteOffset;
  };
}
export function useInfinityIndexBuyFromPairQuotesQuery<TData = ArrayOfPairQuote>({
  client,
  args,
  options
}: InfinityIndexBuyFromPairQuotesQuery<TData>) {
  return useQuery<ArrayOfPairQuote, Error, TData>(infinityIndexQueryKeys.buyFromPairQuotes(client?.contractAddress, args), () => client ? client.buyFromPairQuotes({
    collection: args.collection,
    denom: args.denom,
    queryOptions: args.queryOptions
  }) : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface InfinityIndexSellToPairQuotesQuery<TData> extends InfinityIndexReactQuery<ArrayOfPairQuote, TData> {
  args: {
    collection: string;
    denom: string;
    queryOptions?: QueryOptionsForPairQuoteOffset;
  };
}
export function useInfinityIndexSellToPairQuotesQuery<TData = ArrayOfPairQuote>({
  client,
  args,
  options
}: InfinityIndexSellToPairQuotesQuery<TData>) {
  return useQuery<ArrayOfPairQuote, Error, TData>(infinityIndexQueryKeys.sellToPairQuotes(client?.contractAddress, args), () => client ? client.sellToPairQuotes({
    collection: args.collection,
    denom: args.denom,
    queryOptions: args.queryOptions
  }) : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}