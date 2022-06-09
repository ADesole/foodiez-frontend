import "../App.css";
import CategoriesList from "./categories/CategoriesList";

import { observer } from "mobx-react";
function Home() {
  return (
    <>
      <CategoriesList />
    </>
  );
}

export default observer(Home);
