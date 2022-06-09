import { Card, Form} from "react-bootstrap";


function IngredientItem({ ingredient,checkListAdd,checkListRemove }) {
  let checkedItems = []
  return (
    <>
    <Form>
    <div key={`default-checkbox`} className="mb-3">
      <Form.Check 
        type='checkbox'
        id={ingredient.id}
        label={ingredient.name}
        onClick={(event) => {
          if(event.target.checked)
          checkListAdd(ingredient)
          else
          checkListRemove(ingredient)
        }}
      />
    </div>
</Form>
    </>
  );
}

export default IngredientItem;
