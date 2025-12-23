import React from "react";
import { useState } from "react";
import Movie from "./Movie";
import MovieForm from "./MovieForm";

const MOVIES = [
  {
    title: "Captain America - The First Avenger",
    hall: 2,
    price: 350,
    poster: "https://m.media-amazon.com/images/I/51Xp+8qDCbL._AC_UF350,350_QL50_.jpg"
  },
  {
    title: "The Papillon",
    hall: 1,
    price: 300,
    poster: "https://m.media-amazon.com/images/M/MV5BMjIxMTMyOTE2NF5BMl5BanBnXkFtZTgwMDYyNzY1NTM@._V1_.jpg"
  },
  {
    title: "The Lost City of Z",
    hall: 5,
    price: 350,
    poster: "https://m.media-amazon.com/images/M/MV5BZmU2ODIyMWItMjU3Zi00ZmVhLWIyNDAtMWE5OWU2ZDExMGFiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
  },
  {
    title: "Klaus",
    hall: 3,
    poster: "https://m.media-amazon.com/images/I/7128yjOjl9L.jpg"
  },
  {
    title: "Bullet Train",
    poster: "https://m.media-amazon.com/images/I/71INz6LX8aL._AC_UF894,1000_QL80_.jpg"
  }
];

const Movies = () => {

  const [movies, setMovies] = useState(MOVIES);
  
  
  const date = new Date().toLocaleDateString('sr-RS');

  
  const addMovie = movie => {
    setMovies(prev => [
      ...prev,
      {
        title: movie.title,
        hall: movie.hall,
        price: movie.price,
        poster: movie.url
      }
    ]);
  };

  const editMovie = (editedMovie, key) => {
    setMovies(prev => {
      const newMovies = [...prev]; 
      newMovies[key].title = editedMovie.title;
      newMovies[key].hall = editedMovie.hall;
      newMovies[key].price = editedMovie.price;
      newMovies[key].poster = editedMovie.poster;
      return newMovies; 
    });
  };

  return (
    <div>
      <p><strong>Repertoar za danas ({date})</strong></p>
      {movies.map((movie, index) => (
        <Movie 
          key={index}
          movieKey={index}
          editMovie={editMovie}
          title={movie.title} 
          hall={movie.hall} 
          price={movie.price}
          poster={movie.poster}
        />
      ))}
      <MovieForm handleMovie={addMovie} />
    </div>
  );
};

export default Movies;