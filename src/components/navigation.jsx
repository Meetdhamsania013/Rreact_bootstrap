import React from "react";
import logo from "../img/logo.svg";
import email from "../img/email_icon.svg";
import call from "../img/call_icon.svg";
import find from "../img/find_icon.svg";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="top_header_wrap">
        <div className="container ">
          <div className="two_column">
            <div>Have any question? </div>
            <div className="contact_wrap">
              <span className="email">
                <img src={email} className="img-responsive" alt="email" />
                contact@mail.com
              </span>
              <span className="call">
                <img src={call} className="img-responsive" alt="call" />
                +080 0444 333 444
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand page-scroll">
            <img src={logo} className="img-responsive logo" alt="logo" />
          </a>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#banner" className="page-scroll">
                About
              </a>
            </li>
            <li>
              <a href="#features" className="page-scroll">
                Features
              </a>
            </li>

            <li>
              <a href="#features" className="page-scroll">
                Project
              </a>
            </li>
            <li>
              <a href="#employee" className="page-scroll">
                Employee
              </a>
            </li>
            <li>
              <a href="#footer" className="page-scroll">
                Contact
              </a>
            </li>
            <li className="mobile_hide">
              <a href="javascript:void(0);">
                <img src={find} className="img-responsive" alt="find" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
