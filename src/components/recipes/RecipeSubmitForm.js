import React from "react";
import { useState } from "react";
import CategoriesList from "./CategoryDropDownList";
import recipeStore from "../../stores/recipeStore";
import { observer } from "mobx-react";
// import { values } from "mobx";
import authstore from "../../stores/AuthStore";
import { NavLink } from "react-router-dom";
// import {router} from "react-router-dom"

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
    // uncommment below to send to database
    recipeStore.createRecipe(input);
    alert("Yum 😋! what a delicious meal , recipe was created successfully.");

  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter recipe name:
        <input type="text" name="name" onChange={handleChange} />
      </label>
      <label>
        Please enter image url:
        <input type="text" name="image" onChange={handleChange} />
      </label>
      <label>
        Please Enter recipe steps:
        <textarea name="steps" onChange={handleChange} />
      </label>
      <br />
      <label>
        Please choose category:
        <CategoriesList handleChange={handleChange} />
      </label>
      
        <input type="submit" onClick={handleIngredients} disabled={disabled} />
      
    </form>
  );
};

export default observer(RecipeSubmitForm);
