import React, { useEffect } from "react";
import "./Banner.css";
import { useSelector, useDispatch } from "react-redux";
import { selectRandomMovie } from "../../redux/movies/moviesSelector";
import {
  addToFavourites,
  removeFromFavourites,
} from "../../redux/favourites/favActions";

function Banner() {
  const movie = useSelector(selectRandomMovie);

  useEffect(() => {}, [movie]);
  const dispatch = useDispatch();

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  const handleAdd = (event) => {
    event.stopPropagation();
    const isFavourite = movie.isFavourite;
    dispatch(addToFavourites({ ...movie, isFavourite }));
  };

  const handleRemove = (event) => {
    event.stopPropagation();
    const isFavourite = movie.isFavourite;
    dispatch(removeFromFavourites({ ...movie, isFavourite }));
  };

  return (
    <div>
      {typeof movie === "undefined" ? (
        <h1>Lodding..</h1>
      ) : (
        <div>
          <header
            className="banner"
            style={{
              backgroundImage: `url(${movie.backdrop})`,
            }}
          >
            <div className="banner__contents">
              <h1 className="banner__title">{movie.title}</h1>

              <div className="banner__buttons">
                {movie.isFavourite ? (
                  <button onClick={handleRemove} className="banner__button">
                    Remove
                  </button>
                ) : (
                  <button onClick={handleAdd} className="banner__button">
                    Add To List
                  </button>
                )}
              </div>

              <p className="banner__description">
                {truncate(movie?.overview, 150)}
              </p>
            </div>
          </header>
        </div>
      )}
    </div>
  );
}

export default Banner;
