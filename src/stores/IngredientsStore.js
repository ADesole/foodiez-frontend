import { makeAutoObservable, runInAction } from "mobx";
import axios from "axios";

class IngredientsStore {
  constructor() {
    makeAutoObservable(this);
    this.fetchIngredients();
  }

  ingredients = [];

  fetchIngredients = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/ingredients/ingredients"
      );
      runInAction(() => {
        this.ingredients = response.data;
      });
    } catch (error) {
      console.error(error);
    }
  };

  addIngredients = async (newIngredient) => {
    try {
      newIngredient.name =
        newIngredient.name.charAt(0).toUpperCase() +
        newIngredient.name.slice(1).toLowerCase();
      const response = await axios.post(
        "http://localhost:8000/ingredients/createIngredient",
        newIngredient
      );
      runInAction(() => {
        this.ingredients = [...this.ingredients, response.data];
        alert(`${newIngredient.name} was added!`);
      });
    } catch (error) {
      alert(`Sorry, ${newIngredient.name} is already there!`);
    }
  };
}

const ingredientsStore = new IngredientsStore();

export default ingredientsStore;
