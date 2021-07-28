import React from "react";
import { useSelector } from "react-redux";
import { selectFavouritesList } from "../../redux/favourites/favSelectors";
import Row from "../Row/Row";
import "./MoviesLiked.css";

function MoviesLiked() {
  const favs = useSelector(selectFavouritesList);

  return (
    <div style={{ color: "white", marginTop: "100px" }}>
      {favs.length == 0 ? (
        <h1 style={{ textAlign: "center" }}>
          You don't have a favourite movie yet.
        </h1>
      ) : (
        <>
          <Row title="My List" movies={favs} />
        </>
      )}
    </div>
  );
}

export default MoviesLiked;
