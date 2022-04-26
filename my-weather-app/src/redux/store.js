import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import thunk from "redux-thunk";
import mapReducer from "./reducers/mapReducer";
import countriesReducer from "./reducers/countriesReducer";

const rootReducer = combineReducers({
  map: mapReducer,
  countries: countriesReducer,
});

const composeEnhancers = composeWithDevTools({
  trace: true,
  traceLimit: 25,
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
export default store;
