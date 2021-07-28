import { ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES } from "./favTypes";
import { addToFavouritesUtil, removeFromFavouritesUtil } from "./favUtils";

const initialState = {
  favouritesList: [],
};

const favouritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITES:
      return {
        ...state,
        favouritesList: addToFavouritesUtil(
          state.favouritesList,
          action.payload
        ),
      };
    case REMOVE_FROM_FAVOURITES:
      return {
        ...state,
        favouritesList: removeFromFavouritesUtil(
          state.favouritesList,
          action.payload
        ),
      };
    default:
      return state;
  }
};

export default favouritesReducer;
