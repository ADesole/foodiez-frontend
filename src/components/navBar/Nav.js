import { observer } from "mobx-react";
import { NavLink } from "react-router-dom";
import authStore from "../../stores/AuthStore";
import SignoutButton from "../user/SignoutButton";
import SignInNavBar from "./SignInNavBar";
import SignupModal from "../user/SignupModal";
import SigninModal from "../user/SigninModal";
import NavBar from "./NavBar";
const Nav = () => {
  return (
    <div>
      {authStore.user ? (
        <div>
          <div className="pageHeader">
            <NavLink to="/">
              <img className="logo" src="./pics/logo.png" />
            </NavLink>
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
              <NavLink to="/">
                <SignoutButton />
              </NavLink>
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
  );
};
export default observer(Nav);
