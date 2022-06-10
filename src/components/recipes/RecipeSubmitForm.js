import React from "react";
import { useState } from "react";
import CategoriesList from "./CategoryDropDownList"
import recipeStore from "../../stores/recipeStore";
import { observer } from "mobx-react";

const RecipeSubmitForm = ({checkedItems,disabled}) => {
    const [input, setInput] = useState({});


    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInput(values => ({...values, [name]: value}))

    }
    const handleIngredients = () => {  
    setInput(values => ({...values, ["ingredients"]: checkedItems}))
    }
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(input)
    // uncommment below to send to database
    // recipeStore.createRecipe(input)
  };

  return (
        <form onSubmit={handleSubmit}>
          <label>Enter recipe name:
          <input 
            type="text" 
            name="name"  
            onChange={handleChange}
          />
          </label>
          <label>Please enter image url:
            <input 
              type="text" 
              name="image" 
            onChange={handleChange}
            />
            </label>
            <label>Please Enter recipe steps:
            <textarea  name="steps" onChange={handleChange} />
            </label>
            <br/>
            <label>Please choose category: 
            <CategoriesList handleChange={handleChange}/>
  </label>
            <input type="submit" onClick={handleIngredients} disabled={disabled} />
        </form>
  );
};

export default observer(RecipeSubmitForm);
