import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchMoviesAsync } from "./redux/movies/movieActions";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import MoviesLiked from "./components/MoviesLiked/MoviesLiked";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(fetchMoviesAsync());
  }, [fetchMoviesAsync()]);

  return (
    <div className="App">
      <Navbar />
      <Switch location={location} key={location.pathname}>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route path="/myFav" component={MoviesLiked} />
      </Switch>
    </div>
  );
}

export default App;
