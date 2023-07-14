import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";


const Body=()=>{

    //local state variable -super powerful variable

    const [listOfRestaurant,setlistOfRestaurant]=useState(resList);


    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                    //filter logic

                    

                    const filteredList=listOfRestaurant.filter((res)=>res.data.avgRating > 4);

                    setlistOfRestaurant(filteredList);

                    console.log(filteredList);

                    }}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {
                    listOfRestaurant.map((restaurant)=>{
                        return <RestaurantCard key={restaurant.data.id} resData={restaurant}/>
                    })

                }
                

            </div>
        </div>
    )
};

export default Body;