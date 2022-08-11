import React from "react";
//import Heading from "./Heading";
import hwworkshop from "../assets/images/HWHL.jpg";
import workshoppy from "../assets/images/mlpy.jpg";

function ThemesHW() {
  // mental and physical health
  // productivity and organization
  // community building
  return (
    <div className="themes-container container">
      <h2>Special: Python and Machine Learning </h2>
      <div className="themes-intro mx-auto my-2 col-md-8 col-12">
        <p>
          This workshop is aimed mostly at ECE students going into the third
          year.For this ML workshop, we aim to explore multiple topics that were
          not covered in regular course material at a significantly faster pace.
          The topics covered in this workshop are basic Python practices, and
          Machine Learning, specifically digit recognition.
        </p>
      </div>

      <div className="themes mx-auto">
        <div className="theme-1 theme-item">
          <div className="img-container">
            <img className="theme-img" src={hwworkshop} alt="" />
          </div>

          <div className="theme-title-container">
            <h5>Day 1: Python Basics</h5>
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
            <h5>Day 2: Machine Learning on Handwritten Digit Recognition</h5>
            <p>
              This workshop is aimed mostly at ECE students going into the third
              year.For this ML workshop, we aim to explore multiple topics that
              were not covered in regular course material at a significantly
              faster pace. The topics covered in this workshop are basic Python
              practices, and Machine Learning, specifically digit recognition.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThemesHW;
