import React from "react";
import "./card.css";
import { useState } from "react";
// import { useEffect } from "react";

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

const CardItem = ({
  genderToggle,
  name,
  femaleImage,
  maleImage,
  id,
  onViewExercise,
}) => {

  const [like, setLike] = useState(false);

  // useEffect(() => {
  //   const checkIfExisted = (favoriteStorage) => {
  //     let flag = false;
  //     favoriteStorage.forEach((favorite) => {
  //       if (favorite.id === obj.id) {
  //         flag = true;
  //       }
  //     })
  //     return flag;
  //   }
  //   const favoriteStorage = JSON.parse(localStorage.getItem('favoriteUserList')) || [];
  //   if (!checkIfExisted(favoriteStorage)) {
  //     setLike(false);
  //   }
  // }, [obj])

  // const toggleFavorite = () => {
  //   setLike(!like);
  //   const favoriteStorage = JSON.parse(localStorage.getItem('favoriteUserList')) || [];
  //   const addFavoriteName = !like ? [...favoriteStorage, obj] : favoriteStorage.filter((object) => {
  //     return object.id !== obj.id
  //   });
  //   localStorage.setItem('favoriteUserList', JSON.stringify(addFavoriteName));
  // }


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
        onClick={() => setLike((prevLike) => !prevLike)}
        >
        {like ? <FavoriteIcon /> : <FavoriteBorderIcon/>}
        </button> 
      </div>
    </div>
  );
};
export default CardItem;
