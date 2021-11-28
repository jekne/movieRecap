import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// `https://omdbapi.com/?apikey=6a06f383&s=${queryParam}`;
export default function DiscoverMoviesPage() {
  const [searchText, set_searchTex] = useState("");
  const [movie, set_Movie] = useState([]);

  const search = async () => {
    console.log("i am being touch", searchText);
    const queryParam = encodeURIComponent(searchText);

    const response = await axios.get(
      `https://omdbapi.com/?apikey=6a06f383&s=${queryParam}`
    );
    console.log("this is my response", response);
    set_Movie(response.data.Search);
  };
  useEffect(() => {
    search();
  }, []);
  return (
    <div>
      {" "}
      THIS IS THE DISCOVERY PAGE
      <div>
        <input
          value={searchText}
          onChange={(e) => set_searchTex(e.target.value)}
        />

        <button onClick={search}>SEARCH</button>
        <div>
          {!movie
            ? "Loading"
            : movie.map((x) => {
                return (
                  <div key={x.imdbID}>
                    <Link to={`/movie/${x.imdbID}`}>
                      <h3>
                        {x.Title}
                        {x.Year}
                      </h3>
                    </Link>
                    <img src={x.Poster} />
                  </div>
                );
              })}
        </div>
      </div>
    </div>
  );
}
