import { Link } from "react-router-dom";
function RecipeItem({ recipe }) {
  const extractIngredients = recipe.ingredients.map(
    (ingredient) => ingredient.name
  );
  return (
    <Link to={`/recipe-details/${recipe.slug}`}>
      <div className="recipe-card">
        <img className="recipe-image" src={recipe.image} />
        <div className="recipe-name-container">
          <p className="recipe-name">{recipe.name}</p>
        </div>
        {/* <div>{extractIngredients.join(" - ")}</div> */}
      </div>
    </Link>
  );
}

export default RecipeItem;
