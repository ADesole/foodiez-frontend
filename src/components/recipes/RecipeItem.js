import { Card } from "react-bootstrap";

function RecipeItem({ recipe }) {
  const extractIngredients = recipe.ingredients.map(
    (ingredient) => ingredient.name
  );
  return (
    <>
      <Card className="cardRecipe" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={recipe.image} />
        <Card.Body>
          <Card.Title>{recipe.name}</Card.Title>
          <Card.Text>{extractIngredients.join(" - ")}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default RecipeItem;
