import { pokemon, singlePokemon } from "../actionTypes";

export const fetchPokemon = () => ({
  type: pokemon.FETCH_POKEMON,
});
export const setPokemon = (payload) => ({
  type: pokemon.SET_POKEMON,
  payload,
});
export const loadPokemon = () => ({
  type: pokemon.LOAD_POKEMON,
});

export const loadSinglePokemon = (url) => ({
  type: singlePokemon.LOAD_SINGLE_POKEMON,
  url,
});

export const fetchSinlgePokemon = () => ({
  type: singlePokemon.FETCH_SINGLE_POKEMON,
});

export const setSinglePokemon = (payload) => ({
  type: singlePokemon.SET_SINGLE_POKEMON,
  payload,
});
