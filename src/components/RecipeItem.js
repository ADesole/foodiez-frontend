import { Card} from "react-bootstrap";


function RecipeItem({ recipe }) {
  return (
    <>
    <Card className="cardRecipe" style={{ width: '18rem' }}>
  <Card.Img variant="top" src={recipe.image} />
  <Card.Body>
    <Card.Title>{recipe.name}</Card.Title>
  </Card.Body>
  </Card>
    </>
  );
}

export default RecipeItem;
