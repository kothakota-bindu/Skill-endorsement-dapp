# Skill Endorsement DApp (Solidity + React)

 This project is my ongoing attempt to build a full-stack decentralized application (DApp) for skill endorsement using smart contracts.

 **Note:** This project is still under development. I am new to blockchain development & auditing and exploring Solidity, Hardhat, React, and Web3 integration. Some features may have errors as I actively learn and improve.

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
 skill-endorsement-dapp/
 ├── contracts/
 ├── scripts/
 ├── skill-endorsement-frontend/
 ├── README.md

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

This project reflects my initial efforts to explore blockchain development, starting with Solidity and full-stack DApp concepts. However, through this process, I discovered a strong interest in Smart Contract Security and Auditing.

I am now actively transitioning my career towards **Smart Contract Auditing**, leveraging my 5+ years of IT experience in other technologies, combined with my hands-on learning in:

- Solidity fundamentals  
- Contract deployment and testing  
- Identifying vulnerabilities and best practices  
- Reviewing and understanding real-world smart contract patterns  

I continue to enhance my skills through auditing tools, security research, and practical assessments to complement my existing technical background.

*Future Plans:*
- Add unit tests
- Optimize smart contract security
- Complete staking & endorsement workflows
- Enhance frontend UI/UX

 **Acknowledgements:**
 Thanks to the Web3 community, OpenZeppelin, and blockchain learning platforms for resources and
 guidance