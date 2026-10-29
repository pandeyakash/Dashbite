import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import RESTAURANTS from "../utils/mockData";
import Shimmer from "./Shimmer";

const Body = () => {
    const [searchText, setSearchText] = useState("");
    const [restaurants, setRestaurants] = useState([]);

    const query = searchText.trim().toLowerCase();

    const filteredRestaurants = restaurants.filter((res) =>
        res.info.name.toLowerCase().includes(query) ||
        res.info.cuisines.some((c) => c.toLowerCase().includes(query))
    );

    const handleTopRatedClick = (e) => {
        const topRatedRestaurants = restaurants.filter((res) => res.info.avgRating > 4.5);
        setRestaurants([...topRatedRestaurants]);
        console.log("Top Rated button clicked", topRatedRestaurants);
    }

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async() => {
        try {
            const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.886317007129&lng=77.64653451740743&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            const data = await response.json();
            console.log("Fetched data:", data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setRestaurants(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    return filteredRestaurants.length === 0 ? (
        <Shimmer />
    ) : (   
        <div className="body">
            <div className="search-filter-container">
                <div className="search">
                    <span className="search-icon">⌕</span>
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Search for restaurants or cuisines"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    {searchText && (
                        <button className="search-clear" onClick={() => setSearchText("")} aria-label="Clear search">
                            ✕
                        </button>
                    )}
                </div>
                
                <div className="filter"> 
                    <button className="filter-btn" onClick={handleTopRatedClick}>Top Rated</button>
                </div>
            </div>

            

            <h2 className="section-title">
                {query ? `Results for "${searchText.trim()}"` : "Restaurants near you"}
            </h2>

            {filteredRestaurants.length > 0 ? (
                <div className="res-container">
                    {filteredRestaurants.map((res, index) => (
                        <RestaurantCard key={res?.info?.id} restaurant={res?.info} index={index} />
                    ))}
                </div>
            ) : (
                <p className="empty-state">No restaurants match your search.</p>
            )}
        </div>
    )
}

export default Body;