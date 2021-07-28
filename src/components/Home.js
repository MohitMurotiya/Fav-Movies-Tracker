import React from "react";
import { useSelector } from "react-redux";
import {
  selectClassification18,
  selectClassification13,
  selectClassification7,
} from "../redux/movies/moviesSelector";
import Row from "./Row/Row";
import Banner from "./Banner/Banner";

function Home() {
  const movies18 = useSelector(selectClassification18);
  const movies13 = useSelector(selectClassification13);
  const movies7 = useSelector(selectClassification7);

  return (
    <div>
      <Banner />
      <Row title="Kids and Family Movies" movies={movies7} />
      <Row title="13+ Movies" movies={movies13} />
      <Row title="18+ Movies" movies={movies18} />
    </div>
  );
}

export default Home;
