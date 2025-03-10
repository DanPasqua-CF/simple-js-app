let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  function addListItem(pokemon) {
    // Create elements
    let list = document.querySelector('.pokemon-list');
    let listItem = document.createElement('li');
    let button = document.createElement('button');

    // Set button text, styles and click event
    button.innerText = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    button.setAttribute('alt', `Button to display ${pokemon.name} 's details`);
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
    });
  }

  function showModal(title, text, img) {
    // Modal container
    let modalContainer = document.querySelector('#modal-container');
    modalContainer.innerText = '';

    // Modal
    let modal = document.createElement('div');
    modal.classList.add('modal');

    // Close button
    let closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'X';
    closeButtonElement.addEventListener('click', hideModal);

    // Pokemon name
    let pokemonNameElement = document.createElement('h1');
    pokemonNameElement.innerText = title;

    // Pokemon height
    let pokemonHeightElement = document.createElement('p');
    pokemonHeightElement.innerText = text;

    // Pokemon image
    let pokemonImageElement = document.createElement('img');
    pokemonImageElement.setAttribute('src', img);
    pokemonImageElement.setAttribute('width', '100%');
    pokemonImageElement.setAttribute('height', '100%');

    // Append elements to modal and modal container
    modal.appendChild(closeButtonElement);
    modal.appendChild(pokemonNameElement);
    modal.appendChild(pokemonHeightElement);
    modal.appendChild(pokemonImageElement);
    modalContainer.appendChild(modal);

    modalContainer.classList.add('is-visible');

    // Close modal when user clicks outside of the modal
    modalContainer.addEventListener('click', (e) => {
      let target = e.target;

      if (target === modalContainer) {
        hideModal();
      }
    });
  }

  function hideModal() {
    let modalContainer = document.querySelector('#modal-container');
    modalContainer.classList.remove('is-visible');
  }

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      showModal(
        pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1),
        `Height: ${pokemon.height}`,
        pokemon.imageUrl);
    });
  }

  // Close modal when Escape key is pressed
  window.addEventListener('keydown', (e) => {
    let modalContainer = document.querySelector('#modal-container');

    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
      hideModal();
    }
  });

  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    });
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
  };
})();

// Fetch pokemon
pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
