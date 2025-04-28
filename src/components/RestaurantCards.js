import { CDN_URL } from "../utils/constants";

const RestaurantCards = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, sla, avgRating } = resData?.info;

  return (
    <div className="restaurantcards">
      <img className="card-img" src={CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{cuisines.join(" , ")}</h4>
      <h5>{sla?.slaString}</h5>
      <h5>{avgRating}</h5>
    </div>
  );
};

export default RestaurantCards;
