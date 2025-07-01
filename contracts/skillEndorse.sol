// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";

contract SkillEndorse is Ownable {

    constructor() Ownable(msg.sender) {}

    struct Skill {
        string name;
        uint256 endorsementCount;
        uint256 stakeAmount;
        address[] endorsers;
    }

    mapping(address => mapping(string => Skill)) public userSkills;
    mapping(address => string[]) public skillNames;
    address[] private skillOwners; // ✅ New: Track all users who added skills

    function addSkill(string memory _skillName) external payable{

        require(bytes(_skillName).length > 0, "Skill name is required");

        require(msg.value > 0, "Stake some ETH to register a skill");

        Skill storage skill = userSkills[msg.sender][_skillName];
        require(bytes(skill.name).length == 0, "Skill already added");

        // Add the skill
        userSkills[msg.sender][_skillName] = Skill({
            name: _skillName,
            endorsementCount: 0,
            stakeAmount: msg.value,
            endorsers: new address[](0)
        });

        skillNames[msg.sender].push(_skillName);

        // ✅ Add user to skillOwners if this is their first skill
        if (skillNames[msg.sender].length == 1) {
            skillOwners.push(msg.sender);
        }
    }

    // ✅ Get all users who added at least one skill
    function getAllSkillOwners() external view returns (address[] memory) {
        return skillOwners;
    }

    // ✅ Optional wrapper for easier front-end use
    function getSkillsOf(address _user) public view returns (string[] memory) {
        return skillNames[_user];
    }
    function endorseSkill(address _user, string memory _skillName) external {
    Skill storage skill = userSkills[_user][_skillName];
    require(bytes(skill.name).length > 0, "Skill does not exist");
    
    // Prevent double endorsement
    for (uint i = 0; i < skill.endorsers.length; i++) {
        require(skill.endorsers[i] != msg.sender, "You already endorsed this skill");
    }

    skill.endorsers.push(msg.sender);
    skill.endorsementCount++;
}

}
