use cosmwasm_std::{Instantiate2AddressError, StdError};
use thiserror::Error;

#[derive(Error, Debug, PartialEq)]
pub enum ContractError {
    #[error("{0}")]
    Std(#[from] StdError),

    #[error(transparent)]
    Instantiate2Address(#[from] Instantiate2AddressError),
}