import React, { useState, useRef, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Header.scss";
import { BsSearch } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../globle/moviesApi";
import { getCategories } from "../features/movieSlice/movieSlice";
import ContentContainer from "../contnetContainer/ContentContainer";
import logo from "../pictures/logo.svg";
const Header = () => {

  const [list, setList]=useState("")

// const moveToContainer = useRef()
const navigateToLists=(e)=>{
  setList(e.target.value);

  // moveToContainer.current.scrollIntoView({behavior: "smooth"});
}
  const [isOpen, setIsOpen] = useState(false);
  // const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [query, setQuery] = useState("");

  const [showSearch, setShowSearch] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const [category, setCategiry]= useState(false)
  const showHandler =()=>{
    setCategiry(true)
  }

  useEffect(() => {



    window.scrollTo(0, 0);
  }, [location]);

  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.movies);
  useEffect(() => {
    MoviesApi();
  }, [dispatch]);

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
      setTimeout(() => {
        setShowSearch(false);
      }, 1000);
    }
  };

  const openSearch = () => {
    setMobileMenu(false);
    setShowSearch(true);
  };

  const openMobileMenu = () => {
    setMobileMenu(true);
    setShowSearch(false);
  };

  const myDispatch = useDispatch();
  // const { categories } = useSelector((state) => state.movies);
  useEffect(() => {
    MoviesApi();
  }, [myDispatch]);

  const MoviesApi = () => {
    fetchData("/genre/movie/list").then((Response) => {
      console.log("I am the response of gener", Response);
      dispatch(getCategories(Response));
    });
  };
  console.log("i am the type of geners", typeof categories);

  const [toggle, setToggle] = useState(true)
  const togelHandler=()=>{
    setToggle(!toggle)
    setTimeout(() => {
      setToggle(false);
  }, 15000);
  }

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
        <ul className={`nav-items ${isOpen && "open"}`}>
          <li menuItem onClick={navigateToLists} id="movie" variant="primary" key="movie">Movies</li>
          <li menuItem onClick={navigateToLists} id="tvShows" variant="primary" key="tvShows">TV Shows</li>
          <li menuItem onClick={togelHandler} >categories</li>
          
        </ul>
        <div
          className={`nav-toggle ${isOpen && "open"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="bars2" onClick={openSearch}>
            {" "}
            <BsSearch />{" "}
          </div>
          <div className="bar1" onClick={openMobileMenu}></div>

          <div className="searchInput">
            <input type="text" placeholder="search..." />
          </div>
        </div>

      </div>
              {/* header list */}

{toggle && (<div className="categories">
          {categories.genres &&
            categories.genres.map((genre) => (
           
                <p >{genre.name}</p>

            ))}
        </div>) 
              }
    </header>
  );
};

export default Header;
