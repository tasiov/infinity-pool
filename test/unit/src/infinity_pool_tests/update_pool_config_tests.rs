use crate::helpers::pool_functions::prepare_pool_variations;
use crate::helpers::utils::{assert_error, assert_event};
use crate::setup::setup_infinity_contracts::{setup_infinity_test, InfinityTestSetup};

use cosmwasm_std::{Addr, Decimal, Uint128};
use cw_multi_test::Executor;
use infinity_pool::msg::{
    ExecuteMsg as InfinityPoolExecuteMsg, PoolConfigResponse, QueryMsg as InfinityPoolQueryMsg,
};
use infinity_pool::state::BondingCurve;
use infinity_pool::ContractError;
use test_suite::common_setup::msg::MinterTemplateResponse;

#[test]
fn try_update_pool_config() {
    let InfinityTestSetup {
        vending_template:
            MinterTemplateResponse {
                collection_response_vec,
                mut router,
                accts,
            },
        infinity_global,
        infinity_pool_code_id,
        ..
    } = setup_infinity_test(100).unwrap();

    let collection_resp = &collection_response_vec[0];
    let collection = collection_resp.collection.clone().unwrap();

    let deposit_amount = Uint128::from(10_000_000u128);

    let pools_map = prepare_pool_variations(
        &mut router,
        infinity_pool_code_id,
        &accts.owner.to_string(),
        &collection.to_string(),
        &infinity_global.to_string(),
        &None,
        0u64,
        0u64,
        14,
        deposit_amount,
        vec![],
        0,
        false,
    );

    let pools = pools_map
        .iter()
        .filter(|(_, &ref pc)| pc.bonding_curve != BondingCurve::ConstantProduct)
        .collect::<Vec<_>>();

    for (infinity_pool, _pool_config) in pools {
        let asset_recipient = Addr::unchecked("recipient");
        let spot_price = Uint128::from(20_000u128);
        let delta = Uint128::from(20u128);
        let finders_fee_bps = 10u64;
        let swap_fee_bps = 0u64;
        let reinvest_tokens = false;
        let reinvest_nfts = false;

        // Only owner can update pool config
        let response = router.execute_contract(
            accts.bidder.clone(),
            infinity_pool.clone(),
            &InfinityPoolExecuteMsg::UpdatePoolConfig {
                asset_recipient: Some(asset_recipient.to_string()),
                delta: Some(delta),
                spot_price: Some(spot_price),
                finders_fee_bps: Some(finders_fee_bps),
                swap_fee_bps: Some(swap_fee_bps),
                reinvest_tokens: Some(reinvest_tokens),
                reinvest_nfts: Some(reinvest_nfts),
            },
            &[],
        );
        assert_error(
            response,
            ContractError::Unauthorized("sender is not the owner of the pool".to_string()),
        );

        // Owner can update pool config
        let response = router.execute_contract(
            accts.owner.clone(),
            infinity_pool.clone(),
            &InfinityPoolExecuteMsg::UpdatePoolConfig {
                asset_recipient: Some(asset_recipient.to_string()),
                delta: Some(delta),
                spot_price: Some(spot_price),
                finders_fee_bps: Some(finders_fee_bps),
                swap_fee_bps: Some(swap_fee_bps),
                reinvest_tokens: Some(reinvest_tokens),
                reinvest_nfts: Some(reinvest_nfts),
            },
            &[],
        );
        assert_event(response, "wasm-update-pool-config");

        let pool_config = router
            .wrap()
            .query_wasm_smart::<PoolConfigResponse>(
                infinity_pool.clone(),
                &&InfinityPoolQueryMsg::PoolConfig {},
            )
            .unwrap()
            .config;

        assert_eq!(pool_config.asset_recipient, Some(asset_recipient));
        assert_eq!(pool_config.spot_price, spot_price);
        assert_eq!(pool_config.delta, delta);
        assert_eq!(pool_config.finders_fee_percent, Decimal::percent(finders_fee_bps));
        assert_eq!(pool_config.swap_fee_percent, Decimal::percent(swap_fee_bps));
        assert_eq!(pool_config.reinvest_tokens, reinvest_tokens);
        assert_eq!(pool_config.reinvest_nfts, reinvest_nfts);
    }
}
