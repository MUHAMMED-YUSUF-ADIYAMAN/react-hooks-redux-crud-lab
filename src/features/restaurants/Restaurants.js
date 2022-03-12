import React from "react";
import Restaurant from "./Restaurant";

function Restaurants({ restaurants }) {
  return (
    <ul>
     <b  style={{marginBottom:""}}>Restaurants Component</b> 
      <br></br>
      {restaurants.map((restaurant) => (
        <Restaurant key={restaurant.id} restaurant={restaurant} />
      ))}
    </ul>
  );
}

export default Restaurants;
