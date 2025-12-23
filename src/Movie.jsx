import React from "react";
import { useState } from "react";
import "./Movie.css";
import MovieForm from "./MovieForm";

const Movie = ({ movieKey, title, hall, price, poster, editMovie }) => {

  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [showForm, setShowForm] = useState(false);


  const handleLike = () => {
    setLikes(prev => prev + 1);
  };

  const handleDislike = () => {
    setDislikes(prev => prev + 1);
  };

  const handleEdit = () => {
    setShowForm(!showForm);
  };


  const defaultPrice = 300;
  const displayPrice = price || defaultPrice;
  
  return (
    <div className="container">
      <div className="img">
        <img className="movie-img" src={poster} alt={title} />
      </div>
      <div className="info">
        <div>
          <span>{title}</span>
          {hall !== undefined ? (
            <span>, sala: {hall}, cena: {displayPrice}din</span>
          ) : (
            <span> Film još uvek nije u ponudi</span>
          )}
        </div>
        <div className="buttons">
          <button onClick={handleLike}>Like</button>
          <button onClick={handleDislike}>Dislike</button>
          <p>Likes: {likes}</p>
          <p>Dislikes: {dislikes}</p>
          <button onClick={handleEdit}>Edit</button>
          {showForm && (
            <MovieForm 
              handleMovie={editMovie} 
              movieKey={movieKey} 
              title={title} 
              hall={hall} 
              price={price} 
              poster={poster}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Movie;