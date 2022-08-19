require('@nomicfoundation/hardhat-toolbox');
require('@nomiclabs/hardhat-ethers');
require('hardhat-deploy');
require('@nomiclabs/hardhat-etherscan');
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */

const GOERLY_URL = process.env.GOERLY_URL || '';
const GOERLY_KEY = process.env.GOERLY_KEY || '';
const ETHERSCAN_KEY = process.env.ETHERSCAN_KEY || '';

module.exports = {
  solidity: '0.8.7',
  defaultNetwork: 'goerli',
  networks: {
    hardhat: {},
    goerli: {
      url: GOERLY_URL,
      accounts: [GOERLY_KEY],
      chainId: 5,
    },
  },
  etherscan: { apiKey: ETHERSCAN_KEY },
  namedAccounts: {
    deployer: {
      default: 0, // here this will by default take the first account as deployer
      1: 0, // similarly on mainnet it will take the first account as deployer. Note though that depending on how hardhat network are configured, the account 0 on one network can be different than on another
      // 5: 0, //Goerli Network
    },
  },
};
