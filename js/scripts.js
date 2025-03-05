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

  function addListItem(pokemon) {
    // Create elements
    let list = document.querySelector('ul');
    let listItem = document.createElement('li');
    let button = document.createElement('button')

    // Set button text and styles
    button.innerText = pokemon.name;
    button.setAttribute('alt', `Button to display ${pokemon.name}'s details`);
    button.classList.add('button');

    // Append button to listItem and listItem to ul
    listItem.appendChild(button);
    list.appendChild(listItem);

    // Add clickEvent
    clickEvent(button, pokemon);
  }

  function clickEvent(button, pokemon) {
    button.addEventListener('click', function () {
      showDetails(pokemon);
    })
  }

  function showDetails(pokemon) {
    console.log(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };
})();

pokemonRepository.add({ name: 'Pikachu', height: 0.25, types: 'water' });

pokemonRepository.getAll().forEach(pokemon => {
  pokemonRepository.addListItem(pokemon);
});
