let pokemonObject2 = {
  name: "Tentacool",
  height: 2.1,
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
    height: 0.7,
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

for (let i = 0; i < pokemonList.length; i++) {
  if (pokemonList[i].name === "Igglybuff") {
    document.write(`<br>${pokemonList[i].name} (height: ${pokemonList[i].height * 0.5})`);
  } else if (pokemonList[i].height >= 1.0) {
    document.write(`<br>${pokemonList[i].name} (height: ${pokemonList[i].height}) - Wow, that's big!`);
  } else {
    document.write(`<br>${pokemonList[i].name} (height: ${pokemonList[i].height})`);
  }
}
