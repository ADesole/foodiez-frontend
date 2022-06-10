import { NavLink } from "react-router-dom";

const SignInNavBar = () => {
  return (
    <div className="main-nav">
      <NavLink to="/all-recipes">
        <button className="all-or-mine">all</button>
      </NavLink>

      <NavLink to="/my-recipes">
        <button className="all-or-mine">my recipes</button>
      </NavLink>
    </div>
  );
};
export default SignInNavBar;
