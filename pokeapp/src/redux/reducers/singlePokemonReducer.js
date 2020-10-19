import { singlePokemon } from "../actionTypes";

const initialState = {
  data: null,
  fetching: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case singlePokemon.SET_SINGLE_POKEMON:
      return { ...state, data: payload };
    case singlePokemon.FETCH_SINGLE_POKEMON:
      return { ...state, fetching: !state.fetching };

    default:
      return state;
  }
};
