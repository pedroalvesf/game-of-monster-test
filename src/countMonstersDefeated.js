const { monsters, adventurers } = require('../data/game_data');
const data = require('../data/game_data');

const countMonstersDefeated = (arg = {}) => {
  // Tipo dos mosntros
  const typeMonster = monsters.map((monster) => monster.id);
  // Objeto de monstros e valores zerados
  const objectMonsters = typeMonster.reduce((acc, curr) => {
    acc[getTypeById(curr)] = countMonster(curr);
    return acc
  }, {})

  if(arg.type){
    return objectMonsters[arg.type];
  }

  return objectMonsters;
};

const getTypeById = (id) => {
  let type = "";
  monsters.forEach(monster => {
    if(monster.id === id){
      type = monster.type;
    }
  })
  return type;
}

const countMonster = (id) => {
  const monstersDefeateds = adventurers.map(
    (adventurer) => adventurer.defeatedMonsters).flat(1);
  const count = monstersDefeateds.filter((x) => {
  return x == id;
})
return count.length
}

module.exports = countMonstersDefeated;