import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/navBar/NavBar";
import Nav from "./components/navBar/Nav";
import RecipeList from "./components/RecipeList";
function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-recipes" element={<RecipeList/>} />
        {/* <Route path="/books-page" element={} /> */}
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
