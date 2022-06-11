import RecipeItem from "./RecipeItem";
import RecipesStore from "../../stores/recipeStore";
import { observer } from "mobx-react";
import AuthStore from "../../stores/AuthStore";
import Home from "../Home";
import IngredientFilterList from "../ingredients/IngredientFilterList";


// get the recipe ids from user and compare them with recipe ids from all the recipes (recipeList)
function RecipeList() {
  let recipeList;

  recipeList = RecipesStore.filteredReceipes.map((recipe) => (
    <RecipeItem recipe={recipe} />
  ));

  // console.log(recipeList);

  return (
    <div style={{ display: "flex" }}>
      <Home />
      <div className="recipe-list">{recipeList}</div>
   <IngredientFilterList />

    </div>
  );
}
export default observer(RecipeList);
