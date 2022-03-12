import { useSelector, useDispatch } from "react-redux";
import RestaurantInput from "./RestaurantInput";
import Restaurants from "./Restaurants";
import { restaurantAdded } from "./restaurantsSlice";

function RestaurantsContainer() {
  const dispatch = useDispatch();
  const restaurants = useSelector((state) => state.restaurants.entities);
  const handleFormSubmit = (name) => {
    dispatch(restaurantAdded(name));
  };
  return (
    <div>
      <RestaurantInput onformSubmit={handleFormSubmit} />
      <Restaurants restaurants={restaurants} />
    </div>
  );
}

export default RestaurantsContainer;