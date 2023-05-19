use cosmwasm_std::StdError;
use cw_utils::PaymentError;
use infinity_shared::InfinityError;
use thiserror::Error;

#[derive(Error, Debug, PartialEq)]
pub enum ContractError {
    #[error("{0}")]
    Std(#[from] StdError),

    #[error("{0}")]
    PaymentError(#[from] PaymentError),

    #[error("{0}")]
    InfinityError(#[from] InfinityError),

    #[error("Unauthorized: {0}")]
    Unauthorized(String),

    #[error("Invalid input: {0}")]
    InvalidInput(String),

    #[error("Invalid pool: {0}")]
    InvalidPool(String),

    #[error("Invalid pool quote: {0}")]
    InvalidPoolQuote(String),

    #[error("Seller payment should not be zero")]
    ZeroSellerPayment,

    #[error("Insufficient funds: funding amount should max max_input")]
    InsufficientFunds,
}
