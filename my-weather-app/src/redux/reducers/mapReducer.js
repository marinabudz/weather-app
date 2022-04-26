import { MapActionTypes } from "../types/mapTypes";

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

const mapReducer = (state = initialState, action = defaultAction) => {
  switch (action.type) {
    case MapActionTypes.SET_MAP:
      return {
        ...state,
        data: action.data,
      };
    case MapActionTypes.SET_MAP_ERROR:
      return {
        ...state,
        error: action.error,
      };
    case MapActionTypes.IS_LOADING:
      return {
        ...state,
        isLoading: action.loading,
      };

    default:
      return state;
  }
};

export default mapReducer;
