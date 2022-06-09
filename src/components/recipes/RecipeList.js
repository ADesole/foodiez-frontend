
import RecipeItem from "./RecipeItem";
import RecipesStore from '../../stores/recipeStore';
import { observer } from "mobx-react";
import AuthStore from "../../stores/AuthStore"
import Recipes from './../../recipeData';

// get the recipe ids from user and compare them with recipe ids from all the recipes (recipeList)
function RecipeList() {
let recipeList
  if(AuthStore.user){
  recipeList = RecipesStore.Recipes.filter((recipe) => AuthStore.user._id === recipe.user ).map((recipe) => <RecipeItem recipe={recipe}/>);
  // console.log(RecipesStore.Recipes)
  }
  else {
  recipeList = RecipesStore.Recipes.map((recipe) => <RecipeItem recipe={recipe}/>);
}
  // console.log(recipeList);


  return (
        <div className="row justify-content-center">{recipeList}</div>
  );
}
export default observer(RecipeList);

