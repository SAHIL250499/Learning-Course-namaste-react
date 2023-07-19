import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  //local state variable -super powerful variable
  //Whenever state variable changes the Component rerenders
  const [listOfRestaurant, setlistOfRestaurant] = useState([]);

  const [filteredRestaurant, setfilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.1802594&lng=72.86128&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    //Optional Chaining

    setlistOfRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    setfilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return <h1>You are Offline!! Please check internet connection</h1>;

  //Conditional Rendering

  const { loggedInUser, setUserName } = useContext(UserContext);

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body container mx-auto">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="search-box border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              //filter the restaurant cards and update the UI
              //searchText
              const filteredSearch = listOfRestaurant.filter((res) => {
                return res.data.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setfilteredRestaurant(filteredSearch);
              console.log(filteredSearch);
              console.log(searchText);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="filter-btn  px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              //filter logic

              const filteredList = listOfRestaurant.filter(
                (res) => res.data.avgRating > 4
              );

              setfilteredRestaurant(filteredList);

              console.log(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <label>Username</label>
          <input
            className="border border-black p-2"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          ></input>
        </div>
      </div>
      <div className="res-container flex flex-wrap">
        {filteredRestaurant.map((restaurant) => {
          return (
            <Link
              key={restaurant.data.id}
              to={"/restaurants/" + restaurant.data.id}
            >
              {restaurant.data.promoted ? (
                <RestaurantCardPromoted resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
