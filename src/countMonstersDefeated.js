const { monsters, adventurers } = require('../data/game_data');
const data = require('../data/game_data');

const getTypeMonsterById = (arrayId) => {
  return arrayId.map((id) => {
      const monsterFilterId =  monsters.filter((monster) => monster.id == id)
      return monsterFilterId[0].type
  });
}
const countMonstersDefeated = (type) => {
  if(!type) {
    const idMonster = monsters.map((monster) => monster.id);
    const typeMonsterById = getTypeMonsterById(idMonster);
    const objectMonsters = typeMonsterById.reduce((acc, curr) => {
    acc[curr] = 0
    return acc
  }, {})
    idMonster.map((monster, index) => {
    objectMonsters[typeMonsterById[index]] = countMonster(monster);
  })
  return objectMonsters;
}
};

const countMonster = (id) => {
const monstersDefeateds = adventurers.map(
(adventurer) => adventurer.defeatedMonsters).flat(1);
const count = monstersDefeateds.filter((x) => {
  return x == id;
})
return count.length
}

console.log(countMonstersDefeated(''));
module.exports = countMonstersDefeated;
