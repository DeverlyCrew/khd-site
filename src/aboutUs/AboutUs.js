import React from "react";
import "./AboutUs.css";
import { strings } from "../translations/strings";

const AboutUs = () => {
  return (
    <div className="about_us_wrapper">
      <div className="about_us about_us_line_2">
        <div className="about_us_image">
          <img
            src={require("./assets/img2.jpg")}
            alt="about_us_line_2_image"
          />
        </div>
        <div className="about_us_text_wrapper">
          <div className="about_us_text">
            <h1>{strings.about_us_line_0_h1}</h1>
            <p>{strings.about_us_line_0_p}</p>
          </div>
        </div>
      </div>
      <div className="about_us">
        <div className="about_us_text_wrapper">
          <div className="about_us_text">
            <h1>{strings.about_us_line_1_h1}</h1>
            <p>{strings.about_us_line_1_p}</p>
          </div>
        </div>
        <div className="about_us_image">
          <img
            src={require("./assets/aboutUsImage1.jpg")}
            alt="about_us_line_1_image"
          />
        </div>
      </div>
      <div className="about_us about_us_line_2">
        <div className="about_us_image">
          <img
            src={require("./assets/donate_img.png")}
            alt="about_us_line_2_image"
          />
        </div>
        <div className="about_us_text_wrapper">
          <div className="about_us_text">
            <h1>{strings.about_us_line_2_h1}</h1>
            <p>{strings.about_us_line_2_p}</p>
            <p className="contact_info">{strings.about_us_line_2_p_2}</p>
            <p className="contact_info">{strings.about_us_line_2_p_3}</p>
            <p className="contact_info">{strings.about_us_line_2_p_4}</p>
            <p className="contact_info">{strings.about_us_line_2_p_5}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
