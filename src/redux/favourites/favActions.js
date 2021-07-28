import { ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES } from "./favTypes";

export const addToFavourites = (item) => ({
  type: ADD_TO_FAVOURITES,
  payload: {
    ...item,
    isFavourite: true,
  },
});

export const removeFromFavourites = (item) => ({
  type: REMOVE_FROM_FAVOURITES,
  payload: {
    ...item,
    isFavourite: false,
  },
});
