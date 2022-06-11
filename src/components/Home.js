import "../App.css";
import CategoriesList from "./categories/CategoriesList";
import AddIngredientForm from "./ingredients/AddIngredientForm";
import RecipeList from "./recipes/RecipeList";
import { observer } from "mobx-react";
import IngredientFilterList from "./ingredients/IngredientFilterList";
function Home() {
  return (
    <>
  <CategoriesList />
  {/* <IngredientFilterList /> */}
  </>
  )
}

export default observer(Home);
