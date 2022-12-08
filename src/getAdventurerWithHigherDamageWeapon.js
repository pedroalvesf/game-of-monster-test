const { adventurers } = require('../data/game_data');
const data = require('../data/game_data');

const getAdventurerWithHigherDamageWeapon = () => {
  const higherDamage = data.weapons.sort((a, b) => b.damage -a.damage)[1];
    return data.adventurers.find((adventurer) => adventurer.weapons.includes(higherDamage.id))
}
console.log(getAdventurerWithHigherDamageWeapon())
    module.exports = getAdventurerWithHigherDamageWeapon;