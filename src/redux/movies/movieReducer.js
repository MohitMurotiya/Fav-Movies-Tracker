import {
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
} from "./movieTypes";

const initialState = {
  loading: false,
  error: "",
  movies: [],
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.payload,
        loading: false,
        error: "",
      };
    case FETCH_MOVIES_FAILURE:
      return {
        ...state,
        movies: [],
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default moviesReducer;
