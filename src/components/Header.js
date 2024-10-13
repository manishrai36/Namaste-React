import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import React,{useState} from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import Registration from "./Registration";
const Header=()=>
{
    const status=useOnlineStatus();
    const [isModalOpen, setIsModalOpen] = useState(false); // Step 1: Initialize state
    const toggleModal = () => {
      setIsModalOpen(!isModalOpen); // Step 2: Toggle state
    };
    return(
        <div className="flex justify-between shadow-lg">
            <div className="logo-container">
                <img className=" w-36" src={LOGO_URL}/>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                    <Link to="/">Home</Link>
                        </li>
                    <li className="px-4">
                        <Link to="/about">About</Link>
                        </li>
                    <li className="px-4">
                    <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="px-4">
                    <Link to="/cart">Cart</Link>
                    </li>
                    <li className="px-4">
                       {status?"On🟢":"Off🔴"}
                    </li>
                    <button data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" type="button" 
                    onClick={toggleModal}>
                        Login
                        { <Registration isOpen={isModalOpen} toggleModal={toggleModal}/>}
                    </button>
                </ul>
               
            </div>
        </div>
    );
}
export default Header;