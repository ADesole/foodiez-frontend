import RecipeItem from "./RecipeItem";
import RecipesStore from "../../stores/recipeStore";
import { observer } from "mobx-react";
import AuthStore from "../../stores/AuthStore";
import Home from "../Home";

// get the recipe ids from user and compare them with recipe ids from all the recipes (recipeList)
function RecipeList() {
  let recipeList;
  if (AuthStore.user) {
    recipeList = RecipesStore.filteredReceipes.filter(
      (recipe) => AuthStore.user._id === recipe.user
    ).map((recipe) => <RecipeItem recipe={recipe} />);
  }

  return (
    <div style={{ display: "flex" }}>
      <Home />
      <div className="recipe-list">{recipeList}</div>
    </div>
  );
}
export default observer(RecipeList);
