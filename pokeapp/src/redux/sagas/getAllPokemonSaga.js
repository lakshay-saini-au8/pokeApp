import { call, put, takeEvery } from "redux-saga/effects";
import { fetchPokemon } from "../action/pokemonAction";
import { pokemon } from "../actionTypes";

function* setAllPokemon() {
  try {
    put(fetchPokemon);
    const pokemonData = yield call(fetchAllPokemonData);
  } catch (error) {
  } finally {
    put(fetchPokemon);
  }

  const pokemonData = yield call();
}

function* watchFetchAllPokemon() {
  yield takeEvery(pokemon.SET_POKEMON, setAllPokemon);
}

export default watchFetchAllPokemon;
