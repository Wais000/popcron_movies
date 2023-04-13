import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Header.scss";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchData } from "../globle/moviesApi";
// import { getGenres } from "../features/movieSlice/movieSlice";
import logo from "../pictures/logo.svg";
import { GoSearch } from "react-icons/go";

const Header = () => {
  const [list, setList] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  // const location = useLocation();
  // const [toggle, setToggle] = useState(false);

  // const dispatch = useDispatch();
  const navigateToLists = (e) => {
    setList(e.target.value);
  };
  // const { genres } = useSelector((state) => state.movies);
  // useEffect(() => {
  //   MoviesApi();
  // }, [dispatch]);

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/multi/${query}`);
     
    }
    
  };
  const qeuryHandler = (e) => {
    setQuery(e.target.value);
   

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
            menuItem
            onClick={navigateToLists}
            id="movie"
            variant="primary"
            key="movie"
          >
            Movies
          </li>
          <li
            menuItem
            onClick={navigateToLists}
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
            type="text"
            className="input-search"
            required="required"
            placeholder="Type the name.."
            onChange={qeuryHandler}
            onKeyDown={searchQueryHandler}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
