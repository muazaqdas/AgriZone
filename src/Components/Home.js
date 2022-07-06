import React from "react";

import {about,getInTouch} from "./homeComponents/details"

import AboutMe from "./homeComponents/About"
import Banner from "./homeComponents/Banner"
import GetInTouch from "./homeComponents/GetInTouch"

function Home(){

    return(
        <>
            <Banner/>
            <AboutMe heading={about.heading} message={about.message} profilePic= {about.imageLink} imgSize={about.imageSize}/>
            <GetInTouch heading={getInTouch.heading} message={getInTouch.message} email={getInTouch.email}/>
        </>
    )

}

export default Home;