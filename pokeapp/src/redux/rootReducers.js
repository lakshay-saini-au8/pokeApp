import { combineReducers } from "redux";
import allPokemonReducer from "./reducers/allPokemonReducer";
import singlePokemonReducer from "./reducers/singlePokemonReducer";
const rootReducer = combineReducers({
  allPokemonState: allPokemonReducer,
  singlePokemonState: singlePokemonReducer,
});
export default rootReducer;
