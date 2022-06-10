
import { observer } from "mobx-react";
import categoriesStore from "../../stores/CategoriesStore";
import recipeStore from "../../stores/recipeStore";
import authstore from "../../stores/AuthStore";

const CategoriesList = ({ handleChange }) => {
  const displayCategories = categoriesStore.categories.map((category) => (
    <option value={`${category.name}`}>{category.name}</option>
  ));

  return (
    <select name="category" onChange={handleChange}>
    {displayCategories}
    </select>
  );
};

export default observer(CategoriesList);
