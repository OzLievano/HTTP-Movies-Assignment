import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory, useParams} from "react-router-dom";
import MovieCard from "./MovieCard";

function Movie({ addToSavedList }) {
  const [movie, setMovie] = useState(null);
  const params = useParams();
  const history = useHistory();
  const fetchMovie = (id) => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then((res) => setMovie(res.data))
      .catch((err) => console.log(err.response));
  };

  const saveMovie = () => {
    addToSavedList(movie);
  };

  const deleteMovie = () => {
    axios.delete(`http://localhost:5000/api/movies/${params.id}`)
    .then(res => {
      console.log(res.data)
      history.push('/')
    })
  }

  useEffect(() => {
    fetchMovie(params.id);
  }, [params.id]);

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  return (
    <div className="save-wrapper">
      <MovieCard movie={movie} />

      <div className="save-button" onClick={saveMovie}>
        Save
      </div>
      <button onClick={()=>history.push(`/update-movie/${params.id}`)}>Update Movie</button>
      <button onClick={deleteMovie}>Delete Movie</button>
    </div>
  );
}

export default Movie;
