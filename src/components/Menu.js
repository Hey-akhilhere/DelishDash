import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { CDN_URL, MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";

const Menu = () => {
  const [menuData, setMenuData] = useState(null);
  const [openIdx, setOpenIdx] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu(MENU_API + resId);
  }, []);

  const toggleFactory = (idx) => {
    setOpenIdx((prevIdx) => (prevIdx === idx ? null : idx));
  };
  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setMenuData(json?.data);
  };
  if (menuData === null) {
    return <Shimmer />;
  }

  const { name, cuisines, avgRating, costForTwoMessage } =
    menuData?.cards[2]?.card?.card?.info;

  const itemCategories = menuData?.cards
    .find((c) => c.groupedCard)
    ?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (card) =>
        card?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )
    .map((card) => ({
      title: card.card.card.title,
      itemCards: card.card.card.itemCards,
    }));

  return (
    <div className="resname">
      <h1>{name}</h1>
      <div className="resdetails">
        <div className="res">
          <h2>⭐{avgRating}</h2>
          <h2>{costForTwoMessage}</h2>
        </div>
        <h3>{cuisines.join(" , ")}</h3>

        <h2>Menu</h2>
      </div>
      <div>
        <ul>
          {itemCategories.map((category, idx) => (
            <li key={idx}>
              <button onClick={() => toggleFactory(idx)}>
                {category.title} {openIdx === idx ? "▲" : "▼"}
              </button>

              {openIdx === idx && (
                <ul className="item-list">
                  {category.itemCards.map((itemCard) => (
                    <li className="item" key={itemCard.card.info.id}>
                      <div className="item-info">
                        <span className="item-name">
                          {itemCard.card.info.name}
                          <h6>₹{itemCard.card.info.price / 100} </h6>
                        </span>
                        <img
                          className="item-img"
                          src={CDN_URL + itemCard.card.info.imageId}
                          alt={itemCard.card.info.name}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
