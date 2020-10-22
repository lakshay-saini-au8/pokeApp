import { call, put, takeEvery } from "redux-saga/effects";
import { fetchAllPokemonData } from "../../api";
import { fetchPokemon, setPokemon } from "../action/pokemonAction";
import { pokemon } from "../actionTypes";

function* setAllPokemon() {
  try {
    yield put(fetchPokemon());
    const { data } = yield call(fetchAllPokemonData);
    yield put(setPokemon(data));
  } catch (error) {
    console.error(error);
  } finally {
    yield put(fetchPokemon());
  }
}

function* watchFetchAllPokemon() {
  yield takeEvery(pokemon.LOAD_POKEMON, setAllPokemon);
}

export default watchFetchAllPokemon;
