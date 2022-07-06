import React from "react";
import Image from "react-bootstrap/Image";
import BannerImg from "../../assets/img/banner.png";

function Banner() {
  return (
    <div>
      <Image src={BannerImg} style={{ width: "100%", height: "auto" }} />
    </div>
  );
}

export default Banner;
