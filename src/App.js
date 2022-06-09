import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import CategoriesList from "./components/categories/CategoriesList";
import RecipeList from "./components/recipes/RecipeList";
import NavBar from "./components/navBar/NavBar";
import SigninModal from "./components/user/SigninModal";
import SignupModal from "./components/user/SignupModal";
import SignoutButton from "./components/user/SignoutButton";
import authStore from "./stores/AuthStore";
import { observer } from "mobx-react";

function App() {
  return (
    <>
      <div>
        <img className="logo" src="./pics/logo.png" />
        {authStore.user ? (
          <>
            <h3 style={{ color: "black" }}>Hello {authStore.user.username} </h3>
            <SignoutButton />
          </>
        ) : (
          <>
            <SignupModal />
            <SigninModal />
          </>
        )}
      </div>

      <NavBar />
      <CategoriesList />
      <RecipeList />

    </>
  );
}

export default observer(App);
