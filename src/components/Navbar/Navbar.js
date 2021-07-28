import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import accountLogo from "./profilepic.png";
import "./Navbar.css";

function Navbar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 70) {
        setShow(true);
      } else setShow(false);
    });
    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__links">
        <Link to="/">
          <img
            className="nav__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/1200px-IMDB_Logo_2016.svg.png"
            alt="IMDB_LOGO"
          />
        </Link>
        <div className="nav__link">
          <NavLink to="/home" activeClassName="activeNavLink">
            Home
          </NavLink>
        </div>
        <div className="nav__link">
          <NavLink to="/myFav" activeClassName="activeNavLink">
            My Favourites
          </NavLink>
        </div>
      </div>

      <div className="nav__account">
        <img src={accountLogo} alt="Account_Logo" />
      </div>
    </div>
  );
}

export default Navbar;
