import { createSelector } from "reselect";

const index = Math.floor(Math.random() * 20);
console.log(index);
export const randomMovie = (state) => state.moviesReducer.movies[index];

export const classification7Movies = (state) =>
  state.moviesReducer.movies.filter((movie) => movie.classification === "7+");
export const classification13Movies = (state) =>
  state.moviesReducer.movies.filter((movie) => movie.classification === "13+");
export const classification18Movies = (state) =>
  state.moviesReducer.movies.filter((movie) => movie.classification === "18+");

export const selectRandomMovie = createSelector(
  [randomMovie],
  (movie) => movie
);

export const selectClassification7 = createSelector(
  [classification7Movies],
  (movies) => movies
);

export const selectClassification13 = createSelector(
  [classification13Movies],
  (movies) => movies
);

export const selectClassification18 = createSelector(
  [classification18Movies],
  (movies) => movies
);
