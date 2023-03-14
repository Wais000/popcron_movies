import { useEffect, useState } from "react";
import {fetchData} from "../globle/moviesApi"

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading("loading...");
        setData(null);
        setError(null);

        fetchData(url)
            .then((res) => {
                setLoading(false);
                setData(res);
            })
            .catch((err) => {
                setLoading(false);
                setError("Something went wrong!");
            });
    }, [url]);

    return { data, loading, error };

//   const [data, setData] = useState({
//     results: null,
//     loading: true,
//     error: null,
//   });

//   console.log(url);

//   useEffect(() => {
//     fetchData(url)
//       .then((res) => res.json())
//       .then((results) => setData({ results, loading: false, error: null }))
//       .catch((error) =>
//         setData({ results: null, loading: false, error: error.message })
//       );
//   }, [url]);
//   console.log(data);
//   return data;

};

export default useFetch;
