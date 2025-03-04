let pokemonRepository = (function () {
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
      name: "Tentacool",
      height: 2.1,
      types: [
        "water",
        "poison"
      ]
    },
    {
      name: "Igglybuff",
      height: 1,
      types: [
        "normal",
        "fairy"
      ]
    }
  ];

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  return {
    add: add,
    getAll: getAll
  };
})();

pokemonRepository.add({ name: 'Pikachu', height: 0.25, types: 'water' });

pokemonRepository.getAll().forEach(pokemon => {
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
