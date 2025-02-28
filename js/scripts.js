let pokemonObject2 = {
  name: "Tentacool",
  height: 2,
  types: [
    "water",
    "poison"
  ]
};

let pokemonObject3Types = [
  "normal",
  "fairy"
];

let pokemonList = [
  {
    name: "Bulbasaur",
    height: 7,
    types: [
      "grass",
      "poison"
    ]
  },
  {
    name: pokemonObject2.name,
    height: pokemonObject2.height,
    types: pokemonObject2.types
  },
  {
    name: "Igglybuff",
    height: 1,
    types: pokemonObject3Types
  }
];

console.log(pokemonList);
