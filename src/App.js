//import logo from './logo.svg';
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import CategoriesList from "./components/categories/CategoriesList";
import SigninModal from "./components/user/SigninModal";
import SignupModal from "./components/user/SignupModal";
import SignoutButton from "./components/user/SignoutButton";
import authStore from "./stores/AuthStore";
import { observer } from "mobx-react";
function App() {
  return (
    <>
      {authStore.user ? (
        <>
        <h3 style={{ color: "black" }}>Hello {authStore.user.username} </h3>
        <SignoutButton/>
        </>
      ) : (
        <>
          <SignupModal />
          <SigninModal />
        </>
      )}

      <CategoriesList />
    </>
  );
}

export default observer(App);

//<div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.js</code> and save to reload.
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header>
// </div>
