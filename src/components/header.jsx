import React from "react";
import Slider from "react-slick";
import slider1 from "../img/slider-1.png";

export const Header = (props) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <header id="header">
      <div className="slider_wraper">
        <Slider {...settings}>
          <div className="image_slider_wrap">
            <img src={slider1} className="slider_img" alt="about" />
            <div className="container">
              <div className="slider_text_wrap">
                <h1 className="slider_title">
                We Do Big Things With Big Ideas
                </h1>
                <p className="slider_desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sed commodo nibh ante facilisis bibendum.</p>
                <a href="#features" className="btn btn-custom secondary_btn btn-lg page-scroll">
                  Explore Now
                </a>
              </div>
            </div>
          </div>
          <div className="image_slider_wrap">
            <img src={slider1} className="slider_img" alt="about" />
            <div className="container">
              <div className="slider_text_wrap">
                <h1 className="slider_title">
                We Do Big Things With Big Ideas
                </h1>
                <p className="slider_desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sed commodo nibh ante facilisis bibendum.</p>
                <a href="#features" className="btn btn-custom secondary_btn btn-lg page-scroll">
                  Explore Now
                </a>
              </div>
            </div>
          </div>
          <div className="image_slider_wrap">
            <img src={slider1} className="slider_img" alt="about" />
            <div className="container">
              <div className="slider_text_wrap">
                <h1 className="slider_title">
                We Do Big Things With Big Ideas
                </h1>
                <p className="slider_desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sed commodo nibh ante facilisis bibendum.</p>
                <a href="#features" className="btn btn-custom secondary_btn btn-lg page-scroll">
                  Explore Now
                </a>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </header>
  );
};
