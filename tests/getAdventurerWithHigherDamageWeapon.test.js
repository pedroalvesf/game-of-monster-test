const getAdventurerWithHigherDamageWeapon = require('../src/getAdventurerWithHigherDamageWeapon');

describe('Crie uma função que busca a pessoa aventureira que possui a arma de maior dano', () => {
  it('encontra a pessoa aventureira com a arma de maior dano, e retorna o objeto contendo as informações da pessoa aventureira', () => {
    const actual = getAdventurerWithHigherDamageWeapon();

    const expected = {
      id: '4b40a139-d4dc-4f09-822d-ec25e819a5ad',
      name: 'Ardith Spry',
      class: 'Paladin',
      race: 'Dragonborn',
      weapons: [
        '0e7b460e-acf4-4e17-bcb3-ee472265db83',
        '9e7d4524-363c-416a-8759-8aa7e50c0992',
      ],
      level: 12,
      defeatedMonsters: [
        '533bebf3-6bbe-41d8-9cdf-46f7d13b62ae',
        '78460a91-f4da-4dea-a469-86fd2b8ccc84',
        'e8481c1d-42ea-4610-8e11-1752cfc05a46',
      ],
    };

    expect(actual).toEqual(expected);
  });
});