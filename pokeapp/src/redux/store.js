import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducers";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import { loadPokemon, loadSinglePokemon } from "./action/pokemonAction";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
store.dispatch(loadPokemon());
store.dispatch(loadSinglePokemon("https://pokeapi.co/api/v2/pokemon/1/"));
export default store;
