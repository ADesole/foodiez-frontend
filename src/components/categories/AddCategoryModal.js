import { Modal, Button, InputGroup, Form } from "react-bootstrap";
import { useState } from "react";
import categoriesStore from "../../stores/CategoriesStore";

const AddCategoryModal = (props) => {
  const [category, setCategory] = useState({ name: "" });

  const handleChange = (event) => {
    setCategory({ ...category, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    categoriesStore.addCategory(category);
    props.closeModal();
    setCategory({ name: "" });
  };

  return (
    <Modal centered show={props.isOpen} onHide={props.closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Create a new category</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <InputGroup.Text>Category name</InputGroup.Text>
            <Form.Control type="text" name="name" onChange={handleChange} />
          </InputGroup>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-dark" onClick={handleSubmit}>
          Add category
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddCategoryModal;
