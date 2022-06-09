import { useState } from "react";
import AddCategoryModal from "./AddCategoryModal";

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
          alt="add category"
        />
      </button>
      <AddCategoryModal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};

export default AddCategoryButton;
