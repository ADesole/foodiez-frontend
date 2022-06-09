import recipeStore from "../../stores/recipeStore";
import { observer } from "mobx-react";

const CategoryItem = ({ category }) => {
  // console.log("category object check name  type     " + typeof category.name);
  return (
    <>
      <button
        onClick={() => recipeStore.filterRecipes(category.name)}
        className="category-item"
      >
        {category.name}
      </button>
    </>
  );
};

export default observer(CategoryItem);
