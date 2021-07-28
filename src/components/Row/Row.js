import React, { useState } from "react";
import "./Row.css";
import Fab from "@material-ui/core/Fab";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CloseIcon from "@material-ui/icons/Close";
import RemoveIcon from "@material-ui/icons/Remove";
import { useDispatch } from "react-redux";
import {
  addToFavourites,
  removeFromFavourites,
} from "../../redux/favourites/favActions";
import {
  Tooltip,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Slide,
} from "@material-ui/core";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Row({ title, movies }) {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const [movie, setMovie] = useState();

  function onModalOpen(movie) {
    setMovie(movie);
    setOpenModal(true);
  }

  function onModalClose() {
    setOpenModal(false);
    setMovie();
  }

  return (
    <div className="row">
      <br />
      <h1 style={{ marginLeft: "15px" }}>{title}</h1>
      <br />
      <div className="row__posters">
        {movies.map((movie) => (
          <>
            <div className="poster__hover">
              <img key={movie.id} src={`${movie.poster}`} alt={movie.title} />
              <div className="poster__buttons">
                <Tooltip title="Show More">
                  <Fab onClick={() => onModalOpen(movie)} size="medium">
                    <ExpandMoreIcon />
                  </Fab>
                </Tooltip>
                &nbsp;&nbsp;
                {movie.isFavourite ? (
                  <Tooltip title="Remove">
                    <Fab
                      onClick={() => {
                        let isFavourite = movie.isFavourite;
                        dispatch(
                          removeFromFavourites({ ...movie, isFavourite })
                        );
                      }}
                      size="medium"
                    >
                      <RemoveIcon />
                    </Fab>
                  </Tooltip>
                ) : (
                  <Tooltip title="Add to List">
                    <Fab
                      onClick={() => {
                        let isFavourite = movie.isFavourite;
                        dispatch(addToFavourites({ ...movie, isFavourite }));
                      }}
                      size="medium"
                    >
                      <FavoriteIcon />
                    </Fab>
                  </Tooltip>
                )}
              </div>
              <div className="poster__title">
                <h4>{movie.title}</h4>
                <h5>IMDB {movie.imdb_rating}</h5>
              </div>
            </div>
          </>
        ))}
      </div>

      {typeof movie === "object" ? (
        <div>
          <Dialog
            open={openModal}
            TransitionComponent={Transition}
            onClose={onModalClose}
            className="modal__container"
          >
            <div className="modal__header">
              <h2>Movie Info</h2>
              <Button onClick={onModalClose}>
                <CloseIcon style={{ color: "white" }} />
              </Button>
            </div>
            <DialogContent>
              <div className="modal__image__wrap">
                <div className="modal__image__shadow"></div>
                <img
                  key={movie.id}
                  src={`${movie.backdrop}`}
                  alt={movie.title}
                />
              </div>
              <h1 style={{ color: "whitesmoke", marginBottom: "5px" }}>
                {movie.title}
              </h1>
              <DialogContentText
                style={{ color: "whitesmoke", textAlign: "justify" }}
              >
                {movie.overview}
              </DialogContentText>
              <hr />
              <div className="modal__info">
                <p>IMDB {movie.imdb_rating}</p>
                <p>
                  {new Date(movie.released_on).getFullYear()} &nbsp;
                  {movie.length} &nbsp;{" "}
                  <span
                    style={{
                      backgroundColor: "white",
                      color: "black",
                      fontWeight: "bold",
                      padding: "2px",
                    }}
                  >
                    {movie.classification}
                  </span>
                </p>
                <p>| {movie.genres.map((x) => x + " | ")}</p>
                <p>
                  Directors:{" "}
                  {typeof movie.director == "object"
                    ? movie.director.map((x) => x + " , ")
                    : movie.director}
                </p>
                <p>Starring: {movie.cast.map((x) => x + " , ")}</p>
              </div>
            </DialogContent>
            <DialogActions>
              {!movie.isFavourite ? (
                <Button
                  onClick={() => {
                    let isFavourite = movie.isFavourite;
                    dispatch(addToFavourites({ ...movie, isFavourite }));
                    onModalClose();
                  }}
                  style={{
                    backgroundColor: "white",
                    color: "black",
                    borderRadius: "5px",
                  }}
                >
                  Add To List
                </Button>
              ) : (
                <Button
                  style={{
                    backgroundColor: "white",
                    color: "black",
                    borderRadius: "5px",
                  }}
                  onClick={() => {
                    let isFavourite = movie.isFavourite;
                    dispatch(removeFromFavourites({ ...movie, isFavourite }));
                    onModalClose();
                  }}
                >
                  Remove
                </Button>
              )}
            </DialogActions>
          </Dialog>
        </div>
      ) : null}
    </div>
  );
}

export default Row;
