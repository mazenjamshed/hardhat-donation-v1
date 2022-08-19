// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.7;
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

library PriceConvertor {
    //Internal Helper Function to get eth price in current time
    function getPrice(AggregatorV3Interface priceFeed)
        internal
        view
        returns (uint256)
    {}
}
