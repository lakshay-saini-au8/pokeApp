import axios from "axios";
const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

export const fetchAllPokemonData = async () => {
  const data = axios.get(`${BASE_URL}`);
};
