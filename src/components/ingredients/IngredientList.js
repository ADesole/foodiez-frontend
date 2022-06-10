
import IngredientItem from "./IngredientItem";
import { observer } from "mobx-react";
import ingredients from "../../ingredientData"
import { InputGroup,FormControl, Button } from "react-bootstrap";

// get the recipe ids from user and compare them with recipe ids from all the recipes (recipeList)
function IngredientList() {
  let checkedItems = []
  const checkListAdd = checkItem => {checkedItems.push(checkItem)
    console.log(checkedItems)
  }
  const checkListRemove = checkItem => {
    checkedItems.splice(checkedItems.findIndex(object => object.id === checkItem.id), 1);
    console.log(checkedItems)
  }
let ingredientList = ingredients.map(ingredient => <IngredientItem ingredient={ingredient} checkListAdd={checkListAdd} checkListRemove={checkListRemove} />)
  return (
        <div>{ingredientList}</div>

  );
}
export default observer(IngredientList);

