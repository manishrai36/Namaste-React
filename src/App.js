import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js"
import Body from "./components/Body.js"
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
// import Cart from "./components/Cart.js";
// import About from "./components/About.js";
import { createBrowserRouter,RouterProvider, Outlet } from "react-router-dom";
//we can use -> import Header from "./components/Header"


//Two way to play with props 
//Method 1 directly pass props and access like object Value(props.resName)
//directly pass the value of props like {resName,cuisine}
// const RestaurantCard=(props)=>
// {
//     const {data}=props;
//     return(
//         <div className="res-card">
//             {/* <img className="res-food" src=
//             {
//                 "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+{data.cloudinaryImageId}
//             }
//                 /> */}
//             <h3>{data.info.name}</h3>
//             <h4>{data.cuisines}</h4>
//             <h5>4.5 * <span>30 Minutes</span> </h5>
            
//         </div>
//     );
// }

const About = React.lazy(() => import('./components/About.js'));
const Cart = React.lazy(() => import('./components/Cart.js'));

const AppLayout=()=>
{
   
    return <div className="App">
        <Header/>
        <Outlet/>
       
    </div>
};

const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element: <Body/>
            },
            {
                path:"/about",
                element:(<Suspense fallback={<h1>Loading.....</h1>}>
                    <About/>
                </Suspense>)
                
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/cart",
                element:(
                    <Suspense fallback={<h1>Loading.....</h1>}>
                    <Cart/>
                </Suspense>
                )
                
            },
        ],
        // errorElement:<Error/>
    }
   
])
const root=ReactDOM.createRoot(document.getElementById("root"));
//root.render(<AppLayout/>)
root.render(<RouterProvider router={appRouter}/>);




// const heading=React.createElement("h1",
// {id:"heading"},
// "Hellow world from React");
// console.log(heading);
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// const parent=React.createElement("div",
// {id:"parent"},
// [
// React.createElement("div",
// {id:"child"},
// [
//     React.createElement("h2",
// {},"I'm h2 tagg2"),
// React.createElement("h3",
// {},"I'm h3 tagg3")]
// ),
// React.createElement("div",
// {id:"child"},
// [
//     React.createElement("h2",
// {},"I'm h2 tagg2"),
// React.createElement("h3",
// {},"I'm h3 tagg3")]
// )
// ]
// );

// console.log(parent);
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);


//JSX 
// const newHeading=(
//     <><h1>This is JSX first heading</h1><h2>This is JSX second heading</h2></>
// )

// //Functional Component for component composition
// const FnComp=()=>{
//     return <h1>This is FN Component
// <h2>This is FN2 Component</h2>
//     </h1>
            
// }
// //simple element addtion to component
// const ele=<span>This is span</span>
// //Functional Component
// const NewHeading=()=>
// (
//     <div id="container">
//         <FnComp /> 
//         {ele}
//         {FnComp()}
//         <h1>This is Functional Component Heading</h1>
//     </div>
// );
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(<NewHeading/>);
