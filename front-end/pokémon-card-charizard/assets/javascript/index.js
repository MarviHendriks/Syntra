fetch("https://pokeapi.co/api/v2/pokemon/charizard")
  .then((response) => {
    return response.json();
  })
  .then((pokemon) => {
    const afbeelding = document.querySelector(".card-img-top");
    afbeelding.src = pokemon.sprites.other["official-artwork"].front_default;

    const naam = document.querySelector("#name");
    naam.innerHTML =
      pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
  });
