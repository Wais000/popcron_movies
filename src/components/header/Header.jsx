import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Header.scss";
import logo from "../pictures/logo.svg";
import { GoSearch } from "react-icons/go";

const Header = () => {
  const [list, setList] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const navigateToLists = (e) => {
    setList(e.target.value);
  };
  const navigateToMoviePage = useCallback(() => {
    navigate("/Movies");
  }, [navigate]);
  const navigateToTvPage = useCallback(() => {
    navigate("/TvShows");
  }, [navigate]);

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/multi/${query}`);
      setQuery("");
      event.target.value = "";
      event.current.focus();
    }
  };
  const qeuryHandler = (e) => {
    setQuery(e.target.value);
  };

  const clearInput = () => {
    setQuery("");
  };

  return (
    <header>
      <div className="headerLists">
        <Link className="logo" to="/">
          <img
            src={logo}
            alt="logo"
            width="100%"
            height="100%"
            // viewBox="2 2 5 6"
          />
        </Link>
        <ul className="nav-items">
          <li
            className=" menuItem"
            onClick={navigateToMoviePage}
            id="movie"
            variant="primary"
            key="movie"
          >
            Movies
          </li>
          <li
            className="menuItem"
            onClick={navigateToTvPage}
            id="tvShows"
            variant="primary"
            key="tvShows"
          >
            TV Shows
          </li>
        </ul>
        <div class="search-box">
          <button type="reset" class="btn-search">
            <GoSearch />
          </button>
          <input
            type="submite"
            className="input-search"
            required="required"
            placeholder="Type the name.."
            onChange={qeuryHandler}
            onKeyDown={searchQueryHandler}
            onFocus={clearInput}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
