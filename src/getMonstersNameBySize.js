const data = require('../data/game_data');

const getMonstersNameBySize = () => {
  // escreva o código aqui
    return data.monsters.reduce((acc, monster) => {
      acc[monster.size].push(monster.name)
    return acc
  }, {
    Small: [],
    Huge: [],
    Large: [],
    Medium: [],
  })
};
console.log(getMonstersNameBySize());
module.exports = getMonstersNameBySize;