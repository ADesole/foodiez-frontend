import recipeStore from "../../stores/recipeStore";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react";

function DetailedRecipe() {
  const { recipeSlug } = useParams();
  const recipe = recipeStore.Recipes.find(
    (recipe) => recipe.slug === recipeSlug
  );

  const recipeIngredients = Object.values(recipe.ingredients).map(
    (ingredient) => ingredient.name
  );
  console.log("ingredients console " + recipeIngredients);
  // console.log("ingredients console " + Object.values(recipeIngredients));
  const allSteps = recipe.steps.split(". ");

  const organizedSteps = allSteps.map((step) => <p>{`• ${step}`}</p>);

  return (
    <>
      <section className="recipe-details-card">
        <img
          className="recipe-details-image"
          alt={recipe.name}
          src={recipe.image}
        />

        <p className="recipe-details-title">{recipe.name}</p>
        <div className="recipe-details-content">
          <>
            <div style={{ display: "flex", alignItems: "center" }}>
              <p className="sub-title">⏰ Total time: </p>
              <p
                className="recipe-details-ingredirents"
                style={{ position: "relative", left: "10px" }}
              >
                {" "}
                {recipe.ttp} minutes
              </p>
            </div>

            <p className="sub-title">🥗 Ingredients:</p>
            <p className="recipe-details-ingredirents">
              {recipeIngredients.join(" - ")}
            </p>
          </>
          <>
            <p className="sub-title">📝 Steps:</p>
            {organizedSteps}
          </>
        </div>
      </section>
    </>
  );
}

export default observer(DetailedRecipe);
