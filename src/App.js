import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import CategoriesList from "./components/categories/CategoriesList";
import NavBar from "./components/navBar/NavBar";
import SignInNavBar from "./components/navBar/SignInNavBar";
import SigninModal from "./components/user/SigninModal";
import SignupModal from "./components/user/SignupModal";
import SignoutButton from "./components/user/SignoutButton";
import authStore from "./stores/AuthStore";
import { observer } from "mobx-react";

function App() {
  return (
    <>
      <div>
        {authStore.user ? (
          <div>
            <div className="pageHeader">
              <img className="logo" src="./pics/logo.png" />
              <div className="profile">
                <h3
                  style={{
                    color: "black",
                    position: "relative",
                    // top: "20px",
                    // left: "10px",
                    fontSize: "20px",
                  }}
                >
                  Hello {authStore.user.username}{" "}
                </h3>
                <SignoutButton />
              </div>
            </div>
            <SignInNavBar />
          </div>
        ) : (
          <div>
            <div className="pageHeader">
              <img className="logo" src="./pics/logo.png" />
              <div>
                <SignupModal />
                <SigninModal />
              </div>
            </div>
            <NavBar />
          </div>
        )}
      </div>

      {/* <NavBar /> */}
      <CategoriesList />
    </>
  );
}

export default observer(App);
