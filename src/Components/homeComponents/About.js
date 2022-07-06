import React from "react";


function AboutMe(props){
    return (
        <div id="aboutme" className="jumbotron jumbotron-fluid m-0" style={{ backgroundColor: "white" }}>
          <div className="container container-fluid">
            <div className="row">
              <div className="col-5 d-none d-lg-block align-self-center">
                  <img className="border border-secondary rounded-circle" src={props.profilePic} alt="profilepicture" width={props.imgSize} height={props.imgSize}/>
              </div>
              <div className= "col-lg-7">
                <h2 className="display-4 mb-5 text-center">{props.heading}</h2>
                <p className="lead text-center">{props.message}</p>
              </div>
            </div>
          </div>
        </div>
      );
    };
    
    export default AboutMe;