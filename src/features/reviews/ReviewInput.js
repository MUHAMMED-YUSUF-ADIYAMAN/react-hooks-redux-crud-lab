import React, { useState } from "react";

function ReviewInput({ restaurantId, onFormSubmit }) {
  const [comment, setComment] = useState("");

  function formSubmit(event) {
    event.preventDefault();
    onFormSubmit({ restaurantId, comment });
    setComment("");
  }

  return (
    <div>
      Review Input
      <form onSubmit={formSubmit}>
        <label>Comment</label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button>Add Review</button>
      </form>
    </div>
  );
}

export default ReviewInput;
