/* eslint-disable react/no-unescaped-entities */

import { NavLink } from "react-router-dom";


const Banner = () => {
    return (
        <div className="relative">
        <img src="https://i.imgur.com/dxDjRN3.jpg" alt="banner image" className="w-full md:h-[700px] h-[600px]" />
        <div className="absolute top-36 md:top-96 left-0 right-0 md:bottom-0 flex flex-col justify-center items-center space-y-4">
        <NavLink to={"/login"}><button className="bg-amber-950 p-4 text-2xl  text-white rounded-xl lg:w-[500px] hover:bg-amber-600 font-Raleway">Let's explore</button></NavLink>
        </div>
    </div>
    );
};

export default Banner;