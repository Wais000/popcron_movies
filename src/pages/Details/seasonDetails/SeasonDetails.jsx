import React, { useEffect, useState } from "react";
// import { getUrl } from "../../../components/features/movieSlice/movieSlice";
// import { fetchData } from "../../../components/globle/moviesApi";
// import { AiFillLike } from "react-icons/ai";
// import { MdStarRate } from "react-icons/md";
// import { MdAccessTimeFilled } from "react-icons/md";
// import { RiMovie2Fill } from "react-icons/ri";
// import { Link } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { useParams } from "react-router-dom";
// import { useNavigate } from "react-router-dom";


function SeasonDetails() {
    // const dispatch = useDispatch();
    // const [isLoading, setIsLoading] = useState(true);
    // const navigate = useNavigate();
    // const { id } = useParams();

    // useEffect(() => {
    //     DetailsApi();
    //     window.scrollTo(0, 0);
    //   }, [dispatch]);

    //   const { links } = useSelector((state) => state.movies);
    //   const DetailsApi = () => {
    //     fetchData(`/tv/${id}`).then((Response) => {
    //       console.log("I am the response details", Response);
    //       dispatch(getUrl(Response));
    //       setIsLoading(false);
    //     });
    //   };
  return (

//     <>
//     {isLoading ? (
//      <h2>Popcorn...</h2>
//    ) : ( )} 
//  </>
<div
className="movie"
style={{
  backgroundImage: `linear-gradient(to bottom,  rgba(45, 68, 82, 0.711), rgb(22, 35, 43)), url(https://image.tmdb.org/t/p/original${
    links ? links.backdrop_path : ""
  })`,
  width: "100%",
  height: "auto",
  backgroundPosition: "center",
  backgroundtSize: "cover",
}}
>
<h1> Sorry, this Page is under the construction</h1>




</div>
);
}

export default SeasonDetails