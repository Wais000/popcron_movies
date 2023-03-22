import axios from "axios";
import { useEffect, useState } from "react";
// import Genres from "../../components/Genres/Genres";
// import SingleContent from "../../components/SingleContent/SingleContent";
// import useGenre from "../../hooks/useGenre";
// import CustomPagination from "../../components/Pagination/CustomPagination";
import { fetchData } from "../../components/globle/moviesApi";
import { getCategories } from "../../components/features/movieSlice/movieSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";


function Movies() {
const [genres, setGenres] = useState([]);
//   const [selectedGenres, setSelectedGenres] = useState([]);
//   const [page, setPage] = useState(1);
//   const [content, setContent] = useState([]);
//   const [numOfPages, setNumOfPages] = useState();
//   const genreforURL = useGenre(selectedGenres);

  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.movies);
  useEffect(() => {
    MoviesApi();
  }, [dispatch]);


  const MoviesApi = () => {
    fetchData("/genre/movie/list").then((Response) => {
      console.log("I am the response of gener", Response);
      dispatch(getCategories(Response));
    });
  };
  console.log("i am the type of geners", typeof categories);



  return (
    <div >
        <h2>title</h2>

        {
        categories.genres &&
          categories.genres.map((genre) => (
            <Link style={{textDecoration:"none",color:"white"}}  >
            <dive key={genre.id}>
                <h2>name:{genre.name}</h2>
            </dive>
           
         
            </Link>
          
          ) )}
    </div>


  )
}

export default Movies