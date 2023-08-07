use cosmwasm_schema::cw_serde;
use cosmwasm_std::{Addr, Decimal, Uint128};
use cw_storage_plus::{Item, Map};

use crate::constants::TopKey;

pub type Denom = String;
pub type TokenId = String;

// The address of the infinity global contract
pub const INFINITY_GLOBAL: Item<Addr> = Item::new(TopKey::InfinityGlobal.as_str());

// A map of all NFT token ids held by the pair
pub const NFT_DEPOSITS: Map<TokenId, bool> = Map::new(TopKey::NftDeposits.as_str());

/// PairType refers to the assets held by the pair
/// * Token: A pair that holds fungible tokens
/// * Nft: A pair that holds NFTs
/// * Trade: A pair that holds both fungible tokens and NFTs
#[cw_serde]
pub enum PairType {
    Token,
    Nft,
    Trade {
        /// The percentage of the swap that will be paid to the pair owner
        /// Note: this only applies to Trade pairs
        swap_fee_percent: Decimal,
        /// Whether or not the tokens sold into the pair will be reinvested
        reinvest_tokens: bool,
        /// Whether or not the NFTs sold into the pair will be reinvested
        reinvest_nfts: bool,
    },
}

/// BondingCurve refers to the curve used to calculate the spot price for the pair
/// * Linear: A linear curve that increments by a constant amount (delta)
/// * Exponential: An exponential curve that increments by a percentage amount (delta)
/// * ConstantProduct: A constant product curve that maintains a constant product of the two assets
#[cw_serde]
pub enum BondingCurve {
    Linear {
        /// A moving value used to derive the price at which the pair will trade assets
        /// Note: this value is not necessarily the final sale price for pair assets
        spot_price: Uint128,
        /// The amount by which the spot price will increment/decrement
        /// For linear curves, this is the constant amount
        /// For exponential curves, this is the percentage amount (treated as basis points)
        delta: Uint128,
    },
    Exponential {
        /// A moving value used to derive the price at which the pair will trade assets
        /// Note: this value is not necessarily the final sale price for pair assets
        spot_price: Uint128,
        /// The amount by which the spot price will increment/decrement
        /// For linear curves, this is the constant amount
        /// For exponential curves, this is the percentage amount (treated as basis points)
        delta: Decimal,
    },
    ConstantProduct,
}

#[cw_serde]
pub struct PairImmutable {
    /// The address of the NFT collection contract
    pub collection: Addr,
    /// The address of the pair owner
    pub owner: Addr,
    /// The denom of the assets held by the pair
    pub denom: Denom,
}

pub const PAIR_IMMUTABLE: Item<PairImmutable> = Item::new(TopKey::PairImmutable.as_str());

/// PairConfig represents the configuration parameters for a pair, set by the user
#[cw_serde]
pub struct PairConfig {
    /// The type of assets held by the pair
    pub pair_type: PairType,
    /// The bonding curve used to calculate the spot price
    pub bonding_curve: BondingCurve,
    /// Whether or not the pair is accepting trades
    pub is_active: bool,
    /// The address of the recipient of assets traded into the pair
    pub asset_recipient: Option<Addr>,
}

pub const PAIR_CONFIG: Item<PairConfig> = Item::new(TopKey::PairConfig.as_str());

#[cw_serde]
pub struct QuoteSummary {
    pub fair_burn_amount: Uint128,
    pub royalty_amount: Option<Uint128>,
    pub seller_amount: Uint128,
}

/// PairState represents the internal state of the pair, not directly set by the user
#[cw_serde]
pub struct PairInternal {
    pub total_nfts: Uint128,
    pub buy_from_pair_quote_summary: Option<QuoteSummary>,
    pub sell_to_pair_quote_summary: Option<QuoteSummary>,
}

pub const PAIR_INTERNAL: Item<PairInternal> = Item::new(TopKey::PairInternal.as_str());