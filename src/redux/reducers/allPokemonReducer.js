import { pokemon } from "../actionTypes";

const initialState = {
  data: null,
  fetching: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case pokemon.SET_POKEMON:
      return { ...state, data: payload };
    case pokemon.FETCH_POKEMON:
      return { ...state, fetching: !state.fetching };

    default:
      return state;
  }
};
