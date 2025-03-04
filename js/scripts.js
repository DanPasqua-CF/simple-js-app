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

pokemonList.forEach(pokemon => {
  // Divide Igglybuff's height by 2
  if (pokemon.name === "Igglybuff") {
    document.write(`<br>${pokemon.name} (height: ${pokemon.height / 2})`);
  } else if (pokemon.height >= 1.0) {
    // Add special messaging to Pokemon with height greater than 1.0
    document.write(`<br>${pokemon.name} (height: ${pokemon.height}) - Wow, that's big!`);
  } else {
    // Output Pokemon's name and height
    document.write(`<br>${pokemon.name} (height: ${pokemon.height})`);
  }
});
