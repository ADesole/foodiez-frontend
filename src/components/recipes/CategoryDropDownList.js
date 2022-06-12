import { observer } from "mobx-react";
import categoriesStore from "../../stores/CategoriesStore";

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
