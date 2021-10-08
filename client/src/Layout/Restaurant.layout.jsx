import React from 'react';
import { TiStarOutline } from "react-icons/ti";
import { RiDirectionLine, RiShareForwardLine } from "react-icons/ri";
import { BiBookmarkPlus } from "react-icons/bi";

// components
import RestaurantNavbar from "../Components/Navbar/restaurantNavbar";
import ImageGrid from "../Components/restaurant/ImageGrid";
import InfoButtons from "../Components/restaurant/InfoButtons";
import RestaurantInfo from "../Components/restaurant/RestaurantInfo";
import TabContainer from "../Components/restaurant/Tabs";


const RestaurantLayout = () => {
    return (
        <>
          {" "}
          <RestaurantNavbar />
          <div className="container mx-auto px-4 lg:px-20 pb-10 ">
            <ImageGrid images={restaurant.images} />
            <RestaurantInfo
              name={restaurant?.name}
              restaurantRating={restaurant?.rating || 0}
              deliveryRating={restaurant?.rating || 0}
              cuisine={restaurant?.cuising}
              address={restaurant?.address}
            />
            <div className="my-4 flex flex-wrap gap-3">
              <InfoButtons isActive>
                <TiStarOutline /> Add Review
              </InfoButtons>
              <InfoButtons>
                <RiDirectionLine /> Direction
              </InfoButtons>
              <InfoButtons>
                <BiBookmarkPlus /> Bookmark
              </InfoButtons>
              <InfoButtons>
                <RiShareForwardLine /> Share
              </InfoButtons>
            </div>
            <div className="my-10">
              <TabContainer></TabContainer>
            </div>
            <div className="relative">{props.children}</div>
          </div>
          <CartContainer />
        </>
    );
};

export default RestaurantLayout;
