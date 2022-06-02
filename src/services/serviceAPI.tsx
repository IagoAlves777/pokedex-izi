import axios from "axios";

const apiBase = "https://pokeapi.co/api/v2/pokemon";

class ServiceAPI {
  static getPokemons(offSet: Number, limit: Number) {
    const apiCallString = `${apiBase}?offset=${offSet}&limit=${limit}`;
    const pokemons = axios.get(apiCallString);
    return pokemons;
  }

  static getPokemonByName(pokemonName: string) {
    const apiCallString = `${apiBase}/${pokemonName}`;
    const pokemon = axios.get(apiCallString).catch(function (error) {
      console.log(error);
      return true;
    });

    return pokemon;
  }
}

export default ServiceAPI;
