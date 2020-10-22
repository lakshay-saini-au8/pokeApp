import { all } from "redux-saga/effects";
import watchFetchAllPokemon from "./sagas/getAllPokemonSaga";
import watchFetchSinglePokemon from "./sagas/getSinglePokemonSaga";

function* rootSaga() {
  yield all([watchFetchAllPokemon(), watchFetchSinglePokemon()]);
}

export default rootSaga;
