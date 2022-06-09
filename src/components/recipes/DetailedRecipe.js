import Recipes from '../../recipeData';



function DetailedRecipe({ recipe }) {
    return (
      <>
<section className="section">
  <img src={recipe.image} style={{ width: 500,
  height: 500}} />
  <div className="content">
    <h2 className="title">
    {recipe.name}
    </h2>
    <p className="paragraph">
    {recipe.ingredients.join(" - ")}
    </p>
  </div>
</section>
      </>
    );
  }
  
  export default DetailedRecipe;
  