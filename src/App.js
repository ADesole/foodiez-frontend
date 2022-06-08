import "./App.css";
import CategoriesList from "./components/categories/CategoriesList";
import NavBar from "./components/navBar/NavBar";

function App() {
  return (
    <>
      <img className="logo" src="./pics/logo.png" />
      <NavBar />
      <CategoriesList />
    </>
  );
}

export default App;
