import { NavLink } from "react-router-dom";
import recipeStore from "../stores/recipeStore";

import RecipeItem from "./recipes/homepageRecipeItem";

const HomePage = () => {
  let list = recipeStore.Recipes.slice(-3);
  let last3Recipes = list.map((recipe) => <RecipeItem recipe={recipe} />);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        marginTop: "30px",
        marginLeft: "50px",
      }}
    >
      <h1
        style={{ color: "#04AA6D", fontWeight: "bold", marginBottom: "30px" }}
      >
        Try our most recent recipes
      </h1>
      <div
        style={{
          backgroundColor: "#eaeaea6a",
          width: "1180px",
          height: "390px",
          borderRadius: "30px",
        }}
      >
        <div
          style={{
            marginTop: "50px",
            marginLeft: "30px",
            display: "grid",
            gridTemplateColumns: "auto auto auto",
            columnGap: "50px",
          }}
        >
          {" "}
          {last3Recipes}
        </div>
      </div>
    </div>
  );
};
export default HomePage;
