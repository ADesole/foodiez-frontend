//import { useState } from "react";
import CategoryItem from "./CategoryItem";
import { observer } from "mobx-react";
import categoriesStore from "../../stores/CategoriesStore";

const CategoriesList = () => {
  const displayCategories = categoriesStore.categories.map((category) => (
    <CategoryItem category={category} key={category._id} />
  ));
  return (
    <div className="categories-list">
      <div className="categories-header">
        <h2>categories</h2>
        <button className="plus-button">+</button>
      </div>
      <button className="category-item">all</button>
      <div>{displayCategories}</div>
    </div>
  );
};

export default observer(CategoriesList);
