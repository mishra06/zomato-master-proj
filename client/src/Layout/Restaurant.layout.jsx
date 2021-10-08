import React from 'react';

//components
import RestaurantNavbar from "../Components/Navbar/restaurantNavbar";

const RestaurantLayout = () => {
    return (
    <>
     {" "}
     <ResstaurantNavbar />
     <div className="container mx-auto px-4 lg:px-20 pb-10 "></div>
    </>);
};

export default RestaurantLayout;
