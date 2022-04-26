import { CountriesActionTypes } from "../types/countriesTypes";

export const countriesActions = {
  setCountries: (data) => ({
    type: CountriesActionTypes.SET_COUNTRIES,
    data
  }),
  setCountriesError: (error) => ({
    type: CountriesActionTypes.SET_COUNTRIES_ERROR,
    error
  }),
  setIsLoading: (loading) => ({
    type: CountriesActionTypes.IS_LOADING,
    loading
  })
};

export const getCountries = () => async (dispatch) => {
  const { setCountriesError, setCountries, setIsLoading } = countriesActions;
  const endpoint =
    "http://countriesnow.space/";

  dispatch(setIsLoading(true));
  try {
    await fetch(endpoint)
      .then((res) => res.json())
      .then((data) => {
		  console.log({data})
        const updatedResults=[];
        dispatch(setCountries(updatedResults));
      });
  } catch (e) {
    dispatch(setCountriesError(e));
  } finally {
    dispatch(setIsLoading(false));
  }
};
