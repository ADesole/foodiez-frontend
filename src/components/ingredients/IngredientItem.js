import { Form } from "react-bootstrap";

function IngredientItem({ ingredient, checkListAdd, checkListRemove }) {
  return (
    <>
      <Form>
        <div key={`default-checkbox`} className="mb-3">
          <Form.Check
            type="checkbox"
            id={ingredient._id}
            label={ingredient.name}
            onClick={(event) => {
              if (event.target.checked) checkListAdd(ingredient);
              else checkListRemove(ingredient);
            }}
          />
        </div>
      </Form>
    </>
  );
}

export default IngredientItem;
