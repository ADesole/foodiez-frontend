import { Link } from "react-router-dom";

function RecipeItem({ recipe }) {
  return (
    <Link to={`/recipe-details/${recipe.slug}`}>
      <div className="recipe-card">
        <img className="recipe-image" alt={recipe.name} src={recipe.image} />
        <div className="recipe-name-container">
          <p className="recipe-name">{recipe.name}</p>
        </div>
      </div>
    </Link>
  );
}

export default RecipeItem;
