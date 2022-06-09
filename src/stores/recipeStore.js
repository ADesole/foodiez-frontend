import instance from "./instance";
import { makeAutoObservable, runInAction } from "mobx";
class RecipeStore {
  constructor() {
    makeAutoObservable(this);
    this.fetchRecipes();
  }
  Recipes = [];
  filteredReceipes = [];

  fetchRecipes = async () => {
    try {
      const response = await instance.get("/recipes/recipes");
      this.Recipes = response.data;
      this.filteredReceipes = this.Recipes;
      // console.log("dataaaaaaaaaaaaaaa" + this.filteredReceipes);
      console.log(response.data);
    } catch (error) {
      console.log("RecipeStore -> fetchRecipes -> error", error);
    }
  };
  allRecipes = () => {
    this.filteredReceipes = this.Recipes;
  };
  //call the function using onclick
  filterRecipes = (filterCategory) => {
    console.log("filtered list before     " + this.filteredReceipes);
    this.filteredReceipes = this.Recipes.filter(
      (recipe) => recipe.category === filterCategory
    );
    // this.Recipes.forEach((recipe) =>
    // console.log("saved " + recipe.category + " given " + filterCategory)
    // );
    console.log("soup check " + this.Recipes[2].category);
    console.log("filtered list after     " + this.filteredReceipes);
  };
}
const recipeStore = new RecipeStore();
recipeStore.fetchRecipes();

export default recipeStore;
