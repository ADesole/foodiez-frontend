import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="main-nav">
      <NavLink to="/">
        <button className="all-or-mine">Home</button>
      </NavLink>
    </div>
  );
};
export default NavBar;
