"use strict;";

const pokemon = {
  pokemonFetch() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        let newHTMLString = "";
        const pokemonNames = [];
        const pokemonURLs = [];
        const pokemons = data.results;
        pokemons.forEach((pokemon) => {
          fetch(pokemon.url)
            .then((res) => res.json())
            .then((data) => {
              let htmlString = `
              <div id="container-box-pk">
        <figure>
          <img
            src="${data.sprites.front_default}"
            alt="bulbasaur"
            class="pokemon-img"
          />
          <figcaption>Nr.999</figcaption>
        </figure>
        <h1 class="pokemon-name">${data.forms[0].name}</h1>
        <ul class="pokemon-traits">
          <li><p>Grass</p></li>
          <li><p>Poison</p></li>
        </ul>
        <button class="add-to-team">Add to team</button>
      </div>
              `;
              newHTMLString += htmlString;
              document.getElementById("container-box").innerHTML =
                newHTMLString;
            });
        });
      });
  },
};

pokemon.pokemonFetch();
