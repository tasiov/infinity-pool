/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.30.1.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { UseQueryOptions, useQuery } from "react-query";
import { Uint128, Decimal, InstantiateMsg, PriceRange, SudoParamsForString, Coin, ExecuteMsg, Timestamp, Uint64, UpdateValForString, UpdateValForExpirationInfo, UpdateValForDecimal, OrderOptionsForString, ExpirationInfo, QueryMsg, QueryBoundForString, QueryBoundForAsksByCollectionOffset, QueryBoundForAsksByPriceOffset, QueryBoundForAsksByCreatorOffset, QueryBoundForAsksByExpirationOffset, QueryBoundForOffersByCollectionOffset, QueryBoundForOffersByTokenPriceOffset, QueryBoundForOffersByCreatorOffset, QueryBoundForOffersByExpirationOffset, QueryBoundForCollectionOffersByCollectionOffset, QueryBoundForCollectionOffersByPriceOffset, QueryBoundForCollectionOffersByCreatorOffset, QueryBoundForCollectionOffersByExpirationOffset, QueryOptionsForString, QueryOptionsForAsksByCollectionOffset, AsksByCollectionOffset, QueryOptionsForAsksByPriceOffset, AsksByPriceOffset, QueryOptionsForAsksByCreatorOffset, AsksByCreatorOffset, QueryOptionsForAsksByExpirationOffset, AsksByExpirationOffset, QueryOptionsForOffersByCollectionOffset, OffersByCollectionOffset, QueryOptionsForOffersByTokenPriceOffset, OffersByTokenPriceOffset, QueryOptionsForOffersByCreatorOffset, OffersByCreatorOffset, QueryOptionsForOffersByExpirationOffset, OffersByExpirationOffset, QueryOptionsForCollectionOffersByCollectionOffset, CollectionOffersByCollectionOffset, QueryOptionsForCollectionOffersByPriceOffset, CollectionOffersByPriceOffset, QueryOptionsForCollectionOffersByCreatorOffset, CollectionOffersByCreatorOffset, QueryOptionsForCollectionOffersByExpirationOffset, CollectionOffersByExpirationOffset, NullableAsk, Addr, Ask, OrderInfo, ArrayOfAsk, NullableCollectionOffer, CollectionOffer, ArrayOfOffer, Offer, ArrayOfCollectionOffer, ArrayOfTupleOfStringAndPriceRange, SudoParamsForAddr } from "./MarketplaceV2.types";
import { MarketplaceV2QueryClient } from "./MarketplaceV2.client";
export const marketplaceV2QueryKeys = {
  contract: ([{
    contract: "marketplaceV2"
  }] as const),
  address: (contractAddress: string | undefined) => ([{ ...marketplaceV2QueryKeys.contract[0],
    address: contractAddress
  }] as const),
  sudoParams: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...marketplaceV2QueryKeys.address(contractAddress)[0],
    method: "sudo_params",
    args
  }] as const),
  priceRange: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...marketplaceV2QueryKeys.address(contractAddress)[0],
    method: "price_range",
    args
  }] as const),
  priceRanges: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...marketplaceV2QueryKeys.address(contractAddress)[0],
    method: "price_ranges",
    args
  }] as const),
  ask: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...marketplaceV2QueryKeys.address(contractAddress)[0],
    method: "ask",
    args
  }] as const),
  asksByCollection: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...marketplaceV2QueryKeys.address(contractAddress)[0],
    method: "asks_by_collection",
    args
  }] as const),
  asksByPrice: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...marketplaceV2QueryKeys.address(contractAddress)[0],
    method: "asks_by_price",
    args
  }] as const),
  asksByCreator: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...marketplaceV2QueryKeys.address(contractAddress)[0],
    method: "asks_by_creator",
    args
  }] as const),
  asksByExpiration: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...marketplaceV2QueryKeys.address(contractAddress)[0],
    method: "asks_by_expiration",
    args
  }] as const),
  offer: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...marketplaceV2QueryKeys.address(contractAddress)[0],
    method: "offer",
    args
  }] as const),
  offersByCollection: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...marketplaceV2QueryKeys.address(contractAddress)[0],
    method: "offers_by_collection",
    args
  }] as const),
  offersByTokenPrice: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...marketplaceV2QueryKeys.address(contractAddress)[0],
    method: "offers_by_token_price",
    args
  }] as const),
  offersByCreator: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...marketplaceV2QueryKeys.address(contractAddress)[0],
    method: "offers_by_creator",
    args
  }] as const),
  offersByExpiration: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...marketplaceV2QueryKeys.address(contractAddress)[0],
    method: "offers_by_expiration",
    args
  }] as const),
  collectionOffer: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...marketplaceV2QueryKeys.address(contractAddress)[0],
    method: "collection_offer",
    args
  }] as const),
  collectionOffersByCollection: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...marketplaceV2QueryKeys.address(contractAddress)[0],
    method: "collection_offers_by_collection",
    args
  }] as const),
  collectionOffersByPrice: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...marketplaceV2QueryKeys.address(contractAddress)[0],
    method: "collection_offers_by_price",
    args
  }] as const),
  collectionOffersByCreator: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...marketplaceV2QueryKeys.address(contractAddress)[0],
    method: "collection_offers_by_creator",
    args
  }] as const),
  collectionOffersByExpiration: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...marketplaceV2QueryKeys.address(contractAddress)[0],
    method: "collection_offers_by_expiration",
    args
  }] as const)
};
export const marketplaceV2Queries = {
  sudoParams: <TData = SudoParamsForAddr,>({
    client,
    options
  }: MarketplaceV2SudoParamsQuery<TData>): UseQueryOptions<SudoParamsForAddr, Error, TData> => ({
    queryKey: marketplaceV2QueryKeys.sudoParams(client?.contractAddress),
    queryFn: () => client ? client.sudoParams() : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  priceRange: <TData = PriceRange,>({
    client,
    args,
    options
  }: MarketplaceV2PriceRangeQuery<TData>): UseQueryOptions<PriceRange, Error, TData> => ({
    queryKey: marketplaceV2QueryKeys.priceRange(client?.contractAddress, args),
    queryFn: () => client ? client.priceRange({
      denom: args.denom
    }) : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  priceRanges: <TData = ArrayOfTupleOfStringAndPriceRange,>({
    client,
    args,
    options
  }: MarketplaceV2PriceRangesQuery<TData>): UseQueryOptions<ArrayOfTupleOfStringAndPriceRange, Error, TData> => ({
    queryKey: marketplaceV2QueryKeys.priceRanges(client?.contractAddress, args),
    queryFn: () => client ? client.priceRanges({
      queryOptions: args.queryOptions
    }) : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  ask: <TData = NullableAsk,>({
    client,
    args,
    options
  }: MarketplaceV2AskQuery<TData>): UseQueryOptions<NullableAsk, Error, TData> => ({
    queryKey: marketplaceV2QueryKeys.ask(client?.contractAddress, args),
    queryFn: () => client ? client.ask({
      collection: args.collection,
      tokenId: args.tokenId
    }) : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  asksByCollection: <TData = ArrayOfAsk,>({
    client,
    args,
    options
  }: MarketplaceV2AsksByCollectionQuery<TData>): UseQueryOptions<ArrayOfAsk, Error, TData> => ({
    queryKey: marketplaceV2QueryKeys.asksByCollection(client?.contractAddress, args),
    queryFn: () => client ? client.asksByCollection({
      collection: args.collection,
      queryOptions: args.queryOptions
    }) : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  asksByPrice: <TData = ArrayOfAsk,>({
    client,
    args,
    options
  }: MarketplaceV2AsksByPriceQuery<TData>): UseQueryOptions<ArrayOfAsk, Error, TData> => ({
    queryKey: marketplaceV2QueryKeys.asksByPrice(client?.contractAddress, args),
    queryFn: () => client ? client.asksByPrice({
      collection: args.collection,
      denom: args.denom,
      queryOptions: args.queryOptions
    }) : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  asksByCreator: <TData = ArrayOfAsk,>({
    client,
    args,
    options
  }: MarketplaceV2AsksByCreatorQuery<TData>): UseQueryOptions<ArrayOfAsk, Error, TData> => ({
    queryKey: marketplaceV2QueryKeys.asksByCreator(client?.contractAddress, args),
    queryFn: () => client ? client.asksByCreator({
      creator: args.creator,
      queryOptions: args.queryOptions
    }) : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  asksByExpiration: <TData = ArrayOfAsk,>({
    client,
    args,
    options
  }: MarketplaceV2AsksByExpirationQuery<TData>): UseQueryOptions<ArrayOfAsk, Error, TData> => ({
    queryKey: marketplaceV2QueryKeys.asksByExpiration(client?.contractAddress, args),
    queryFn: () => client ? client.asksByExpiration({
      queryOptions: args.queryOptions
    }) : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  offer: <TData = Offer,>({
    client,
    args,
    options
  }: MarketplaceV2OfferQuery<TData>): UseQueryOptions<Offer, Error, TData> => ({
    queryKey: marketplaceV2QueryKeys.offer(client?.contractAddress, args),
    queryFn: () => client ? client.offer({
      collection: args.collection,
      creator: args.creator,
      tokenId: args.tokenId
    }) : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  offersByCollection: <TData = ArrayOfOffer,>({
    client,
    args,
    options
  }: MarketplaceV2OffersByCollectionQuery<TData>): UseQueryOptions<ArrayOfOffer, Error, TData> => ({
    queryKey: marketplaceV2QueryKeys.offersByCollection(client?.contractAddress, args),
    queryFn: () => client ? client.offersByCollection({
      collection: args.collection,
      queryOptions: args.queryOptions
    }) : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  offersByTokenPrice: <TData = ArrayOfOffer,>({
    client,
    args,
    options
  }: MarketplaceV2OffersByTokenPriceQuery<TData>): UseQueryOptions<ArrayOfOffer, Error, TData> => ({
    queryKey: marketplaceV2QueryKeys.offersByTokenPrice(client?.contractAddress, args),
    queryFn: () => client ? client.offersByTokenPrice({
      collection: args.collection,
      denom: args.denom,
      queryOptions: args.queryOptions,
      tokenId: args.tokenId
    }) : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  offersByCreator: <TData = ArrayOfOffer,>({
    client,
    args,
    options
  }: MarketplaceV2OffersByCreatorQuery<TData>): UseQueryOptions<ArrayOfOffer, Error, TData> => ({
    queryKey: marketplaceV2QueryKeys.offersByCreator(client?.contractAddress, args),
    queryFn: () => client ? client.offersByCreator({
      creator: args.creator,
      queryOptions: args.queryOptions
    }) : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  offersByExpiration: <TData = ArrayOfOffer,>({
    client,
    args,
    options
  }: MarketplaceV2OffersByExpirationQuery<TData>): UseQueryOptions<ArrayOfOffer, Error, TData> => ({
    queryKey: marketplaceV2QueryKeys.offersByExpiration(client?.contractAddress, args),
    queryFn: () => client ? client.offersByExpiration({
      queryOptions: args.queryOptions
    }) : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  collectionOffer: <TData = NullableCollectionOffer,>({
    client,
    args,
    options
  }: MarketplaceV2CollectionOfferQuery<TData>): UseQueryOptions<NullableCollectionOffer, Error, TData> => ({
    queryKey: marketplaceV2QueryKeys.collectionOffer(client?.contractAddress, args),
    queryFn: () => client ? client.collectionOffer({
      collection: args.collection,
      creator: args.creator
    }) : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  collectionOffersByCollection: <TData = ArrayOfOffer,>({
    client,
    args,
    options
  }: MarketplaceV2CollectionOffersByCollectionQuery<TData>): UseQueryOptions<ArrayOfOffer, Error, TData> => ({
    queryKey: marketplaceV2QueryKeys.collectionOffersByCollection(client?.contractAddress, args),
    queryFn: () => client ? client.collectionOffersByCollection({
      collection: args.collection,
      queryOptions: args.queryOptions
    }) : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  collectionOffersByPrice: <TData = ArrayOfCollectionOffer,>({
    client,
    args,
    options
  }: MarketplaceV2CollectionOffersByPriceQuery<TData>): UseQueryOptions<ArrayOfCollectionOffer, Error, TData> => ({
    queryKey: marketplaceV2QueryKeys.collectionOffersByPrice(client?.contractAddress, args),
    queryFn: () => client ? client.collectionOffersByPrice({
      collection: args.collection,
      denom: args.denom,
      queryOptions: args.queryOptions
    }) : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  collectionOffersByCreator: <TData = ArrayOfCollectionOffer,>({
    client,
    args,
    options
  }: MarketplaceV2CollectionOffersByCreatorQuery<TData>): UseQueryOptions<ArrayOfCollectionOffer, Error, TData> => ({
    queryKey: marketplaceV2QueryKeys.collectionOffersByCreator(client?.contractAddress, args),
    queryFn: () => client ? client.collectionOffersByCreator({
      creator: args.creator,
      queryOptions: args.queryOptions
    }) : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  collectionOffersByExpiration: <TData = ArrayOfCollectionOffer,>({
    client,
    args,
    options
  }: MarketplaceV2CollectionOffersByExpirationQuery<TData>): UseQueryOptions<ArrayOfCollectionOffer, Error, TData> => ({
    queryKey: marketplaceV2QueryKeys.collectionOffersByExpiration(client?.contractAddress, args),
    queryFn: () => client ? client.collectionOffersByExpiration({
      queryOptions: args.queryOptions
    }) : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  })
};
export interface MarketplaceV2ReactQuery<TResponse, TData = TResponse> {
  client: MarketplaceV2QueryClient | undefined;
  options?: UseQueryOptions<TResponse, Error, TData>;
}
export interface MarketplaceV2CollectionOffersByExpirationQuery<TData> extends MarketplaceV2ReactQuery<ArrayOfCollectionOffer, TData> {
  args: {
    queryOptions?: QueryOptionsForCollectionOffersByExpirationOffset;
  };
}
export function useMarketplaceV2CollectionOffersByExpirationQuery<TData = ArrayOfCollectionOffer>({
  client,
  args,
  options
}: MarketplaceV2CollectionOffersByExpirationQuery<TData>) {
  return useQuery<ArrayOfCollectionOffer, Error, TData>(marketplaceV2QueryKeys.collectionOffersByExpiration(client?.contractAddress, args), () => client ? client.collectionOffersByExpiration({
    queryOptions: args.queryOptions
  }) : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface MarketplaceV2CollectionOffersByCreatorQuery<TData> extends MarketplaceV2ReactQuery<ArrayOfCollectionOffer, TData> {
  args: {
    creator: string;
    queryOptions?: QueryOptionsForCollectionOffersByCreatorOffset;
  };
}
export function useMarketplaceV2CollectionOffersByCreatorQuery<TData = ArrayOfCollectionOffer>({
  client,
  args,
  options
}: MarketplaceV2CollectionOffersByCreatorQuery<TData>) {
  return useQuery<ArrayOfCollectionOffer, Error, TData>(marketplaceV2QueryKeys.collectionOffersByCreator(client?.contractAddress, args), () => client ? client.collectionOffersByCreator({
    creator: args.creator,
    queryOptions: args.queryOptions
  }) : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface MarketplaceV2CollectionOffersByPriceQuery<TData> extends MarketplaceV2ReactQuery<ArrayOfCollectionOffer, TData> {
  args: {
    collection: string;
    denom: string;
    queryOptions?: QueryOptionsForCollectionOffersByPriceOffset;
  };
}
export function useMarketplaceV2CollectionOffersByPriceQuery<TData = ArrayOfCollectionOffer>({
  client,
  args,
  options
}: MarketplaceV2CollectionOffersByPriceQuery<TData>) {
  return useQuery<ArrayOfCollectionOffer, Error, TData>(marketplaceV2QueryKeys.collectionOffersByPrice(client?.contractAddress, args), () => client ? client.collectionOffersByPrice({
    collection: args.collection,
    denom: args.denom,
    queryOptions: args.queryOptions
  }) : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface MarketplaceV2CollectionOffersByCollectionQuery<TData> extends MarketplaceV2ReactQuery<ArrayOfOffer, TData> {
  args: {
    collection: string;
    queryOptions?: QueryOptionsForCollectionOffersByCollectionOffset;
  };
}
export function useMarketplaceV2CollectionOffersByCollectionQuery<TData = ArrayOfOffer>({
  client,
  args,
  options
}: MarketplaceV2CollectionOffersByCollectionQuery<TData>) {
  return useQuery<ArrayOfOffer, Error, TData>(marketplaceV2QueryKeys.collectionOffersByCollection(client?.contractAddress, args), () => client ? client.collectionOffersByCollection({
    collection: args.collection,
    queryOptions: args.queryOptions
  }) : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface MarketplaceV2CollectionOfferQuery<TData> extends MarketplaceV2ReactQuery<NullableCollectionOffer, TData> {
  args: {
    collection: string;
    creator: string;
  };
}
export function useMarketplaceV2CollectionOfferQuery<TData = NullableCollectionOffer>({
  client,
  args,
  options
}: MarketplaceV2CollectionOfferQuery<TData>) {
  return useQuery<NullableCollectionOffer, Error, TData>(marketplaceV2QueryKeys.collectionOffer(client?.contractAddress, args), () => client ? client.collectionOffer({
    collection: args.collection,
    creator: args.creator
  }) : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface MarketplaceV2OffersByExpirationQuery<TData> extends MarketplaceV2ReactQuery<ArrayOfOffer, TData> {
  args: {
    queryOptions?: QueryOptionsForOffersByExpirationOffset;
  };
}
export function useMarketplaceV2OffersByExpirationQuery<TData = ArrayOfOffer>({
  client,
  args,
  options
}: MarketplaceV2OffersByExpirationQuery<TData>) {
  return useQuery<ArrayOfOffer, Error, TData>(marketplaceV2QueryKeys.offersByExpiration(client?.contractAddress, args), () => client ? client.offersByExpiration({
    queryOptions: args.queryOptions
  }) : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface MarketplaceV2OffersByCreatorQuery<TData> extends MarketplaceV2ReactQuery<ArrayOfOffer, TData> {
  args: {
    creator: string;
    queryOptions?: QueryOptionsForOffersByCreatorOffset;
  };
}
export function useMarketplaceV2OffersByCreatorQuery<TData = ArrayOfOffer>({
  client,
  args,
  options
}: MarketplaceV2OffersByCreatorQuery<TData>) {
  return useQuery<ArrayOfOffer, Error, TData>(marketplaceV2QueryKeys.offersByCreator(client?.contractAddress, args), () => client ? client.offersByCreator({
    creator: args.creator,
    queryOptions: args.queryOptions
  }) : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface MarketplaceV2OffersByTokenPriceQuery<TData> extends MarketplaceV2ReactQuery<ArrayOfOffer, TData> {
  args: {
    collection: string;
    denom: string;
    queryOptions?: QueryOptionsForOffersByTokenPriceOffset;
    tokenId: string;
  };
}
export function useMarketplaceV2OffersByTokenPriceQuery<TData = ArrayOfOffer>({
  client,
  args,
  options
}: MarketplaceV2OffersByTokenPriceQuery<TData>) {
  return useQuery<ArrayOfOffer, Error, TData>(marketplaceV2QueryKeys.offersByTokenPrice(client?.contractAddress, args), () => client ? client.offersByTokenPrice({
    collection: args.collection,
    denom: args.denom,
    queryOptions: args.queryOptions,
    tokenId: args.tokenId
  }) : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface MarketplaceV2OffersByCollectionQuery<TData> extends MarketplaceV2ReactQuery<ArrayOfOffer, TData> {
  args: {
    collection: string;
    queryOptions?: QueryOptionsForOffersByCollectionOffset;
  };
}
export function useMarketplaceV2OffersByCollectionQuery<TData = ArrayOfOffer>({
  client,
  args,
  options
}: MarketplaceV2OffersByCollectionQuery<TData>) {
  return useQuery<ArrayOfOffer, Error, TData>(marketplaceV2QueryKeys.offersByCollection(client?.contractAddress, args), () => client ? client.offersByCollection({
    collection: args.collection,
    queryOptions: args.queryOptions
  }) : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface MarketplaceV2OfferQuery<TData> extends MarketplaceV2ReactQuery<Offer, TData> {
  args: {
    collection: string;
    creator: string;
    tokenId: string;
  };
}
export function useMarketplaceV2OfferQuery<TData = Offer>({
  client,
  args,
  options
}: MarketplaceV2OfferQuery<TData>) {
  return useQuery<Offer, Error, TData>(marketplaceV2QueryKeys.offer(client?.contractAddress, args), () => client ? client.offer({
    collection: args.collection,
    creator: args.creator,
    tokenId: args.tokenId
  }) : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface MarketplaceV2AsksByExpirationQuery<TData> extends MarketplaceV2ReactQuery<ArrayOfAsk, TData> {
  args: {
    queryOptions?: QueryOptionsForAsksByExpirationOffset;
  };
}
export function useMarketplaceV2AsksByExpirationQuery<TData = ArrayOfAsk>({
  client,
  args,
  options
}: MarketplaceV2AsksByExpirationQuery<TData>) {
  return useQuery<ArrayOfAsk, Error, TData>(marketplaceV2QueryKeys.asksByExpiration(client?.contractAddress, args), () => client ? client.asksByExpiration({
    queryOptions: args.queryOptions
  }) : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface MarketplaceV2AsksByCreatorQuery<TData> extends MarketplaceV2ReactQuery<ArrayOfAsk, TData> {
  args: {
    creator: string;
    queryOptions?: QueryOptionsForAsksByCreatorOffset;
  };
}
export function useMarketplaceV2AsksByCreatorQuery<TData = ArrayOfAsk>({
  client,
  args,
  options
}: MarketplaceV2AsksByCreatorQuery<TData>) {
  return useQuery<ArrayOfAsk, Error, TData>(marketplaceV2QueryKeys.asksByCreator(client?.contractAddress, args), () => client ? client.asksByCreator({
    creator: args.creator,
    queryOptions: args.queryOptions
  }) : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface MarketplaceV2AsksByPriceQuery<TData> extends MarketplaceV2ReactQuery<ArrayOfAsk, TData> {
  args: {
    collection: string;
    denom: string;
    queryOptions?: QueryOptionsForAsksByPriceOffset;
  };
}
export function useMarketplaceV2AsksByPriceQuery<TData = ArrayOfAsk>({
  client,
  args,
  options
}: MarketplaceV2AsksByPriceQuery<TData>) {
  return useQuery<ArrayOfAsk, Error, TData>(marketplaceV2QueryKeys.asksByPrice(client?.contractAddress, args), () => client ? client.asksByPrice({
    collection: args.collection,
    denom: args.denom,
    queryOptions: args.queryOptions
  }) : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface MarketplaceV2AsksByCollectionQuery<TData> extends MarketplaceV2ReactQuery<ArrayOfAsk, TData> {
  args: {
    collection: string;
    queryOptions?: QueryOptionsForAsksByCollectionOffset;
  };
}
export function useMarketplaceV2AsksByCollectionQuery<TData = ArrayOfAsk>({
  client,
  args,
  options
}: MarketplaceV2AsksByCollectionQuery<TData>) {
  return useQuery<ArrayOfAsk, Error, TData>(marketplaceV2QueryKeys.asksByCollection(client?.contractAddress, args), () => client ? client.asksByCollection({
    collection: args.collection,
    queryOptions: args.queryOptions
  }) : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface MarketplaceV2AskQuery<TData> extends MarketplaceV2ReactQuery<NullableAsk, TData> {
  args: {
    collection: string;
    tokenId: string;
  };
}
export function useMarketplaceV2AskQuery<TData = NullableAsk>({
  client,
  args,
  options
}: MarketplaceV2AskQuery<TData>) {
  return useQuery<NullableAsk, Error, TData>(marketplaceV2QueryKeys.ask(client?.contractAddress, args), () => client ? client.ask({
    collection: args.collection,
    tokenId: args.tokenId
  }) : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface MarketplaceV2PriceRangesQuery<TData> extends MarketplaceV2ReactQuery<ArrayOfTupleOfStringAndPriceRange, TData> {
  args: {
    queryOptions?: QueryOptionsForString;
  };
}
export function useMarketplaceV2PriceRangesQuery<TData = ArrayOfTupleOfStringAndPriceRange>({
  client,
  args,
  options
}: MarketplaceV2PriceRangesQuery<TData>) {
  return useQuery<ArrayOfTupleOfStringAndPriceRange, Error, TData>(marketplaceV2QueryKeys.priceRanges(client?.contractAddress, args), () => client ? client.priceRanges({
    queryOptions: args.queryOptions
  }) : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface MarketplaceV2PriceRangeQuery<TData> extends MarketplaceV2ReactQuery<PriceRange, TData> {
  args: {
    denom: string;
  };
}
export function useMarketplaceV2PriceRangeQuery<TData = PriceRange>({
  client,
  args,
  options
}: MarketplaceV2PriceRangeQuery<TData>) {
  return useQuery<PriceRange, Error, TData>(marketplaceV2QueryKeys.priceRange(client?.contractAddress, args), () => client ? client.priceRange({
    denom: args.denom
  }) : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface MarketplaceV2SudoParamsQuery<TData> extends MarketplaceV2ReactQuery<SudoParamsForAddr, TData> {}
export function useMarketplaceV2SudoParamsQuery<TData = SudoParamsForAddr>({
  client,
  options
}: MarketplaceV2SudoParamsQuery<TData>) {
  return useQuery<SudoParamsForAddr, Error, TData>(marketplaceV2QueryKeys.sudoParams(client?.contractAddress), () => client ? client.sudoParams() : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}