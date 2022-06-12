import "../App.css";
import CategoriesList from "./categories/CategoriesList";
import { observer } from "mobx-react";
//import IngredientFilterList from "./ingredients/IngredientFilterList";

function Home() {
  return (
    <>
      <CategoriesList />
      {/* <IngredientFilterList /> */}
    </>
  );
}

export default observer(Home);
