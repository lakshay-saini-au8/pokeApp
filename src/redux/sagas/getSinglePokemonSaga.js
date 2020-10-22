import { fetchSinglePokemonData } from "../../api";
import { fetchSinlgePokemon, setSinglePokemon } from "../action/pokemonAction";
import { singlePokemon } from "../actionTypes";

const { takeEvery, put, call } = require("redux-saga/effects");

function* setSinglePokemonData(action) {
  try {
    yield put(fetchSinlgePokemon());
    const { data } = yield call(fetchSinglePokemonData, action.url);
    yield put(setSinglePokemon(data));
  } catch (e) {
    console.error(e);
  } finally {
    yield put(fetchSinlgePokemon());
  }
}

function* watchFetchSinglePokemon() {
  yield takeEvery(singlePokemon.LOAD_SINGLE_POKEMON, setSinglePokemonData);
}

export default watchFetchSinglePokemon;
