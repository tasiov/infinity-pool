/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.30.1.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

export type BondingCurve = "constant_product" | {
  linear: {
    delta: Uint128;
    spot_price: Uint128;
  };
} | {
  exponential: {
    delta: Decimal;
    spot_price: Uint128;
  };
};
export type Uint128 = string;
export type Decimal = string;
export type PairType = ("token" | "nft") | {
  trade: {
    reinvest_nfts: boolean;
    reinvest_tokens: boolean;
    swap_fee_percent: Decimal;
  };
};
export interface InstantiateMsg {
  infinity_global: string;
  pair_config: PairConfigForString;
  pair_immutable: PairImmutableForString;
}
export interface PairConfigForString {
  asset_recipient?: string | null;
  bonding_curve: BondingCurve;
  is_active: boolean;
  pair_type: PairType;
}
export interface PairImmutableForString {
  collection: string;
  denom: string;
  owner: string;
}
export type ExecuteMsg = {
  receive_nft: Cw721ReceiveMsg;
} | {
  withdraw_nfts: {
    token_ids: string[];
  };
} | {
  withdraw_any_nfts: {
    limit: number;
  };
} | {
  deposit_tokens: {};
} | {
  withdraw_tokens: {
    amount: Uint128;
  };
} | {
  withdraw_all_tokens: {};
} | {
  update_pair_config: {
    asset_recipient?: string | null;
    bonding_curve?: BondingCurve | null;
    is_active?: boolean | null;
    pair_type?: PairType | null;
  };
} | {
  swap_nft_for_tokens: {
    asset_recipient?: string | null;
    min_output: Coin;
    token_id: string;
  };
} | {
  swap_tokens_for_specific_nft: {
    asset_recipient?: string | null;
    token_id: string;
  };
} | {
  swap_tokens_for_any_nft: {
    asset_recipient?: string | null;
  };
};
export type Binary = string;
export interface Cw721ReceiveMsg {
  msg: Binary;
  sender: string;
  token_id: string;
}
export interface Coin {
  amount: Uint128;
  denom: string;
  [k: string]: unknown;
}
export type QueryMsg = {
  pair: {};
} | {
  nft_deposits: {
    query_options?: QueryOptionsForString | null;
  };
};
export type QueryBoundForString = {
  inclusive: string;
} | {
  exclusive: string;
};
export interface QueryOptionsForString {
  descending?: boolean | null;
  limit?: number | null;
  max?: QueryBoundForString | null;
  min?: QueryBoundForString | null;
}
export type Addr = string;
export interface NftDepositsResponse {
  collection: Addr;
  token_ids: string[];
}
export interface Pair {
  config: PairConfigForAddr;
  immutable: PairImmutableForAddr;
  internal: PairInternal;
  total_tokens: Uint128;
}
export interface PairConfigForAddr {
  asset_recipient?: Addr | null;
  bonding_curve: BondingCurve;
  is_active: boolean;
  pair_type: PairType;
}
export interface PairImmutableForAddr {
  collection: Addr;
  denom: string;
  owner: Addr;
}
export interface PairInternal {
  buy_from_pair_quote_summary?: QuoteSummary | null;
  sell_to_pair_quote_summary?: QuoteSummary | null;
  total_nfts: number;
}
export interface QuoteSummary {
  fair_burn: TokenPayment;
  royalty?: TokenPayment | null;
  seller_amount: Uint128;
  swap?: TokenPayment | null;
}
export interface TokenPayment {
  amount: Uint128;
  recipient: Addr;
}