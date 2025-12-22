import { useState } from "react";
import React from "react";
import "./Movie.css";

const Movie = ({ title, hall, price, poster }) => {

  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleLike = () => {
    setLikes(prev => prev + 1);
  };

  const handleDislike = () => {
    setDislikes(prev => prev + 1);
  };


  const defaultPrice = 300;
  const displayPrice = price || defaultPrice;;
  
  return(
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
          <button onClick={() => handleLike()}>Like</button>
          <button onClick={() => handleDislike()}>Dislike</button>
          <p>Likes: {likes}</p>
          <p>Dislikes: {dislikes}</p>

        </div>
      </div>
    </div>
  );
};

export default Movie;