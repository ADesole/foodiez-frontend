import { useState } from "react";
import CategoriesList from "./CategoryDropDownList";
import recipeStore from "../../stores/recipeStore";
import { observer } from "mobx-react";
import authstore from "../../stores/AuthStore";

const RecipeSubmitForm = ({ checkedItems, disabled }) => {
  const [input, setInput] = useState({
    user: authstore.user._id,
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInput((values) => ({ ...values, [name]: value }));
  };
  const handleIngredients = () => {
    setInput((values) => ({ ...values, ["ingredients"]: checkedItems }));
  };
  const handleSubmit = (event) => {
    // setInput((values) => ({ ...values, ["user"]: authstore.user._id }));
    event.preventDefault();
    console.log(input);
    recipeStore.createRecipe(input);
    alert("Yum 😋! what a delicious meal , recipe was created successfully.");
  };

  return (
    <form onSubmit={handleSubmit} className="create-recipe-form">
      <label className="create-recipe-label">
        <p className="form-sub-title">Recipe Name:</p>
        <input
          placeholder="Your title..."
          className="text-ingredient"
          type="text"
          name="name"
          onChange={handleChange}
        />
      </label>
      <label className="create-recipe-label">
        <p className="form-sub-title">Image URL:</p>
        <input
          placeholder="Your image URL..."
          className="text-ingredient"
          type="text"
          name="image"
          onChange={handleChange}
        />
      </label>
      <label className="create-recipe-label">
        <p className="form-sub-title">Time to Prepare:</p>
        <input
          placeholder="In minutes..."
          className="text-ingredient"
          type="number"
          name="ttp"
          onChange={handleChange}
        />
      </label>
      <label className="create-recipe-label">
        <p className="form-sub-title">Steps:</p>
        <textarea
          placeholder="Step1. Step2. ..."
          name="steps"
          className="text-ingredient"
          onChange={handleChange}
        />
      </label>
      <label className="create-recipe-label">
        <p className="form-sub-title">Category:</p>
        <CategoriesList handleChange={handleChange} />
      </label>

      <input
        className="submit-form"
        type="submit"
        onClick={handleIngredients}
        disabled={disabled}
      />
    </form>
  );
};

export default observer(RecipeSubmitForm);
