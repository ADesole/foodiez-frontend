import "../App.css";
import CategoriesList from "./categories/CategoriesList";
import AddIngredientForm from "./recipes/AddIngredientForm";

import { observer } from "mobx-react";
function Home() {
  return (
    <>
      <CategoriesList />
    </>
  );
}

export default observer(Home);
