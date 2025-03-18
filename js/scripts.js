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
    // Create list and list items
    let list = document.querySelector('.pokemon-list');
    let listItem = document.createElement('div');
    listItem.classList.add('col', 'justify-content-center', 'p-1', 'g-2');

    // Create button
    let button = document.createElement('button');
    button.innerText = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    button.setAttribute('alt', `Button to display ${pokemon.name}'s details`);
    button.classList.add('btn', 'btn-primary', 'btn-lg', 'button');
    $('.button').css('background-color', '#c73638');
    $('.nav-link').css('color', '#234276');
    $('#searchField').css('border-color', '#234276')
    $('.btn-outline-success').css('color', '#234276');
    $('.btn-outline-success').css('border-color', '#234276');

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

  function showModal(name, height, img) {
    let modal = document.querySelector('.modal');

    // Pokemon name
    let pokemonName = document.querySelector('.modal-title');
    pokemonName.innerText = name;

    // Pokemon height
    let pokemonHeight = document.querySelector('.pokemon-height');
    pokemonHeight.innerText = `${height}`;

    // Pokemon image
    let pokemonImage = document.querySelector('.pokemon-image');
    pokemonImage.setAttribute('src', img);
    pokemonImage.setAttribute('width', '100%');
    pokemonImage.setAttribute('height', '100%');

    modal.classList.add('is-visible');

    // Close modal when user clicks outside of the modal
    modal.addEventListener('click', () => {
      modal.hide();
    });
  }

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      showModal(
        pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1),
        `Height: ${pokemon.height}`,
        pokemon.imageUrl);

      $('#pokemon-modal').modal('show');
    });
  }

  // Close modal when Escape key is pressed
  window.addEventListener('keydown', (e) => {
    let modalContainer = document.querySelector('#modal-container');

    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
      modal.hide();
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

// Get pokemon
pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });

  $(document).ready(function () {
    $("#searchField").on("keyup", function () {
      var value = $(this).val().toLowerCase();
      $(".button").filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
      });
    });
  });
});
