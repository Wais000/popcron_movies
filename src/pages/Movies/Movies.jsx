import axios from "axios";
import { useEffect, useState } from "react";
// import Genres from "../../components/Genres/Genres";
// import SingleContent from "../../components/SingleContent/SingleContent";
// import useGenre from "../../hooks/useGenre";
// import CustomPagination from "../../components/Pagination/CustomPagination";
import { fetchData } from "../../components/globle/moviesApi";
import { getMovieTrending } from "../../components/features/movieSlice/movieSlice";
import { useSelector, useDispatch } from "react-redux";
import { AiFillStar } from "react-icons/ai";
import { RiMovie2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./Movies.scss";

function Movies() {
  const Dispatch = useDispatch();
  const [page, setPage] = useState(10);
  const { MovieTrending } = useSelector((state) => state.movies);

  useEffect(() => {
    movieLists();

  }, [Dispatch, page ]);

  const movieLists = () => {
    fetchData(`/trending/movie/week?page=${page}`).then((Response) => {
      Dispatch(getMovieTrending(Response));
    });
  };
  console.log("this api comes from latest movie", MovieTrending);

  const pageHandler = () => {
    setPage(page + 1);
  };
  // const dispatch = useDispatch();

  // const {MovieTrending} = useSelector((state) => state.movies);
  // console.log(" I am the data for movie section", MovieTrending);

  return (
    <div className="mainContainerMovies">
      {/* <h2 style={{color:'#FFD464', marginBottom:'1%'}}>Movie list</h2> */}

      {MovieTrending.results &&
        MovieTrending.results.map((movies) => (
          <div className="movieBox" key={movies.id}>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={`/MovieTrending/${movies.id}`}
            >
              <div className="cardInner">
                <div className="cardTop">
                  <img
                    src={`https://image.tmdb.org/t/p/original${
                      movies && movies.poster_path
                    }`}
                  />
                </div>

                <div className="cardBottomSwitch">
                  <div className="cardInfoSwitch">
                    <div className="rateReleaseSwitch">
                      <div className="rateSwitch">
                        <p className="iconOne">
                          <AiFillStar />
                        </p>
                        <p> {movies ? movies.vote_average.toFixed(1) : ""}</p>
                      </div>
                      <div className="releaseSwitch">
                        <p className="iconTow">
                          <RiMovie2Fill />
                        </p>
                        <p> {movies ? movies.release_date.substr(0, 4) : ""}</p>
                      </div>
                    </div>
                    <p>{movies ? movies.original_title.substr(0, 19) : ""}</p>
                  </div>
                </div>
              </div>
            </Link>
           
            {/* <button disabled={page === totalPage} onClick={() => setPage(page + 1)}>next</button> */}
          </div>
        ))}
         <button onClick={() => setPage(page + 1)}>Next Page</button>
         <button  onClick={() => setPage(page - 1)}>Previus Page</button>
    </div>
  );
}

export default Movies;
