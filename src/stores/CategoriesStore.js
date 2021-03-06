import { makeAutoObservable, runInAction } from "mobx";
import axios from "axios";

class CategoriesStore {
  constructor() {
    makeAutoObservable(this);
    this.fetchCategories();
  }

  categories = [];

  fetchCategories = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/categories/allCategories"
      );
      runInAction(() => {
        this.categories = response.data;
      });
    } catch (error) {
      console.error(error);
    }
  };

  addCategory = async (newCategory) => {
    try {
      newCategory.name =
        newCategory.name.charAt(0).toUpperCase() + newCategory.name.slice(1);
      const response = await axios.post(
        "http://localhost:8000/categories/newCategory",
        newCategory
      );
      runInAction(() => {
        this.categories = [...this.categories, response.data];
        alert(`${newCategory.name} was added!`);
      });
    } catch (error) {
      console.error(error);
    }
  };
}

const categoriesStore = new CategoriesStore();
export default categoriesStore;
