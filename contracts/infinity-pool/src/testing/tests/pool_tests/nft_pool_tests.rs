use std::vec;

use crate::error::ContractError;
use crate::msg::ExecuteMsg;
use crate::state::{BondingCurve, PoolType};
use crate::testing::helpers::nft_functions::{approve, mint};
use crate::testing::helpers::pool_functions::create_pool;
use crate::testing::helpers::utils::assert_error;
use crate::testing::setup::setup_accounts::setup_second_bidder_account;
use crate::testing::setup::setup_infinity_pool::setup_infinity_pool;
use crate::testing::setup::setup_marketplace::setup_marketplace;
use crate::testing::setup::templates::standard_minter_template;
use cosmwasm_std::{coins, Addr, Uint128};
use cw_multi_test::Executor;
use sg_std::{GENESIS_MINT_START_TIME, NATIVE_DENOM};
use test_suite::common_setup::setup_accounts_and_block::setup_block_time;

const ASSET_ACCOUNT: &str = "asset";

#[test]
fn create_nft_pool() {
    let vt = standard_minter_template(5000);
    let (mut router, creator, _bidder) = (vt.router, vt.accts.creator, vt.accts.bidder);
    let collection = vt.collection_response_vec[0].collection.clone().unwrap();
    let asset_account = Addr::unchecked(ASSET_ACCOUNT);

    let marketplace = setup_marketplace(&mut router, creator.clone()).unwrap();
    let infinity_pool = setup_infinity_pool(&mut router, creator.clone(), marketplace).unwrap();

    // Cannot create a ConstantProduct Nft Pool because the pool does not hold both assets
    let msg = ExecuteMsg::CreatePool {
        collection: collection.to_string(),
        asset_recipient: Some(asset_account.to_string()),
        pool_type: PoolType::Nft,
        bonding_curve: BondingCurve::ConstantProduct,
        spot_price: Uint128::from(2400u64),
        delta: Uint128::from(120u64),
        fee_bps: None,
    };
    let res = router.execute_contract(creator.clone(), infinity_pool.clone(), &msg, &[]);
    assert_error(
        res,
        ContractError::InvalidPool(String::from(
            "constant product bonding curve cannot be used with nft pools",
        )),
    );

    // Cannot create a Nft Pool with a fee
    let msg = ExecuteMsg::CreatePool {
        collection: collection.to_string(),
        asset_recipient: Some(asset_account.to_string()),
        pool_type: PoolType::Nft,
        bonding_curve: BondingCurve::Linear,
        spot_price: Uint128::from(2400u64),
        delta: Uint128::from(120u64),
        fee_bps: Some(0u16),
    };
    let res = router.execute_contract(creator.clone(), infinity_pool.clone(), &msg, &[]);
    assert_error(
        res,
        ContractError::InvalidPool(String::from("fee_bps must be 0 for nft pool")),
    );

    // Can create a Linear Nft Pool
    let msg = ExecuteMsg::CreatePool {
        collection: collection.to_string(),
        asset_recipient: Some(asset_account.to_string()),
        pool_type: PoolType::Nft,
        bonding_curve: BondingCurve::Linear,
        spot_price: Uint128::from(2400u64),
        delta: Uint128::from(120u64),
        fee_bps: None,
    };
    let res = router.execute_contract(creator.clone(), infinity_pool.clone(), &msg, &[]);
    assert!(res.is_ok());

    // Can create an Exponential Nft Pool
    let msg = ExecuteMsg::CreatePool {
        collection: collection.to_string(),
        asset_recipient: Some(asset_account.to_string()),
        pool_type: PoolType::Nft,
        bonding_curve: BondingCurve::Exponential,
        spot_price: Uint128::from(2400u64),
        delta: Uint128::from(120u64),
        fee_bps: None,
    };
    let res = router.execute_contract(creator, infinity_pool, &msg, &[]);
    assert!(res.is_ok());
}

#[test]
fn deposit_assets_nft_pool() {
    let vt = standard_minter_template(5000);
    let (mut router, minter, creator, user1) = (
        vt.router,
        vt.collection_response_vec[0].minter.as_ref().unwrap(),
        vt.accts.creator,
        vt.accts.bidder,
    );
    let _user2 = setup_second_bidder_account(&mut router);

    let collection = vt.collection_response_vec[0].collection.clone().unwrap();
    let asset_account = Addr::unchecked(ASSET_ACCOUNT);

    setup_block_time(&mut router, GENESIS_MINT_START_TIME, None);
    let marketplace = setup_marketplace(&mut router, creator.clone()).unwrap();
    let infinity_pool = setup_infinity_pool(&mut router, creator.clone(), marketplace).unwrap();

    let pool_id = create_pool(
        &mut router,
        infinity_pool.clone(),
        creator.clone(),
        collection.clone(),
        Some(asset_account),
        PoolType::Nft,
        BondingCurve::Linear,
        Uint128::from(2400u64),
        Uint128::from(100u64),
        None,
    )
    .unwrap();

    // Only owner can deposit NFTs into nft pool
    let token_id_1 = mint(&mut router, &user1, minter);
    approve(&mut router, &user1, &collection, &infinity_pool, token_id_1);
    let token_id_2 = mint(&mut router, &user1, minter);
    approve(&mut router, &user1, &collection, &infinity_pool, token_id_2);
    let msg = ExecuteMsg::DepositNfts {
        pool_id,
        collection: collection.to_string(),
        nft_token_ids: vec![token_id_1.to_string(), token_id_2.to_string()],
    };
    let res = router.execute_contract(user1.clone(), infinity_pool.clone(), &msg, &[]);
    assert_error(
        res,
        ContractError::Unauthorized("sender is not the owner of the pool".to_string()),
    );

    // Owner can deposit NFTs into nft pool
    let token_id_1 = mint(&mut router, &creator, minter);
    approve(
        &mut router,
        &creator,
        &collection,
        &infinity_pool,
        token_id_1,
    );
    let token_id_2 = mint(&mut router, &creator, minter);
    approve(
        &mut router,
        &creator,
        &collection,
        &infinity_pool,
        token_id_2,
    );
    let msg = ExecuteMsg::DepositNfts {
        pool_id,
        collection: collection.to_string(),
        nft_token_ids: vec![token_id_1.to_string(), token_id_2.to_string()],
    };
    let res = router.execute_contract(creator.clone(), infinity_pool.clone(), &msg, &[]);
    assert!(res.is_ok());

    // Owner cannot deposit tokens into nft pool
    let deposit_amount = 1000u128;
    let msg = ExecuteMsg::DepositTokens { pool_id };
    let res = router.execute_contract(
        creator,
        infinity_pool,
        &msg,
        &coins(deposit_amount, NATIVE_DENOM),
    );
    assert_error(
        res,
        ContractError::InvalidPool("cannot deposit tokens into nft pool".to_string()),
    );
}
