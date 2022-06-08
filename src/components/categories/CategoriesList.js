//import { useState } from "react";
import CategoryItem from "./CategoryItem";
import { observer } from "mobx-react";
import categoriesStore from "../../stores/CategoriesStore";

const CategoriesList = () => {
  const displayCategories = categoriesStore.categories.map((category) => (
    <CategoryItem category={category} key={category._id} />
  ));
  return (
    <>
      <div>{displayCategories}</div>
    </>
  );
};

export default observer(CategoriesList);
