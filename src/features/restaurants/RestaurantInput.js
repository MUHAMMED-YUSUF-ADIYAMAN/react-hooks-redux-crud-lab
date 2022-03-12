import React from "react";
import { useState } from "react/cjs/react.development";

function RestaurantInput({ onformSubmit }) {
  const [name, setName] = useState("");
  function submitHandler(e) {
    e.preventDefault();
    onformSubmit(name);
    setName(``);
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>
          Name
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <button>Add Restaurant</button>
      </form>
    </div>
  );
}

export default RestaurantInput;
