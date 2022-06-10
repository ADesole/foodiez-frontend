
import IngredientItem from "./IngredientItem";
import { observer } from "mobx-react";
// import ingredients from "../../ingredientData"
import ingredientsStore from "../../stores/IngredientsStore"
import AddIngredientForm from "./AddIngredientForm";
import RecipeSubmitForm from "../recipes/RecipeSubmitForm";
import { useState } from "react";


let checkedItems = []

function IngredientList() {
  const [disabled, setDisabled] = useState(true);
  


  const checkListAdd = checkItem => {
    checkedItems.push(checkItem._id)
    console.log(checkedItems)
    if(checkedItems.length >= 1)
      setDisabled(false)
  }

  const checkListRemove = checkItem => {
    let foundIndex = checkedItems.findIndex(object => object._id === checkItem)
    checkedItems.splice(foundIndex, 1);
    console.log(checkedItems)
    if(checkedItems.length < 1)
      setDisabled(true)

  }

let ingredientList = ingredientsStore.ingredients.map(ingredient => <IngredientItem ingredient={ingredient} checkListAdd={checkListAdd} checkListRemove={checkListRemove} />)
  return (
    <>
        <div>{ingredientList}</div>
        <AddIngredientForm />
        <RecipeSubmitForm checkedItems={checkedItems} disabled={disabled}/>
    </>
  );
}
export default observer(IngredientList);

