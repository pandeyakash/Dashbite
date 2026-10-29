import { baseUrl } from "../utils/constants";

const RestaurantCard = ({ restaurant, index }) => {
    const { name, cuisines, avgRating, sla, costForTwo, cloudinaryImageId } = restaurant;

    return (
        <div className="res-card" style={{ "--delay": `${index * 60}ms` }}>
            <div className="res-card-img">
                <img src={`${baseUrl}/${cloudinaryImageId}`} alt={name} loading="lazy" />
            </div>
            <div className="res-card-info">
                <div className="res-card-title">
                    <h3>{name}</h3>
                    <span className={`rating ${avgRating >= 4 ? "rating-good" : "rating-avg"}`}>
                        ★ {avgRating.toFixed(1)}
                    </span>
                </div>
                <p className="cuisines">{cuisines.join(", ")}</p>
                <div className="res-card-meta">
                    <span>{sla?.deliveryTime} mins</span>
                    <span className="dot">•</span>
                    <span>{costForTwo}</span>
                </div>
            </div>
        </div>
    )
}

export default RestaurantCard;