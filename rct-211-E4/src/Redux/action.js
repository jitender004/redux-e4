import axios from "axios";
import {
  GET_COUNTRIES_FAILURE,
  GET_COUNTRIES_REQUEST,
  GET_COUNTRIES_SUCCESS,
} from "./actionTypes";

export const getCountries = () => (dispatch) => {
  dispatch({ type: GET_COUNTRIES_REQUEST });
  return axios
    .get(`http://localhost:8080/countries`)
    .then((r) => dispatch({ type: GET_COUNTRIES_SUCCESS, payload: r.data }))
    .catch((e) => dispatch({ type: GET_COUNTRIES_FAILURE, payload: e }));
};
