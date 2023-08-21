/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.30.1.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { UseQueryOptions, useQuery } from "react-query";
import { InstantiateMsg, ExecuteMsg, NftForTokensSource, Uint128, TokensForNftSource, SellOrder, SwapParamsForString, QueryMsg, Addr, NftForTokensSourceData, BondingCurve, Decimal, PairType, ArrayOfNftForTokensQuote, NftForTokensQuote, Pair, PairConfigForAddr, PairImmutableForAddr, PairInternal, QuoteSummary, TokenPayment, TokensForNftSourceData, ArrayOfTokensForNftQuote, TokensForNftQuote } from "./InfinityRouter.types";
import { InfinityRouterQueryClient } from "./InfinityRouter.client";
export const infinityRouterQueryKeys = {
  contract: ([{
    contract: "infinityRouter"
  }] as const),
  address: (contractAddress: string | undefined) => ([{ ...infinityRouterQueryKeys.contract[0],
    address: contractAddress
  }] as const),
  nftsForTokens: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...infinityRouterQueryKeys.address(contractAddress)[0],
    method: "nfts_for_tokens",
    args
  }] as const),
  tokensForNfts: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...infinityRouterQueryKeys.address(contractAddress)[0],
    method: "tokens_for_nfts",
    args
  }] as const)
};
export const infinityRouterQueries = {
  nftsForTokens: <TData = ArrayOfNftForTokensQuote,>({
    client,
    args,
    options
  }: InfinityRouterNftsForTokensQuery<TData>): UseQueryOptions<ArrayOfNftForTokensQuote, Error, TData> => ({
    queryKey: infinityRouterQueryKeys.nftsForTokens(client?.contractAddress, args),
    queryFn: () => client ? client.nftsForTokens({
      collection: args.collection,
      denom: args.denom,
      filterSources: args.filterSources,
      limit: args.limit
    }) : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  tokensForNfts: <TData = ArrayOfTokensForNftQuote,>({
    client,
    args,
    options
  }: InfinityRouterTokensForNftsQuery<TData>): UseQueryOptions<ArrayOfTokensForNftQuote, Error, TData> => ({
    queryKey: infinityRouterQueryKeys.tokensForNfts(client?.contractAddress, args),
    queryFn: () => client ? client.tokensForNfts({
      collection: args.collection,
      denom: args.denom,
      filterSources: args.filterSources,
      limit: args.limit
    }) : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  })
};
export interface InfinityRouterReactQuery<TResponse, TData = TResponse> {
  client: InfinityRouterQueryClient | undefined;
  options?: UseQueryOptions<TResponse, Error, TData>;
}
export interface InfinityRouterTokensForNftsQuery<TData> extends InfinityRouterReactQuery<ArrayOfTokensForNftQuote, TData> {
  args: {
    collection: string;
    denom: string;
    filterSources?: TokensForNftSource[];
    limit: number;
  };
}
export function useInfinityRouterTokensForNftsQuery<TData = ArrayOfTokensForNftQuote>({
  client,
  args,
  options
}: InfinityRouterTokensForNftsQuery<TData>) {
  return useQuery<ArrayOfTokensForNftQuote, Error, TData>(infinityRouterQueryKeys.tokensForNfts(client?.contractAddress, args), () => client ? client.tokensForNfts({
    collection: args.collection,
    denom: args.denom,
    filterSources: args.filterSources,
    limit: args.limit
  }) : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface InfinityRouterNftsForTokensQuery<TData> extends InfinityRouterReactQuery<ArrayOfNftForTokensQuote, TData> {
  args: {
    collection: string;
    denom: string;
    filterSources?: NftForTokensSource[];
    limit: number;
  };
}
export function useInfinityRouterNftsForTokensQuery<TData = ArrayOfNftForTokensQuote>({
  client,
  args,
  options
}: InfinityRouterNftsForTokensQuery<TData>) {
  return useQuery<ArrayOfNftForTokensQuote, Error, TData>(infinityRouterQueryKeys.nftsForTokens(client?.contractAddress, args), () => client ? client.nftsForTokens({
    collection: args.collection,
    denom: args.denom,
    filterSources: args.filterSources,
    limit: args.limit
  }) : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}