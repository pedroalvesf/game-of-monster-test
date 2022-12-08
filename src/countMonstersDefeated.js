const { monsters, adventurers } = require('../data/game_data');
const data = require('../data/game_data');

const countMonstersDefeated = () => {
  const typeMonster = monsters.map((monster) => monster.id);
  const objectMonsters = typeMonster.reduce((acc, curr) => {
    acc[curr] = 0
    return acc
  }, {})
  typeMonster.map((monster) => {
    objectMonsters[monster] = countMonster(monster);
  })
  return objectMonsters;
};

const countMonster = (id) => {
const monstersDefeateds = adventurers.map(
  (adventurer) => adventurer.defeatedMonsters).flat(1);
const count = monstersDefeateds.filter((x) => {
  return x == id;
})
return count.length
}

console.log(countMonstersDefeated());
module.exports = countMonstersDefeated;