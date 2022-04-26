import { MapActionTypes } from "../types/mapTypes";

export const mapActions = {
  setMap: (data) => ({
    type: MapActionTypes.SET_WEATHER,
    data
  }),
  setMapError: (error) => ({
    type: MapActionTypes.SET_WEATHER_ERROR,
    error
  }),
  setIsLoading: (loading) => ({
    type: MapActionTypes.IS_LOADING,
    loading
  })
};

export const getQuizes = () => async (dispatch) => {
  const { setMap, setMapError, setIsLoading } = mapActions;
  const endpoint =
    "https://opentdb.com/api.php?amount=12&difficulty=easy&type=multiple";

  dispatch(setIsLoading(true));
  try {
    await fetch(endpoint)
      .then((res) => res.json())
      .then((data) => {
        const updatedResults=[];
        dispatch(setMap(updatedResults));
      });
  } catch (e) {
    dispatch(setMapError(e));
  } finally {
    dispatch(setIsLoading(false));
  }
};
