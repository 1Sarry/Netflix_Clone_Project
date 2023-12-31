import React, { useState, useEffect } from "react";
import "./Row.scss";
import axios from "../../Axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);

      // console.log(request.data.results)
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  const opts = {
    height:"390",
    width:"100%",
    playerVars: {
       autoplay: 1
    },
  }
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie.original_name)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };
  console.log(movies);
  return (
    <div className="row ms-4 py-4">
      <h2>{title}</h2>
      <div className="row_posters d-flex p-2">
        {movies.map((movie) => {
          return (
            <img
              onClick={() => handleClick(movie)}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt=""
            />
          );
        })}
      </div>
      <div styke={{padding:"40px"}}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
      </div>
    </div>
  );
};

export default Row;
