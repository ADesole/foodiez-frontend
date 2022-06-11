import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import CategoriesList from "./components/categories/CategoriesList";
import RecipeList from "./components/recipes/RecipeList";
import AddIngredientForm from "./components/ingredients/AddIngredientForm";
import DetailedRecipe from "./components/recipes/DetailedRecipe";
import IngredientList from "./components/ingredients/IngredientList";
// import RecipeSubmitForm from "./components/recipes/RecipeSubmitForm";
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
        <Route
          path="/recipe-details/:recipeSlug"
          element={<DetailedRecipe />}
        />
        <Route path="/create-recipe" element={<IngredientList />} />
        {/* <Route
          path={"/category/:categorySlug"}
          element={<MemberDetails />}
        /> */}
        {/* <Route path={"/book-detail/:bookSlug"} element={<BookDetails />} /> */}
        {/* <Route path={"/book-detail/:bookSlug"} element={<BookDetails />} /> */}
      </Routes>
    </div>
  );
}

export default App;
