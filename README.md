# Boas-vindas ao repositório Game-of-Monsters 🎮

⚠️ Leia todos os requisitos atentamente e siga à risca o que for pedido. ⚠️

## 1. Implemente a função `getAdventurerHistory`. <br>

<details>
<sumary> Desenvolva uma função que ao receber como parâmetro o id da pessoa aventureira retorna um objeto contendo: <br> </sumary>
 1. A pessoa aventureira; <br>
 2. Os monstros que ainda precisam ser derrotados; <br>
 3. As armas. <br><br>
 
 `O retorno segrá no seguinte formato: `

```
  { 
    adventurer: {}, 
    weapons: [], 
    monstersToDefeat:[],
  }
  
  ```

</details>

## 2. Implemente a função `countMonstersDefeated`.
<details>
  Desenvolva uma função que realiza a contagem dos monstros, de cada tipo, derrotados pelas pessoas aventureiras.
  Caso a função não receba parâmetros ,retorne um objeto no seguinte formato: <br>

 ```
  {
    monstrosity: X,
    dragon: Y, 
    elemental: A, 
    celestial: B, 
    humanoid: Z,
  }
  
  ```
  Caso a função receba um parâmetro, contendo um tipo e o monstro, exemplo: { type: 'dragon' }, <br>
  Retorna um número: 
  
  ```
   1
  ````

  </details>


## 3. Implemente a função `getAdventurerWithHigherDamageWeapon`.
<details>
  Desenvolva uma função que retorne a primeira pessoa aventureira com a arma de maior dano, retorne um objeto no seguinte formato: <br>
  
  ```
  {
    id: 'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1', 
    name: 'Nigel Bethea', 
    class: 'Barbarian',
    race: 'Human',
    weapons: [ 
      '89be95b3-47e4-4c5b-b687-1fabf2afa274',
      clubId, 
    ], 
    level: 5, 
    defeatedMonsters: [acidAntId, airElementalId],
  }
  
  ```
  </details>
  
## 4. Implemente a função `getMonstersNameBySize`.
<details>
  Desenvolva uma função que categorize os monstros por tamanho, retorne um objeto no seguinte formato:
  
  ```
  {
    Small: ['Monstro A'],
    Huge: ['Monstro B', 'Monstro D'],
    Large: ['Monstro C'],
    Medium: ['Monstro E'],
  }

  ```
  </details>
