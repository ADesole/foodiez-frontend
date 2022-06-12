import ingredientsStore from "../../stores/IngredientsStore";
import IngredientItem from "./IngredientItem";
import recipeStore from "./../../stores/recipeStore";
import { observer } from "mobx-react";
import { MultiSelect } from "react-multi-select-component";
import { useState } from "react";

let checkedItems = [];

function IngredientFilterList() {
  const [selected, setSelected] = useState([]);
  let ingredientListDrop = ingredientsStore.ingredients.map((ingredient) => (
    { label: ingredient.name, value: ingredient._id }
  ));

  // const checkListAdd = (checkItem) => {
  //   checkedItems.push(checkItem._id);
  //   console.log(checkedItems);
  // };
  // const checkListRemove = (checkItem) => {
  //   let foundIndex = checkedItems.findIndex((object) => object === checkItem);
  //   checkedItems.splice(foundIndex, 1);
  // };


  const handleSubmitFilterWith = () => {
    checkedItems = selected.map(ingredient => ingredient.value)
    console.log(checkedItems);
    recipeStore.recipesWIngredient(checkedItems);
  };

  const handleSubmitFilterWithout = () => {
    checkedItems = selected.map(ingredient => ingredient.value)
    console.log(checkedItems);
    recipeStore.recipesWoIngredient(checkedItems);
  };

  // let ingredientList = ingredientsStore.ingredients.map((ingredient) => (
  //   <IngredientItem
  //     ingredient={ingredient}
  //     checkListAdd={checkListAdd}
  //     checkListRemove={checkListRemove}
  //   />
  // ));

  
  return (
    <>
      {/* Make the ingredient-list-filter scrollable */}
      <div className="Ingredient-filter-container">
        <div
          style={{ marginRight: "20px", fontSize: "20px", fontWeight: "bold" }}
        >
          Filter by ingredients:{" "}
        </div>
        {/* <div className="ingredient-list-filter">{ingredientList}</div> */}
        <pre>{JSON.stringify(selected.name)}</pre>
      <MultiSelect
        options={ingredientListDrop}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
        />
        <div className="Button-container">
          <button
            className="Ingredient-filter-button"
            style={{ marginLeft: "10px" }}
            onClick={handleSubmitFilterWith}
          >
            With
          </button>
          <button
            className="Ingredient-filter-button"
            onClick={handleSubmitFilterWithout}
          >
            Without
          </button>
        </div>
      </div>
    </>
  );
}

export default observer(IngredientFilterList);
