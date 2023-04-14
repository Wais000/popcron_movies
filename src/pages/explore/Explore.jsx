import React, { useEffect, useState } from "react";
import { getUrl } from "../../components/features/movieSlice/movieSlice";
import { fetchData } from "../../components/globle/moviesApi";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Explore() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { id } = useParams();

  const { links } = useSelector((state) => state.movies);
  const DetailsApi = () => {
    fetchData("/discover/movie").then((Response) => {
      console.log("response from discover", Response);
      dispatch(getUrl(Response));
      setIsLoading(false);
    });
  };

  useEffect(() => {
    DetailsApi();
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>Explore</div>
  )
}

export default Explore