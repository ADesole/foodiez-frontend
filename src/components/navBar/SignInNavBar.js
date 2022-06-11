import { NavLink } from "react-router-dom";

const SignInNavBar = () => {
  return (
    <div className="main-nav">
      <NavLink to="/all-recipes">
        <button className="all-or-mine">All</button>
      </NavLink>

      <NavLink to="/my-recipes">
        <button className="all-or-mine">My recipes</button>
      </NavLink>
      <NavLink to="/create-recipe">
        <button className="all-or-mine">Create recipe</button>
      </NavLink>
    </div>
  );
};
export default SignInNavBar;
