import AddCategoryButton from "./AddCategoryButton";
import CategoryItem from "./CategoryItem";
import { observer } from "mobx-react";
import categoriesStore from "../../stores/CategoriesStore";
import recipeStore from "../../stores/recipeStore";
import authstore from "../../stores/AuthStore";

const CategoriesList = () => {
  const displayCategories = categoriesStore.categories.map((category) => (
    <CategoryItem category={category} key={category._id} />
  ));

  return (
    <div className="categories-list">
      <div className="categories-header">
        <h2>categories</h2>
        {authstore.user ? <AddCategoryButton /> : <></>}
      </div>
      <button onClick={recipeStore.allRecipes} className="category-item">
        All
      </button>
      <div>{displayCategories}</div>
    </div>
  );
};

export default observer(CategoriesList);
