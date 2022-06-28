import React from "react";

function PizzaForm({ pizzaInfo, setPizzaInfo, handleSubmit }) {

  const {topping, size, vegetarian } = pizzaInfo


  function handleToppingChange(event) {
    setPizzaInfo({...pizzaInfo, topping: event.target.value})
  }

  function handleSizeChange(event) {
    setPizzaInfo({...pizzaInfo, size: event.target.value})
  }

  function handleDietChange(event) {
    setPizzaInfo({...pizzaInfo, vegetarian: !vegetarian})
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            value={topping}
            onChange={handleToppingChange}
          />
        </div>
        <div className="col">
          <select className="form-control" name="size" value={size} onChange={handleSizeChange}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
              checked= {vegetarian ? 'true' : null}
              onChange={handleDietChange}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
              checked= {vegetarian ? null : 'true'}
              onChange={handleDietChange}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
