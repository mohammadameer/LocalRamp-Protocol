import { ethers } from 'hardhat';
import { deployContract } from './util';

async function main() {
  try {
    const [deployer] = await ethers.getSigners();
    const RealProtocol = await deployContract('RealProtocol', [], true);
    console.log(`Deploying contracts with account: ${deployer.address}`);
    console.log(`Test RealProtocol address:${RealProtocol.address}`);
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

main();
