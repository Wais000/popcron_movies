import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Header.scss";
import { BsSearch } from "react-icons/bs";

// import ContentWrapper from "../contentWrapper/ContentWrapper";
import ContentContainer from "../contnetContainer/ContentContainer";

// import logo from "../../assets/movix-logo.svg";
import logo from "../pictures/logo.svg";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [query, setQuery] = useState("");

  const [showSearch, setShowSearch] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // const controlNavbar = () => {
  //     if (window.scrollY > 200) {
  //         if (window.scrollY > lastScrollY && !mobileMenu) {
  //             setShow("hide");
  //         } else {
  //             setShow("show");
  //         }
  //     } else {
  //         setShow("top");
  //     }
  //     setLastScrollY(window.scrollY);
  // };

  // useEffect(() => {
  //     window.addEventListener("scroll", controlNavbar);
  //     return () => {
  //         window.removeEventListener("scroll", controlNavbar);
  //     };
  // }, [lastScrollY]);

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
      setTimeout(() => {
        setShowSearch(false);
      }, 1000);
    }
  };

  // const openSearch = () => {
  //     setMobileMenu(false);
  //     setShowSearch(true);
  // };

  // const openMobileMenu = () => {
  //     setMobileMenu(true);
  //     setShowSearch(false);
  // };

  // const navigationHandler = (type) => {
  //     if (type === "movie") {
  //         navigate("/explore/movie");
  //     } else {
  //         navigate("/explore/tv");
  //     }
  //     setMobileMenu(false);
  // };

  // );

  const openSearch = () => {
    setMobileMenu(false);
    setShowSearch(true);
  };

  const openMobileMenu = () => {
    setMobileMenu(true);
    setShowSearch(false);
  };

  return (
    <header>
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
        <li menuItem>Movies</li>
        <li menuItem>TV Shows</li>
      </ul>

      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}>     
        <div className="bars2" onClick={openSearch}>  <BsSearch /> </div>
        <div className="bar1" onClick={openMobileMenu}></div>

       <div className="searchInput">
        <input type="text" placeholder="search..." />
      </div>
      </div>
 
    </header>
  );
};

export default Header;
