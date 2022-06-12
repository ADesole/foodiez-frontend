import { Link } from "react-router-dom";

function RecipeItem({ recipe }) {
  return (
    <Link to={`/recipe-details/${recipe.slug}`}>
      <div className="home-recipe-card">
        <img
          className="home-recipe-image"
          alt={recipe.name}
          src={recipe.image}
        />
        <div className="home-recipe-name-container">
          <p className="home-recipe-name">{recipe.name}</p>
        </div>
      </div>
    </Link>
  );
}

export default RecipeItem;
