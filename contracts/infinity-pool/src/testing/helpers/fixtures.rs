use crate::msg::ExecuteMsg;
use crate::state::{BondingCurve, Pool, PoolType};
use crate::testing::helpers::nft_functions::{approve, mint};
use crate::testing::helpers::pool_functions::create_pool;
use cosmwasm_std::{Addr, Uint128};
use sg_multi_test::StargazeApp;

use super::pool_functions::{activate, deposit_nfts, deposit_tokens};

pub fn get_pool_fixtures(collection: &Addr, asset_account: &Addr) -> Vec<ExecuteMsg> {
    vec![
        ExecuteMsg::CreatePool {
            collection: collection.to_string(),
            asset_recipient: Some(asset_account.to_string()),
            pool_type: PoolType::Token,
            bonding_curve: BondingCurve::Linear,
            spot_price: Uint128::from(100u64),
            delta: Uint128::from(10u64),
            finders_fee_bps: 0,
            swap_fee_bps: 0,
            reinvest_nfts: false,
            reinvest_tokens: false,
        },
        ExecuteMsg::CreatePool {
            collection: collection.to_string(),
            asset_recipient: Some(asset_account.to_string()),
            pool_type: PoolType::Token,
            bonding_curve: BondingCurve::Exponential,
            spot_price: Uint128::from(200u64),
            delta: Uint128::from(20u64),
            finders_fee_bps: 0,
            swap_fee_bps: 0,
            reinvest_nfts: false,
            reinvest_tokens: false,
        },
        ExecuteMsg::CreatePool {
            collection: collection.to_string(),
            asset_recipient: Some(asset_account.to_string()),
            pool_type: PoolType::Nft,
            bonding_curve: BondingCurve::Linear,
            spot_price: Uint128::from(300u64),
            delta: Uint128::from(30u64),
            finders_fee_bps: 0,
            swap_fee_bps: 0,
            reinvest_nfts: false,
            reinvest_tokens: false,
        },
        ExecuteMsg::CreatePool {
            collection: collection.to_string(),
            asset_recipient: Some(asset_account.to_string()),
            pool_type: PoolType::Nft,
            bonding_curve: BondingCurve::Exponential,
            spot_price: Uint128::from(400u64),
            delta: Uint128::from(40u64),
            finders_fee_bps: 0,
            swap_fee_bps: 0,
            reinvest_nfts: false,
            reinvest_tokens: false,
        },
        ExecuteMsg::CreatePool {
            collection: collection.to_string(),
            asset_recipient: Some(asset_account.to_string()),
            pool_type: PoolType::Trade,
            bonding_curve: BondingCurve::Linear,
            spot_price: Uint128::from(500u64),
            delta: Uint128::from(50u64),
            finders_fee_bps: 0,
            swap_fee_bps: 50,
            reinvest_nfts: false,
            reinvest_tokens: false,
        },
        ExecuteMsg::CreatePool {
            collection: collection.to_string(),
            asset_recipient: Some(asset_account.to_string()),
            pool_type: PoolType::Trade,
            bonding_curve: BondingCurve::Exponential,
            spot_price: Uint128::from(600u64),
            delta: Uint128::from(60u64),
            finders_fee_bps: 0,
            swap_fee_bps: 60,
            reinvest_nfts: false,
            reinvest_tokens: false,
        },
        ExecuteMsg::CreatePool {
            collection: collection.to_string(),
            asset_recipient: Some(asset_account.to_string()),
            pool_type: PoolType::Trade,
            bonding_curve: BondingCurve::ConstantProduct,
            spot_price: Uint128::from(700u64),
            delta: Uint128::from(70u64),
            finders_fee_bps: 0,
            swap_fee_bps: 70,
            reinvest_nfts: false,
            reinvest_tokens: false,
        },
        ExecuteMsg::CreatePool {
            collection: collection.to_string(),
            asset_recipient: Some(asset_account.to_string()),
            pool_type: PoolType::Token,
            bonding_curve: BondingCurve::Linear,
            spot_price: Uint128::from(800u64),
            delta: Uint128::from(80u64),
            finders_fee_bps: 0,
            swap_fee_bps: 0,
            reinvest_nfts: false,
            reinvest_tokens: false,
        },
        ExecuteMsg::CreatePool {
            collection: collection.to_string(),
            asset_recipient: Some(asset_account.to_string()),
            pool_type: PoolType::Token,
            bonding_curve: BondingCurve::Exponential,
            spot_price: Uint128::from(900u64),
            delta: Uint128::from(90u64),
            finders_fee_bps: 0,
            swap_fee_bps: 0,
            reinvest_nfts: false,
            reinvest_tokens: false,
        },
        ExecuteMsg::CreatePool {
            collection: collection.to_string(),
            asset_recipient: Some(asset_account.to_string()),
            pool_type: PoolType::Nft,
            bonding_curve: BondingCurve::Linear,
            spot_price: Uint128::from(1000u64),
            delta: Uint128::from(100u64),
            finders_fee_bps: 0,
            swap_fee_bps: 0,
            reinvest_nfts: false,
            reinvest_tokens: false,
        },
        ExecuteMsg::CreatePool {
            collection: collection.to_string(),
            asset_recipient: Some(asset_account.to_string()),
            pool_type: PoolType::Nft,
            bonding_curve: BondingCurve::Exponential,
            spot_price: Uint128::from(1100u64),
            delta: Uint128::from(110u64),
            finders_fee_bps: 0,
            swap_fee_bps: 0,
            reinvest_nfts: false,
            reinvest_tokens: false,
        },
        ExecuteMsg::CreatePool {
            collection: collection.to_string(),
            asset_recipient: Some(asset_account.to_string()),
            pool_type: PoolType::Trade,
            bonding_curve: BondingCurve::Linear,
            spot_price: Uint128::from(1200u64),
            delta: Uint128::from(120u64),
            finders_fee_bps: 0,
            swap_fee_bps: 50,
            reinvest_nfts: false,
            reinvest_tokens: false,
        },
        ExecuteMsg::CreatePool {
            collection: collection.to_string(),
            asset_recipient: Some(asset_account.to_string()),
            pool_type: PoolType::Trade,
            bonding_curve: BondingCurve::Exponential,
            spot_price: Uint128::from(1300u64),
            delta: Uint128::from(130u64),
            finders_fee_bps: 0,
            swap_fee_bps: 60,
            reinvest_nfts: false,
            reinvest_tokens: false,
        },
        ExecuteMsg::CreatePool {
            collection: collection.to_string(),
            asset_recipient: Some(asset_account.to_string()),
            pool_type: PoolType::Trade,
            bonding_curve: BondingCurve::ConstantProduct,
            spot_price: Uint128::from(1400u64),
            delta: Uint128::from(140u64),
            finders_fee_bps: 0,
            swap_fee_bps: 70,
            reinvest_nfts: false,
            reinvest_tokens: false,
        },
    ]
}

pub fn create_pool_fixtures(
    router: &mut StargazeApp,
    infinity_pool: Addr,
    collection: Addr,
    creator: Addr,
    user: Addr,
    asset_account: Addr,
) -> Vec<Pool> {
    let msgs = get_pool_fixtures(&collection, &asset_account);
    let mut pools = vec![];
    for (usize, msg) in msgs.into_iter().enumerate() {
        let sender = if usize < 7 {
            creator.clone()
        } else {
            user.clone()
        };
        pools.push(create_pool(router, infinity_pool.clone(), sender.clone(), msg).unwrap());
    }
    pools
}

pub fn create_and_activate_pool_fixtures(
    router: &mut StargazeApp,
    infinity_pool: Addr,
    minter: Addr,
    collection: Addr,
    creator: Addr,
    _user: Addr,
    asset_account: Addr,
) -> Vec<Pool> {
    let msgs = get_pool_fixtures(&collection, &asset_account);
    let mut pools = vec![];
    for msg in msgs.into_iter() {
        let pool = create_pool(router, infinity_pool.clone(), creator.clone(), msg).unwrap();
        if pool.can_buy_nfts() {
            deposit_tokens(
                router,
                infinity_pool.clone(),
                pool.owner.clone(),
                pool.id,
                pool.spot_price * Uint128::from(2u64),
            )
            .unwrap();
        }
        if pool.can_sell_nfts() {
            let token_id_1 = mint(router, &pool.owner, &minter);
            approve(router, &pool.owner, &collection, &infinity_pool, token_id_1);
            let token_id_2 = mint(router, &pool.owner, &minter);
            approve(router, &pool.owner, &collection, &infinity_pool, token_id_2);
            deposit_nfts(
                router,
                infinity_pool.clone(),
                pool.owner.clone(),
                pool.id,
                pool.collection.clone(),
                vec![token_id_1, token_id_2]
                    .iter()
                    .map(|t| t.to_string())
                    .collect(),
            )
            .unwrap();
        }
        activate(
            router,
            infinity_pool.clone(),
            pool.owner.clone(),
            pool.id,
            true,
        )
        .unwrap();
        pools.push(pool);
    }
    pools
}