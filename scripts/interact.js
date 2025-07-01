const hre = require("hardhat");

async function main() {
  const contractAddress = "0x12c0090e411166440162F60Dc8DC2fF64bB70488"; // replace with real address

  const SkillEndorse = await hre.ethers.getContractFactory("SkillEndorse");
  const skillEndorse = await SkillEndorse.attach(contractAddress);

  const signer = await hre.ethers.provider.getSigner(); // your wallet signer
  const userAddress = await signer.getAddress();

  // Sample interaction: endorse a skill
  const tx1 = await skillEndorse.addSkill("Web3.js", {
    value: hre.ethers.parseEther("0.0001") // 0.001 ETH stake
  });
  await tx1.wait();
  console.log("✅ Skill 'Web3.js' added with stake");

  // ✅ Get all skill owners
  const skillOwners = await skillEndorse.getAllSkillOwners();
  console.log("📌 Skill Owners:", skillOwners);

  // ✅ Get skills of the first skill owner
  if (skillOwners.length > 0) {
    const firstUserSkills = await skillEndorse.getSkillsOf(skillOwners[0]);
    console.log(`🧠 Skills of ${skillOwners[0]}:`, firstUserSkills);
  } else {
    console.log("No skills added yet.");
  }
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

