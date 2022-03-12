import React from "react";
import { useState } from "react/cjs/react.development";

function RestaurantInput({ onformSubmit }) {
  const [name, setName] = useState("");
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onformSubmit(name);
          setName("");
        }}
      >
        <p>
          <label htmlFor="name">Name </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </p>
        <button>Add Restaurant</button>
      </form>
    </div>
  );
}

export default RestaurantInput;