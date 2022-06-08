import { Col, Container, Row } from "react-bootstrap";
import Recipes from './../recipeData';


function DetailedRecipe() {
    return (
      <>
<section className="section">
  <img src={Recipes[0].image} style={{ width: 500,
  height: 500}} />
  <div className="content">
    <h2 className="title">
    {Recipes[0].name}
    </h2>
    <p className="paragraph">
    {Recipes[0].ingredients.join(" - ")}
    </p>
  </div>
</section>
      </>
    );
  }
  
  export default DetailedRecipe;
  