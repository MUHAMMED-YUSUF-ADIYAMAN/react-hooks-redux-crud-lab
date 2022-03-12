import React, { useState } from "react";

function ReviewInput({ restaurantId, onFormSubmit }) {
  const [comment, setComment] = useState("");

  function submitHandler(event) {
    event.preventDefault();
    onFormSubmit({ restaurantId, comment });
    setComment("");
  }

  return (
    <div>
      Review Input
      <form onSubmit={submitHandler}>
        <label>Comment
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        </label>
        <button>Add Review</button>
      </form>
    </div>
  );
}

export default ReviewInput;
