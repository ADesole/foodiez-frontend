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
          <label>new ingredient</label>

          <input
            onChange={handleChange}
            type="text"
            id="fname"
            name="name"
            placeholder="Your ingredient..."
          />

          <input type="submit" onClick={handleSubmit} value="add ingredient" />
        </div>
      </form>
    </>
  );
};

export default AddIngredientForm;
