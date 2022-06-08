import { observable, makeAutoObservable } from "mobx";
import axios from "axios";

//const MAIN_URL = "http://localhost:8000";

class CategoriesStore {
  constructor() {
    makeAutoObservable(this);
  }

  categories = null;

  fetchCategories = async () => {
    try {
      await axios.get("http://localhost:8000/categories");
    } catch (error) {
      console.log(error);
    }
  };
}

const categoriesStore = new CategoriesStore();
export default categoriesStore;
