
const hre = require("hardhat");

async function main() {


  // We get the contract to deploy
  const MarketSentiment = await hre.ethers.getContractFactory("MarketSentiment");
  const marketsetiment = await MarketSentiment.deploy();

  await marketsetiment.deployed();

  console.log("MarketSentiment deployed to:", marketsetiment.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
