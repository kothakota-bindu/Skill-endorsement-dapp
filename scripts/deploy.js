const { ethers } = require("hardhat");
async function main() {
    const SkillEndorse = await ethers.getContractFactory("SkillEndorse");
  
    // If your constructor needs arguments, pass them here
    const contract = await SkillEndorse.deploy();
    await contract.waitForDeployment();
  
    console.log("✅ Contract deployed at:", await contract.getAddress());
  }
  
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });

0x4F56078ACBb71fD8233fd5543C8D5F9D5c78D8A7

npm create vite@latest TrueCertificate-frontend -- --template react

npm i -D tailwindcss@3 postcss autoprefixer


npx hardhat run scripts/deploy.js --network sepolia 

0x6bFE01336016b9dE74BaD94D40325796CDf26a10

0x4b954a5f927a325f3b1a44bdf5ce53ad882102dd4db49cfeb5c57a7d82578d45
0x74c2375cdb40c22d9c3fd4cd238b382f5b2148041b22d240abf0fd39c72847c2

replit