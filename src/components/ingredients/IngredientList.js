import IngredientItem from "./IngredientItem";
import { observer } from "mobx-react";
// import ingredients from "../../ingredientData"
import ingredientsStore from "../../stores/IngredientsStore";
import AddIngredientForm from "./AddIngredientForm";
import RecipeSubmitForm from "../recipes/RecipeSubmitForm";
import { useState } from "react";

let checkedItems = [];

function IngredientList() {
  const [disabled, setDisabled] = useState(true);

  const checkListAdd = (checkItem) => {
    checkedItems.push(checkItem._id);
    if (checkedItems.length >= 1) setDisabled(false);
  };
  const checkListRemove = (checkItem) => {
    let foundIndex = checkedItems.findIndex(
      (object) => object._id === checkItem
    );
    checkedItems.splice(foundIndex, 1);
    if (checkedItems.length < 1) setDisabled(true);
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
        <label className="form-sub-title">Choose your ingredients</label>
        <div className="ingredient-list">{ingredientList}</div>
        <AddIngredientForm />
        <RecipeSubmitForm checkedItems={checkedItems} disabled={disabled} />
      </div>
    </>
  );
}
export default observer(IngredientList);
