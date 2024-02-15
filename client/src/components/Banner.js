import React from "react";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { BiArrowBack } from "react-icons/bi";
import "./Banner.scss"; 

const Banner = () => {
  return (
    <>
     <div className="hero-banner">
      <div className="content">
        <div className="text">
          <h1>MSM</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
            aliquam quas.
          </p>
          <div className="ctas">
            <div className="banner-cta">Read More</div>
            <div className="banner-cta v2">Shop Now</div>
          </div>
        </div>
        <img className="banner-img" src={'images/banner-img.png'} alt="" />
      </div>
    </div>
    </>
    // <div className="hero-banner">
    //   <div className="content">
    //     <div className="text">
    //       <h1 className='h1'>MSM</h1>
    //       <p>
    //         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
    //         aliquam quas.
    //       </p>
    //       <div className="ctas">
    //         <div className="banner-cta">Read More</div>
    //         <div className="banner-cta v2" >Shop Now</div>
    //       </div>
    //     </div>
    //     <img className="banner-img" src={'/images/banner-img.png'} alt="" />
    //   </div>
    // </div>
  );
};

export default Banner;
