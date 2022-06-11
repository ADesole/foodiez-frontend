import { Card, Form} from "react-bootstrap";
import ingredientsStore from "../../stores/IngredientsStore";
import IngredientItem from "./IngredientItem";
import recipeStore from './../../stores/recipeStore';

let checkedItems = [];

function IngredientFilterList() {

  const checkListAdd = (checkItem) => {
    checkedItems.push(checkItem._id);
    console.log(checkedItems)
  };
  const checkListRemove = (checkItem) => {
    let foundIndex = checkedItems.findIndex(
      (object) => object === checkItem
    );
    checkedItems.splice(foundIndex, 1);
  };
  const handleSubmitFilterWith = () => {
    console.log(checkedItems)
    recipeStore.recipesWIngredient(checkedItems)
  }

  const handleSubmitFilterWithout = () => {
    console.log(checkedItems)
    recipeStore.recipesWoIngredient(checkedItems)
  }


  let ingredientList = ingredientsStore.ingredients.map((ingredient) => (
    <IngredientItem
      ingredient={ingredient}
      checkListAdd={checkListAdd}
      checkListRemove={checkListRemove}
    />
  ));
  return (
    <>
      {/* Make the ingredient-list-filter scrollable */}
      <div className="ingredient-list-filter">{ingredientList}  

      <button onClick={handleSubmitFilterWith}>
       Filter With
    </button>
    <button onClick={handleSubmitFilterWithout} >
    Filter Without
    </button></div>
     
    </>
  );
}

export default IngredientFilterList;
