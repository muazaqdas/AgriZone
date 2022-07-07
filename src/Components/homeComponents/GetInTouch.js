import React from "react";
import {GiBugleCall} from "react-icons/gi"
import {RiPencilRulerFill} from "react-icons/ri"
import {SiMinutemailer} from "react-icons/si"


const GetInTouch = (props) => {
  return (
    <>
      <h2 className="display-4 pb-3 text-center">{props.heading}</h2>
      <p className="lead text-center pb-3">
        {props.message}, <a href={`mailto:${props.email}`}>{props.email}</a>.
      <div>
      <GiBugleCall className="mr-4 mt-4" size={"40px"}/>
      <RiPencilRulerFill className="mr-4 mt-4" size={"35px"}/>
      <SiMinutemailer className="mr-4 mt-4" size={"35px"}/>

      </div>
        
      </p>
    </>
  );
};

export default GetInTouch;
