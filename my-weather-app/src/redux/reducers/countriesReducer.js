import { CountriesActionTypes } from "../types/countriesTypes";

const initialState = {
  error: false,
  data: null,
  isLoading: false,
};
const defaultAction = {
  data: null,
  error: undefined,
  loading: false,
};

const countriesReducer = (state = initialState, action = defaultAction) => {
  switch (action.type) {
    case CountriesActionTypes.SET_COUNTRIES:
      return {
        ...state,
        data: action.data,
      };
    case CountriesActionTypes.SET_COUNTRIES_ERROR:
      return {
        ...state,
        error: action.error,
      };
    case CountriesActionTypes.IS_LOADING:
      return {
        ...state,
        isLoading: action.loading,
      };

    default:
      return state;
  }
};

export default countriesReducer;
