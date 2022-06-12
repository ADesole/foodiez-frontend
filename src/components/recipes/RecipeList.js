import RecipeItem from "./RecipeItem";
import RecipesStore from "../../stores/recipeStore";
import { observer } from "mobx-react";
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
      <div style={{ display: "flex", flexDirection: "column" }}>
        {" "}
        <div
          style={{
            position: "relative",
            marginTop: "30px",
            marginLeft: "30px",
          }}
        >
          <IngredientFilterList />
        </div>
        <div className="recipe-list">{recipeList}</div>
      </div>
    </div>
  );
}
export default observer(RecipeList);
