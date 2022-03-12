import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import ReviewInput from "./ReviewInput";
import Reviews from "./Reviews";
import { reviewAdded } from "./reviewsSlice";
function ReviewsContainer({ restaurantId }) {
  const dispatch = useDispatch();
  const reviews = useSelector((state) => state.reviews.entities);

  const handleFormSubmit = (review) => {
    dispatch(reviewAdded(review));
  };
  return (
    <div>
      <ReviewInput
        restaurantId={restaurantId}
        onFormSubmit={handleFormSubmit}
      />
      <Reviews
        reviews={reviews.filter(
          (review) => review.restaurantId === restaurantId
        )}
      />
    </div>
  );
}

export default ReviewsContainer;
