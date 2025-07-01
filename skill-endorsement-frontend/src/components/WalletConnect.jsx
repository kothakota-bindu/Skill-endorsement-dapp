import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import SkillEndorseABI from "../utils/SkillEndorseABI.json";
import { contractAddress } from "../utils/contractConfig";

const WalletConnect = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const [provider, setProvider] = useState(null);
  const [contract, setContract] = useState(null);
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState("");

  // Connect to Metamask
  const connectWallet = async () => {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setWalletAddress(accounts[0]);

      const _provider = new ethers.BrowserProvider(window.ethereum);
      setProvider(_provider);

      const signer = await _provider.getSigner();
      const skillContract = new ethers.Contract(
        contractAddress,
        SkillEndorseABI.abi,
        signer
      );
      setContract(skillContract);
    } else {
      alert("Please install Metamask to use this feature.");
    }
  };

  // Fetch skills for current user
  const getSkills = async () => {
    if (!contract || !walletAddress) return;

    try {
      const skillList = await contract.skillNames(walletAddress);
      setSkills(skillList);
    } catch (err) {
      console.error("Error fetching skills:", err);
    }
  };

  // Add new skill with optional stake
  const handleAddSkill = async () => {
    if (!newSkill || !contract) return;

    try {
      const tx = await contract.addSkill(newSkill, {
        value: ethers.parseEther("0.001"), // Optional stake
      });
      await tx.wait();
      setNewSkill("");
      getSkills(); // refresh list
    } catch (err) {
      console.error("Error adding skill:", err);
    }
  };

  useEffect(() => {
    if (contract && walletAddress) {
      getSkills();
    }
  }, [contract, walletAddress]);

  return (
    <div className="p-4 max-w-xl mx-auto bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Skill Endorsement DApp</h1>

      {walletAddress ? (
        <>
          <p className="mb-4 text-green-600">Connected: {walletAddress}</p>

          <div className="mb-4">
            <input
              type="text"
              placeholder="Enter a skill"
              className="border p-2 rounded w-full"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
            />
            <button
              onClick={handleAddSkill}
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Add Skill (0.001 ETH)
            </button>
          </div>

          <h2 className="font-semibold mb-2">Your Skills:</h2>
          <ul className="list-disc list-inside">
            {skills.length === 0 ? (
              <li>No skills added yet.</li>
            ) : (
              skills.map((skill, index) => <li key={index}>{skill}</li>)
            )}
          </ul>
        </>
      ) : (
        <button
          onClick={connectWallet}
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
};

export default WalletConnect;
