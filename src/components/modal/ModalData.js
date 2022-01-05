import React from "react";
import Modal from "./Modal";

const ModalData = ({
  workouts,
  showModal,
  onModalToggle,
  genderToggle,
  selectedExercise,
}) => {
  return (
    <>
      {workouts
        .filter((exercise) => exercise.id === selectedExercise)
        .map((filteredExercise) => (
          <Modal
            key={filteredExercise.id}
            exercise={filteredExercise}
            showModal={showModal}
            onModalToggle={onModalToggle}
            genderToggle={genderToggle}
          />
        ))}
    </>
  );
};

export default ModalData;
