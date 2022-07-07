import React, {useState} from "react";


function AboutMe(props){

  const [ rotate , letsRotate] = useState(360);
    return (
        <div id="aboutme" className="jumbotron jumbotron-fluid m-0" style={{ backgroundColor: "#D3EBCD" }}>
          <div className="container container-fluid">
            <div className="row">
              <div className="col-5 d-none d-lg-block align-self-center">
                  <img className="border border-secondary rounded-circle" src={props.profilePic} alt="profilepicture" width={props.imgSize} height={props.imgSize}/>
              </div>
              <div className= "col-lg-7">
                <h2 className="display-4 mb-5 text-center">{props.heading}</h2>
                <p className="lead text-center">{props.message}</p>
                <button className="btn btn-outline-info" onClick={ ()=>{
                    letsRotate(rotate + 360)
                    document.getElementById("aboutme").style.WebkitTransitionDuration='1s';
                    // document.getElementById("aboutme").style.transform = '';
                    document.getElementById("aboutme").style.transform = `rotate(${rotate}deg)`;
                }}>Lets Rotate</button>
              </div>
            </div>
          </div>
        </div>
      );
    };
    
    export default AboutMe;