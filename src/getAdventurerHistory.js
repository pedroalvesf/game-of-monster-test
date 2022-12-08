const data = require('../data/game_data');

const getAdventurerHistory = (adventurerId) => {
  const adventurerFound = data.adventurers.find(({id}) => id === adventurerId);
  const {weapons, defeatedMonsters } = adventurerFound;

  return {
    adventurer: adventurerFound.name,
    weapons: weapons.map((weaponId) => data.weapons.find((weapon) => weapon.id === weaponId)),
    monstersToDefeat: data.monsters.filter((monster) => !defeatedMonsters.includes(monster.id)),
  }
};

console.log(getAdventurerHistory('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'))

module.exports = getAdventurerHistory;