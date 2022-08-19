const { run } = require('hardhat');

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  require('dotenv').config();

  //   console.log('Deploying Donation Contract.....');

  const txReceipt = await deploy('Donation', {
    from: deployer,
    log: true,
    args: ['0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e'],
  });

  //   console.log(`Contract Deployed at ${txReceipt.address}!!!`);
  if (process.env.ETHERSCAN_KEY) {
    console.log(`verifying the contract `);

    await run('verify:verify', {
      address: txReceipt.address,
      constructorArguments: ['0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e'],
    });
  }
};
