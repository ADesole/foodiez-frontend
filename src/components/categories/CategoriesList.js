import { useState } from "react";
import CategoriesStore from "../stores/CategoriesStore";
import CategoryItem from "./CategoryItem";

const CategoriesList = () => {
  const [allCategories, setAllCategories] = useState(
    CategoriesStore.categories
  );

  const displayCategories = allCategories.map((category) => (
    <CategoryItem category={category} key={category._id} />
  ));
  return (
    <>
      <div>{displayCategories}</div>
    </>
  );
};

export default CategoriesList;
