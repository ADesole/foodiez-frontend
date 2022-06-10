import React from "react";
import { useState } from "react";
import ingredientsStore from "../../stores/IngredientsStore";

const AddIngredientForm = () => {
  const [ingredient, setIngredient] = useState({ name: "" });

  const handleChange = (event) => {
    setIngredient({ ...ingredient, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    ingredientsStore.addIngredients(ingredient);
    setIngredient({ name: "" });
  };

  return (
    <div className="container">
      <form action="action_page.php">
        <div className="row">
          <div className="col-25">
            <label>ingredient</label>
          </div>
          <div className="col-75">
            <input
              onChange={handleChange}
              type="text"
              id="fname"
              name="name"
              placeholder="Your name.."
            />
          </div>
        </div>
        {/* <div className="row">
          <div className="col-25">
            <label>Last Name</label>
          </div>
          <div className="col-75">
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Your last name.."
            />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label>Country</label>
          </div>
          <div className="col-75">
            <select id="country" name="country">
              <option value="australia">Australia</option>
              <option value="canada">Canada</option>
              <option value="usa">USA</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label>Subject</label>
          </div>
          <div className="col-75">
            {/* <textarea
              id="subject"
              name="subject"
              placeholder="Write something.."
              style="height:200px"
            ></textarea>
          </div>
        </div>*/}
        <div className="row">
          <input type="submit" onClick={handleSubmit} value="add ingredient" />
        </div>
      </form>
    </div>
  );
};

export default AddIngredientForm;
