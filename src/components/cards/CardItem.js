import React from "react";
import "./card.css";
import { useState } from "react";

import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";

const CardItem = ({
  genderToggle,
  name,
  femaleImage,
  maleImage,
  id,
  onViewExercise,
}) => {
  const [like, setLike] = useState(true);

  const setData = () => {
    setLike(!like);
    let obj = {
      key: id,
      genderToggle: genderToggle,
      name: name,
      femaleImage: femaleImage,
      maleImage: maleImage,
      id: id,
      onViewExercise: onViewExercise,
    };
    const arr = [];
    if(like){
      arr.push(obj)
      const exercises = JSON.parse(localStorage.getItem('like')) || [];
      const favorites = like ? [...exercises, obj] : exercises.filter((e) => {
        return e.id !== obj.id;
      })
      localStorage.setItem('like', JSON.stringify(favorites));
    }
  };

  return (
    <div className="card-item-wrapper">
      <img
        src={genderToggle === "womens" ? femaleImage : maleImage}
        alt={name}
      />
      <div className="card-item-content">
        <h3>{name}</h3>
        <button
          type="button"
          className="card-button"
          onClick={() => onViewExercise(id)}
        >
          View exercise
        </button>
        <button
          className="like"
          onClick={() => setData()}
        >
          {like ? <FavoriteBorderIcon /> : <FavoriteIcon />}
        </button>
      </div>
    </div>
  );
};
export default CardItem;