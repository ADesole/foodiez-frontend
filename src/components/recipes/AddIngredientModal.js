import { Modal, Button, InputGroup, Form } from "react-bootstrap";
import { useState } from "react";
import ingredientsStore from "../../stores/ingredientsStore";

const AddIngredientModal = (props) => {
  const [ingredient, setIngredient] = useState({ name: "" });

  const handleChange = (event) => {
    setIngredient({ ...ingredient, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    ingredientsStore.addIngredients(ingredient);
    props.closeModal();
    setIngredient({ name: "" });
  };

  return (
    <Modal centered show={props.isOpen} onHide={props.closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Create a new ingredient</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <InputGroup.Text>ingredient name</InputGroup.Text>
            <Form.Control type="text" name="name" onChange={handleChange} />
          </InputGroup>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-dark" onClick={handleSubmit}>
          Add ingredient
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddIngredientModal;
