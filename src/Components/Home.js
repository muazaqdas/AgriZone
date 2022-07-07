import React from "react";
import FeaturedProducts from "./products/FeaturedProducts"
import Recommended from "./products/Recommended"
import OrderForm from "./homeComponents/OrderForm"

import {about,getInTouch} from "./homeComponents/details"

import AboutMe from "./homeComponents/About"
import Banner from "./homeComponents/Banner"
import GetInTouch from "./homeComponents/GetInTouch"

function Home(){

    return(
        <>
            <Banner/>
            <AboutMe heading={about.heading} message={about.message} profilePic= {about.imageLink} imgSize={about.imageSize}/>
            <FeaturedProducts />
            <Recommended />
            <OrderForm />
            <GetInTouch heading={getInTouch.heading} message={getInTouch.message} email={getInTouch.email}/>
        </>
    )

}

export default Home;