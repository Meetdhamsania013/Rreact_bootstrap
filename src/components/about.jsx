import React from "react";
import about from "../img/about.png";
import about1_icon from "../img/about1_icon.svg";
import about2_icon from "../img/about2_icon.svg";
import about3_icon from "../img/about3_icon.svg";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container-fluid">
        <div className="row center_align">
          <div className="col-lg-6 col-md-12 col-sm-12 p-0">
            <div className="about_cover_img" >
              <img src={about} className="img-responsive about_mobile_img" alt="about" />
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="about_wrap">
              <div className="about_text_wrap">
                <div className="icon">
                  <img
                    src={about1_icon}
                    className="img-responsive"
                    alt="about"
                  />
                </div>
                <div className="about_column_wrap">
                  <div className="title">GENERAL BUILDER</div>
                  <div className="desc">
                    Lorem ipsum dolor sit amet, sed dicunt oporteat cuum Tuo
                    iomnis persequeris neglegentur, facete commodo ea use possit
                    lucilius.
                  </div>
                </div>
              </div>
              <div className="about_text_wrap">
                <div className="icon">
                  <img
                    src={about2_icon}
                    className="img-responsive"
                    alt="about"
                  />
                </div>
                <div className="about_column_wrap">
                  <div className="title">HOUSE EXTENSIONS</div>
                  <div className="desc">
                    Lorem ipsum dolor sit amet, sed dicunt oporteat cuum Tuo
                    iomnis persequeris neglegentur, facete commodo ea use possit
                    lucilius.
                  </div>
                </div>
              </div>
              <div className="about_text_wrap">
                <div className="icon">
                  <img
                    src={about3_icon}
                    className="img-responsive"
                    alt="about"
                  />
                </div>
                <div className="about_column_wrap">
                  <div className="title">REFURBISHMENT</div>
                  <div className="desc">
                    Lorem ipsum dolor sit amet, sed dicunt oporteat cuum Tuo
                    iomnis persequeris neglegentur, facete commodo ea use possit
                    lucilius.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
