import React from "react";

export const Banner = (props) => {
  return (
    <div id="banner">
      <div className="container">
        <div className="col-md-12">
          {props.data ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="two_column features_wrap"
                >
                  <div className="features_text">
                    {d.title}
                    <span className="features_link">{d.text}</span>
                  </div>
                  <div>
                    <a
                      href="#footer"
                      className="btn btn-custom primary_btn btn-lg page-scroll"
                    >
                      Get a Quote
                    </a>
                  </div>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
