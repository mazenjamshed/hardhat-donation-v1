const { run } = require('hardhat');

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  require('dotenv').config();

  //   console.log('Deploying Donation Contract.....');

  const txReceipt = await deploy('Donation', {
    from: deployer,
    log: true,
  });

  //   console.log(`Contract Deployed at ${txReceipt.address}!!!`);
  if (process.env.ETHERSCAN_KEY) {
    console.log(`verifying the contract `);

    await run('verify:verify', { address: txReceipt.address });
  }
};
