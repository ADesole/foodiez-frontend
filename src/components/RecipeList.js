
import RecipeItem from "./RecipeItem";
import Recipes from './../recipeData';

function RecipeList() {

    
  let recipeList = Recipes.map((recipe) => <RecipeItem recipe={recipe}/>);
  console.log(recipeList);
  return (
        <div className="row justify-content-center">{recipeList}</div>
  );
}

export default RecipeList;
