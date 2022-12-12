# Infinity Pool

## Image

## Overview

Infinity Pool is an automated market maker (AMM) protocol that allows for the buying and selling of NFT assets with a specified fungible token. The buy and sell price of the NFT assets are determined by the parameters of the pool, the bonding curve, and the assets custodied by the pool.

This protocol is a derivative of the [sudoswap](https://github.com/sudoswap/lssvm) protocol written in Solidity. Infinity Pool makes use of the sudoswap design, but is written for [CosmWasm](https://github.com/CosmWasm/cosmwasm) so that it may be used on Cosmos SDK based chains.

## AMM Vs Order Book

The Infinity Pool protocol could offer some distinct advantages over the traditional order book model. Apart from being a fun tool for crypto natives, it allows for more expressive order types to be specified on chain. For example, by creating a one-sided pool with a special bonding curve, a user could effectively be creating a limit order that mutates after each trade it processes. This is difficult to do with the traditional order book model.

Additionally, there are special mechanics native to double-sided pools that are not as familar to order books. An NFT project could use a double-sided to pool to easliy create a market with liquidity on both the buy and sell side. Liquidity providers could also be incentivized to provide liquidity to the pool by offering a portion of the fees generated by the pool. If a community wanted to induce liquidity they could make use of this feature.

Most notably, this protocol would not necessarily hinder the performance of an on-chain orderbook as long as it exists on the same chain. Trades could easily be routed between the two protocols the same way an NFT aggregator like Genie routes between OpenSea and sudoswap.

## How It Works

As described by the sudoswap protocol:

> 1. Liquidity providers deposit NFTs and/or a fungible token into liquidity pools. They choose whether they would like to buy or sell NFTs (or both) and specify a starting price and bonding curve parameters.
> 2. Users can then buy NFTs from or sell NFTs into these pools. Every time an item is bought or sold, the price to buy or sell another item changes for the pool based on its bonding curve.
> 3. At any time, liquidity providers can change the parameters of their pool or withdraw assets.

### Types of Pools

The `pool_type` parameter refers to the asset that the pool holds:

- A `Token` pool has funglible tokens that it is willing to give to traders in exchange for NFTs. This is similar to a buy limit order.
- An `Nft` pool has NFTs that it is willing to give to traders in exchange for tokens. This is similar to a sell limit order.
- A `Trade` pool allows for both TOKEN-->NFT and NFT-->TOKEN swaps. This is similar to a double-sided order book. This type is the only type that supports swap fees.

### Types of bonding curves

- A `Linear` bonding curve has a constant slope, meaning that the price of an NFT increases or decreases by a constant amount with each NFT that is bought or sold to the pool.
- A `Exponential` bonding curve has a slope that increases or decreases by a percentage with each NFT that is bought or sold to the pool.
- A `Constant Product` bonding curve specifies that the product of two reserve assets remains constant after every trade.

<!-- ## Contracts

### Pool Contract

- Indexed state
- Parameters drawn from the main order book

### Router Contract

- User slippage per NFT or per order
- Routes between pools and the orderbook -->
