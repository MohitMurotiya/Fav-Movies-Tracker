import { combineReducers } from "redux";
import moviesReducer from "./movies/movieReducer";
import favouritesReducer from "./favourites/favReducer";

const rootReducer = combineReducers({
  moviesReducer,
  favouritesReducer,
});

export default rootReducer;
