import React from "react";
import Heading from "./Heading";
import hwworkshop from "../assets/images/HWHL.jpg";
import workshoppy from "../assets/images/mlpy.jpg";

function ThemesHW() {
  // mental and physical health
  // productivity and organization
  // community building
  return (
    <div className="themes-container container">
      <h2> 2022 Hardware Workshop and Special </h2>
      <div className="themes-intro mx-auto my-2 col-md-8 col-12">
        <p>
          Innovation Fair 2021 is returning with a theme of{" "}
          <strong>Post-Pandemic Era</strong>. We seeks to expand the boundary of
          personal well-being, enhance the experience of communal living, and
          initiate a dialogue between individual students and the community we
          live in.
        </p>
      </div>

      <div className="themes mx-auto">
        <div className="theme-1 theme-item">
          <div className="img-container">
            <img className="theme-img" src={hwworkshop} alt="" />
          </div>

          <div className="theme-title-container">
            <h5>Hardware Workshop: Digital and Analog Electronics</h5>
            <p>
              Self-isolation challenges our ability to keep mental and physical
              health by changing our daily routines and disrupting our internal
              and external balance. How can technical solutions help protect us
              from physical illness as well as re-balancing our internal
              well-being?
            </p>
          </div>
        </div>

        <div className="theme-2 theme-item">
          <div className="img-container">
            <img className="theme-img" src={workshoppy} alt="" />
          </div>

          <div className="theme-title-container">
            <h5>Workshop Special: Python and Machine Learning</h5>
            <p>
              This workshop is aimed mostly at ECE students going into the third
              year.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThemesHW;
