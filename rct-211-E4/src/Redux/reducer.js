import {
  GET_COUNTRIES_FAILURE,
  GET_COUNTRIES_REQUEST,
  GET_COUNTRIES_SUCCESS,
} from "./actionTypes";

const initialState = {
  countries: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_COUNTRIES_REQUEST:
      return { ...state, isLoading: true, isError: false };
    case GET_COUNTRIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        countries: payload,
        isError: false,
      };
    case GET_COUNTRIES_FAILURE:
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    default:
      return state;
  }
};
