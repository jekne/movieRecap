import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

// `http://www.omdbapi.com/?i=${params.movieId}&apikey=${API_KEY}`;
export default function MovieDetailsPage() {
  const [movie, set_movie] = useState({});

  const params = useParams();
  console.log("this is my params", params);

  const putDATA = async () => {
    const response = await axios.get(
      `http://www.omdbapi.com/?i=${params.movieId}&apikey=6a06f383`
    );
    console.log("this is my response on details page", response);
    set_movie(response.data);
  };
  useEffect(() => {
    putDATA();
  }, []);

  return (
    <div>
      <div>THIS IS THE MOVIE WITH DETAILS</div>
      <div>{movie.Title}</div>
      <img src={movie.Poster} />
      <h1>{movie.Year}</h1>
    </div>
  );
}
