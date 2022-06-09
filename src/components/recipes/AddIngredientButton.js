import { useState } from "react";
import AddIngredientModal from "./AddIngredientModal";

const AddCategoryButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <>
      <button className="plus-button" onClick={openModal}>
        <img
          className="plus-button-icon"
          src="./pics/plus_icon.png"
          alt="add ingredient"
        />
      </button>
      <AddIngredientModal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};

export default AddCategoryButton;
