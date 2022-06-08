import { Card, Navbar, Nav, NavDropdown } from "react-bootstrap";
import "../App.css";


function Recipe() {
  let Recipes = [
    {
      name: "Burger",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/4/47/Hamburger_%28black_bg%29.jpg",
      category: "unhealthy",
      ingredients: ["bun", "burger"],
    },
  ];
  return (
    <>
    <Card className="cardRecipe" style={{ width: '18rem' }}>
  <Card.Img variant="top" src={Recipes[0].image} />
  <Card.Body>
    <Card.Title>{Recipes[0].name}</Card.Title>
  </Card.Body>
  </Card>
    </>
  );
}
export default Recipe;
