import { CDN_URL } from "../utils/constants";
function RestaurantCard(props) {
    const { data } = props;
    return (
        <div className=" flex-wrap border p-4 m-2 w-64 bg-slate-100">
            <img className=" w-60 h-60" src={CDN_URL + (data?.info?.cloudinaryImageId || "")} alt={data?.info?.name || "Restaurant Image"} />
            <h3 className="font-bold">{data?.info?.name || "Restaurant Name"}</h3>
            <h4>{data?.info?.cuisines?.join(", ") || "Cuisines"}</h4>
            <h5>{data?.info?.avgRating || "Rating"} * <span>30 Minutes</span> </h5>
        </div>
    );
}

export default RestaurantCard;