import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import CategoriesList from "./components/categories/CategoriesList";
import RecipeList from "./components/recipes/RecipeList";
import AddIngredientForm from "./components/recipes/AddIngredientForm";
import NavBar from "./components/navBar/NavBar";
import Nav from "./components/navBar/Nav";
import MyRecipes from "./components/recipes/MyRecipes";
function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-recipes" element={<RecipeList />} />
        <Route path="//my-recipes" element={<MyRecipes />} />
        <Route path="/add-ingredient" element={<AddIngredientForm />} />
        {/* <Route
          path={"/member-detail/:memberSlug"}
          element={<MemberDetails />}
        /> */}
        {/* <Route path={"/book-detail/:bookSlug"} element={<BookDetails />} /> */}
        {/* <Route path={"/book-detail/:bookSlug"} element={<BookDetails />} /> */}
      </Routes>
    </div>
  );
}

export default App;
