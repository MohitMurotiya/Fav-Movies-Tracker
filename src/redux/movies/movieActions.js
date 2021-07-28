import {
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
} from "./movieTypes";
import axios from "axios";

export const fetchMoviesRequest = () => ({
  type: FETCH_MOVIES_REQUEST,
});

export const fetchMoviesSuccess = (movies) => ({
  type: FETCH_MOVIES_SUCCESS,
  payload: movies,
});

export const fetchMoviesFailure = (error) => ({
  type: FETCH_MOVIES_FAILURE,
  payload: error,
});

export const fetchMoviesAsync = () => {
  return (dispatch) => {
    dispatch(fetchMoviesRequest());
    axios
      .get("https://wookie.codesubmit.io/movies", {
        headers: { Authorization: "Bearer Wookie2019" },
      })
      .then((res) => {
        const movies = res.data.movies.map((movie) => ({
          ...movie,
          isFavourite: false,
        }));
        dispatch(fetchMoviesSuccess(movies));
      })
      .catch((err) => {
        const errorMessgae = err.message;
        dispatch(fetchMoviesFailure(errorMessgae));
      });
  };
};
