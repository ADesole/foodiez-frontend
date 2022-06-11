import React from "react";
import { useState } from "react";
import ingredientsStore from "../../stores/IngredientsStore";

const AddIngredientForm = () => {
  const [ingredient, setIngredient] = useState({ name: "" });

  const handleChange = (event) => {
    setIngredient({ ...ingredient, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    ingredientsStore.addIngredients(ingredient);
    setIngredient({ name: "" });
  };

  return (
    <>
      <form action="action_page.php">
        <div className="add-ingredient">
          <label className="form-sub-title">New ingredient:</label>

          <input
            onChange={handleChange}
            type="text"
            className="text-ingredient"
            id="fname"
            name="name"
            // value={ingredient.name}
            value={ingredient.name}
            placeholder="Your ingredient..."
          />

          <input
            type="submit"
            className="submit-ingredient"
            onClick={handleSubmit}
            value="Add"
          />
        </div>
      </form>
    </>
  );
};

export default AddIngredientForm;
