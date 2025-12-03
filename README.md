# Skill Endorsement DApp (Solidity + React)

 This project marks the beginning of my blockchain journey in building a decentralized application (DApp) for skill endorsement using smart contracts.

 **Note:** I am exploring blockchain development, Solidity, Hardhat, React, and Web3 integration. Some features may have errors as I actively learn and improve.

 **Project Overview:**
 The goal is to create a decentralized platform where users can:
 - Add their skills with an optional ETH stake
 - Other users can endorse existing skills
 - All endorsements and skills are recorded on-chain
 - Simple React frontend to interact with the smart contract

 This project demonstrates my ability to:
 - Write Solidity smart contracts
 - Deploy contracts on Ethereum testnet
 - Integrate smart contracts with React frontend
 - Work with MetaMask and Web3 tools

 # Tech Stack:
 - Solidity (0.8.18)
 - Hardhat
 - React + Vite
 - TailwindCSS
 - Ethers.js
 - MetaMask
 - Sepolia Testnet

 # Project Structure:
 ```
 skill-endorsement-dapp/
├── contracts/
│ └── SkillEndorse.sol
├── scripts/
│ └── deploy.js
├── skill-endorsement-frontend/
│ ├── src/
│ │ ├── components/
│ │ │ └── WalletConnect.jsx
│ │ ├── utils/
│ │ │ ├── SkillEndorseABI.json
│ │ │ └── contractConfig.js
│ │ └── App.jsx
├── README.md
```
 *Features Completed:*
 - Basic Smart Contract: Users can add skills
 - Skill Data Stored on Blockchain
 - React Frontend Setup
 - Wallet Connect with MetaMask
 - Tailwind Styling Integrated

 *Features In Progress:*
 - Skill Endorsement Functionality
 - Staking Logic for Skills
 - Advanced Error Handling
 - Fully Functional Frontend UI

**How to Run (Locally):**
 Prerequisites:
 - Node.js
 - MetaMask
 - Sepolia test ETH
 - Alchemy API Key

 Steps:
 1. Backend Setup
   cd skill-endorsement-dapp
   npm install
   npx hardhat compile
   npx hardhat run scripts/deploy.js --network sepolia
 2. Frontend Setup
   cd skill-endorsement-frontend
   npm install
   npm run dev

 Visit http://localhost:5173 to view the app.

 ## 🌟 Disclaimer for Recruiters / Reviewers

This project reflects my initial efforts to explore blockchain development, starting with Solidity and full-stack DApp concepts. 

The project in this repository was developed during the initial stages of my Web3 learning journey. As a result, certain implementations may contain errors, incomplete functionalities, or non-optimized code. These repositories are maintained primarily to demonstrate my progression and foundational understanding, and should not be interpreted as production-ready work. I welcome any feedback as I continue to refine my skills and build more advanced solutions

*Future Plans:*
- Add unit tests
- Optimize smart contract security
- Complete staking & endorsement workflows
- Enhance frontend UI/UX

 **Acknowledgements:**
 Thanks to the Web3 community, OpenZeppelin, and blockchain learning platforms for resources and
 guidance
