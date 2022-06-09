
import instance from "./instance";

class RecipeStore {
  constructor() {
  }
  Recipes = [];
  
  fetchRecipes = async () => {
    try {
      const response = await instance.get("/recipes/recipes");
      this.Recipes = response.data;
      console.log(response.data)
    } catch (error) {
      console.log("RecipeStore -> fetchRecipes -> error", error);
    }
  };


}
const recipeStore = new RecipeStore();
recipeStore.fetchRecipes();

export default recipeStore;
