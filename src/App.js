import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import CategoriesList from "./components/categories/CategoriesList";
import RecipeList from "./components/recipes/RecipeList";
import AddIngredientForm from "./components/ingredients/AddIngredientForm";
import RecipeDetailed from "./components/recipes/DetailedRecipe";
import IngredientList from "./components/ingredients/IngredientList";
//import AddIngredientButton from "./components/recipes/AddIngredientButton";
import NavBar from "./components/navBar/NavBar";
import Nav from "./components/navBar/Nav";
import MyRecipes from "./components/recipes/MyRecipes";
function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/all-recipes" element={<RecipeList />} />
        <Route path="/add-ingredient" element={<AddIngredientForm />} />
        <Route path="/my-recipes" element={<MyRecipes />} />
        {/* <Route
          path={"/category/:categorySlug"}
          element={<MemberDetails />}
        /> */}
        {/* <Route path={"/book-detail/:bookSlug"} element={<BookDetails />} /> */}
        {/* <Route path={"/book-detail/:bookSlug"} element={<BookDetails />} /> */}
      </Routes>
      <IngredientList />


    </div>
  );
}

export default App;
