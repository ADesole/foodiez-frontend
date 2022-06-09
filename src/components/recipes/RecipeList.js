import RecipeItem from "./RecipeItem";
import RecipesStore from "../../stores/recipeStore";
import { observer } from "mobx-react";
import AuthStore from "../../stores/AuthStore";
import Home from "../Home";

// get the recipe ids from user and compare them with recipe ids from all the recipes (recipeList)
function RecipeList() {
  let recipeList;
  if (AuthStore.user) {
    recipeList = RecipesStore.Recipes.filter(
      (recipe) => AuthStore.user._id === recipe.user
    ).map((recipe) => <RecipeItem recipe={recipe} />);
    console.log(RecipesStore.Recipes);
  } else {
    recipeList = RecipesStore.Recipes.map((recipe) => (
      <RecipeItem recipe={recipe} />
    ));
  }
<<<<<<< HEAD
  else {
  recipeList = RecipesStore.Recipes.map((recipe) => <RecipeItem recipe={recipe}/>);
}
  console.log(recipeList);
=======
  console.log(recipeList);

  recipeList = RecipesStore.Recipes.map((recipe) => (
    <RecipeItem recipe={recipe} />
  ));

  // console.log(recipeList);
>>>>>>> 8ec5e9a17390c2dc23bcd0dfc4f2a44d13a9e1d3

  // return <div className="row justify-content-center">{recipeList}</div>;
  return (
    <div style={{ display: "flex", }}>
      <Home />
      <div className="row justify-content-center">{recipeList}</div>
    </div>
  );
}
export default observer(RecipeList);
