import IngredientItem from "./IngredientItem";
import { observer } from "mobx-react";
// import ingredients from "../../ingredientData"
import ingredientsStore from "../../stores/IngredientsStore";
import AddIngredientForm from "./AddIngredientForm";
import RecipeSubmitForm from "../recipes/RecipeSubmitForm";
import { useState } from "react";

function IngredientList() {
  const [disabled, setDisabled] = useState(false);

  let checkedItems = [];

  const checkListAdd = (checkItem) => {
    checkedItems.push(checkItem._id);
    console.log(checkedItems);
    // If I uncomment the code below the disable works but for some reason the second push overrides the first one after that everything works perfect I don't know why
    // if(checkedItems.length >= 1)
    //   setDisabled(false)
  };
  const checkListRemove = (checkItem) => {
    let foundIndex = checkedItems.findIndex(
      (object) => object._id === checkItem
    );
    checkedItems.splice(foundIndex, 1);
    console.log(checkedItems);
    // Same as above
    // if(checkedItems.length < 1)
    //   setDisabled(true)
  };
  //

  let ingredientList = ingredientsStore.ingredients.map((ingredient) => (
    <IngredientItem
      ingredient={ingredient}
      checkListAdd={checkListAdd}
      checkListRemove={checkListRemove}
    />
  ));
  return (
    <>
      <div style={{ margin: "30px" }}>
        <h3>Choose your ingredients</h3>
        <div className="ingredient-list">{ingredientList}</div>
        <AddIngredientForm />
        <RecipeSubmitForm checkedItems={checkedItems} disabled={disabled} />
      </div>
    </>
  );
}
export default observer(IngredientList);
