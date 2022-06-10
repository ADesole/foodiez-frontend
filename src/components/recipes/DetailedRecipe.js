import Recipes from "../../recipeData";

function DetailedRecipe() {
  const allSteps = Recipes[0].steps.split("-");

  const organizedSteps = allSteps.map((step) => <p>{`• ${step}`}</p>);

  return (
    <>
      <section className="recipe-details-card">
        <img className="recipe-details-image" src={Recipes[0].image} />
        <div className="recipe-details-content">
          <p className="recipe-details-title">{Recipes[0].name}</p>
          <>
            <p className="sub-title">ingredients:</p>
            <p className="recipe-details-ingredirents">
              {Recipes[0].ingredients.join(" - ")}
            </p>
          </>
          <>
            <p className="sub-title">steps:</p>
            {organizedSteps}
          </>
        </div>
      </section>
    </>
  );
}

export default DetailedRecipe;
