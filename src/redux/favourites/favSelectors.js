import { createSelector } from "reselect";

const selectFavourites = (state) => state.favouritesReducer.favouritesList;

export const selectFavouritesList = createSelector(
  [selectFavourites],
  (favouritesList) => favouritesList
);
