import React, { useEffect, useState }  from 'react';
import { getUrl } from '../../../components/features/movieSlice/movieSlice';
import { fetchData } from '../../../components/globle/moviesApi';
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';
import './TvDetails.scss';
import { AiFillLike } from "react-icons/ai";
import { MdStarRate } from "react-icons/md";
import { MdAccessTimeFilled } from "react-icons/md";
import { RiMovie2Fill } from "react-icons/ri";

function TvDetails() {
 // const [movieId, setMovieID]=useState("")
 const dispatch = useDispatch();
 const {id } = useParams()

 useEffect(() => {
   DetailsApi()
   window.scrollTo(0,0)
}, [dispatch])

 const { links } = useSelector((state) => state.movies);
 const DetailsApi = () => {
   fetchData(`/tv/${id}`).then((Response) => {
     console.log("I am the response details", Response);
     dispatch(getUrl(Response));
   });
 };

 return (
   <div className="movie"
   style={{
     backgroundImage: `linear-gradient(to bottom,  rgba(45, 68, 82, 0.711), rgb(22, 35, 43)), url(https://image.tmdb.org/t/p/original${
       links ? links.backdrop_path : ""
     })`,
     width: "100%",
     height: "auto",
     backgroundPosition: "center",
     backgroundtSize: "cover",
   }}>

   <div className="movieDetail">
       <div className="BoxDetailLeft">
           <div className="moviePosterBox">
               <img className="moviePoster" src={`https://image.tmdb.org/t/p/original${links ? links.poster_path : ""}`} />
           </div>
       </div>
       <div className="movieDetailRight">
           <div className="movieDetailRightTop">
               <div className="movieName">{links ? links.name : ""}</div>
               <div className="movieShortMessage">{links ? links.tagline : ""}</div>
               <div className="MovieShortInfo">


               <ul className="shortDetails">
                <li className="movieRating">
                  <span>
                    <MdStarRate />
                  </span>
                  <p> {links ? links.vote_average : ""}</p>
                </li>
                <li className="movieVoteCount">
                  {" "}
                  <span>
                    <AiFillLike />
                  </span>
                  {links ? "(" + links.vote_count + ") votes" : ""}
                </li>
                <li className="movieRuntime">
                  {" "}
                  <span>
                    <MdAccessTimeFilled />
                  </span>{" "}
                  {links ? links.runtime + " mins" : ""}
                </li>
                <li className="movieReleaseDate">
                  {" "}
                  <span>
                    <RiMovie2Fill />
                  </span>{" "}
                  {links ? " " + links.release_date : ""}
                </li>
              </ul>
               </div>  
               
               <div className="movie__genres">
                   {
                       links && links.genres
                       ? 
                       links.genres.map(genre => (
                           <><span className="movie__genre" id={genre.id}>{genre.name}</span></>
                       )) 
                       : 
                       ""
                   }
               </div>
           </div>
           <div className="movie__detailRightBottom">
               <div className="synopsisText">Synopsis</div>
               <div>{links ? links.overview : ""}</div>
           </div>
           
       </div>
   </div>
   {/* <div className="movie__links">
       <div className="movie__heading">Useful Links</div>
       {
           links && links.homepage && <a href={links.homepage} target="_blank" style={{textDecoration: "none"}}><p><span className="movie__homeButton movie__Button">Homepage <i className="newTab fas fa-external-link-alt"></i></span></p></a>
       }
       {
           links && links.imdb_id && <a href={"https://www.imdb.com/title/" + links.imdb_id} target="_blank" style={{textDecoration: "none"}}><p><span className="movie__imdbButton movie__Button">IMDb<i className="newTab fas fa-external-link-alt"></i></span></p></a>
       }
   </div> */}
   <div className="movieProductionCompanies">  <h2>Production companies</h2></div>
   <div className="production">
       {
           links && links.production_companies && links.production_companies.map(company => (
               <>
                   {
                       company.logo_path 
                       && 
                       <div className="CompanyLogoContainer">
                           <img className="ComapanyLogos" src={"https://image.tmdb.org/t/p/original" + company.logo_path} />
                           <span>{company.name}</span>
                       </div>
                   }
               </>
           ))
       }
   </div>
</div>
)
 
}

export default TvDetails