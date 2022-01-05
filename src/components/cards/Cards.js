import React from "react";
import CardItem from "./CardItem";
import LazyLoad from "react-lazyload";
import "./card.css";

const Cards = ({ workouts, onViewExercise, genderToggle }) => {
  const Loading = () => (
    <div className="card-data-loading">
      <p>loading...</p>
    </div>
  );
  
  return (
    <>
      {workouts.map((exercise) => (
        <LazyLoad key={exercise.id} placeholder={<Loading />} height={200} once>
          <CardItem
            key={exercise.id}
            genderToggle={genderToggle}
            name={exercise.name}
            femaleImage={exercise.female.image}
            maleImage={exercise.male.image}
            id={exercise.id}
            onViewExercise={onViewExercise}
          />
        </LazyLoad>
      ))}
    </>
  );
};

export default Cards;
