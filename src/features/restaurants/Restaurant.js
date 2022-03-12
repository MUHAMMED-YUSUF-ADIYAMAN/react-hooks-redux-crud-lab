import { useDispatch } from "react-redux";
import ReviewsContainer from "../reviews/ReviewsContainer";
import { restaurantRemoved } from "./restaurantsSlice";

function Restaurant({ restaurant }) {
  const dispatch = useDispatch();

  function handleDeleteRestaurant(id) {
    dispatch(restaurantRemoved(id));
  }

  return (
    <div>
      <li>
        {restaurant.name}
        <button onClick={() => handleDeleteRestaurant(restaurant.id)}>
          Delete Restaurant
        </button>
        <ReviewsContainer restaurantId={restaurant.id} />
      </li>
    </div>
  );
}

export default Restaurant;
