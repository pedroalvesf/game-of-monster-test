const getMonstersNameBySize = require('../src/getMonstersNameBySize');

describe('Crie um mapeamento por tamanho dos monstros', () => {
  it('retorna um objeto com os nomes dos monstros categorizados por tamanho', () => {
    const actual = getMonstersNameBySize();

    const expected = {
      Small: ['Acid Ant'],
      Huge: ['Adult Black Dragon', 'Alabaster Tree'],
      Large: ['Air Elemental'],
      Medium: ['Acolyte'],
    };

    expect(actual).toEqual(expected);
  });
});