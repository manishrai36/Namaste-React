import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import data2 from "../utils/data";

const Body=()=>
{
    const [resData,setResData]= useState([]);
    const [restList,setChanges]=useState(data2);
    const passFilteredData=data2.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
//     useEffect(()=>
//     {
//         fetchData(),
//         []
//     })

//     const fetchData= async()=>
//     {
//         fetch('https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
//   .then(response => response.json())
//   .then(data => console.log(data));

//     }



    const filteredData=(event)=>
    {
        let filtData=[];
        data2.map((item)=>
        {
            if(item.info.name.toLowerCase().includes(event.target.value.toLowerCase()))
            {
                console.log(item.name)
                filtData.push(item);
            }
        })
        console.log(filtData);
        setChanges(filtData);
    }
    return(
    <div className="body">
        
        <div className="search">
            
                 
           <div className="flex items-center space-x-4 p-4">
                <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 ps-10 p-2.5  dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" placeholder="Search here...." onChange={filteredData}/>
                <button className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm text-center block w-60 p-2.5" onClick={()=>{
                const filteredList=data2.filter(
                    (res)=>res.info?.avgRating>4
                );
                setChanges(filteredList);
                }}>
            Top Rated Restaurants
            </button>
           </div>
        </div>
        <div className="filter">
        
        </div>
        <div className="flex justify-center p-4 flex-wrap border-y-4">
            {passFilteredData.map((Data)=>(
                <RestaurantCard key={Data.info?.id} data={Data}/>
             ))};
        </div>
    </div>
        
    );
};
export default Body;