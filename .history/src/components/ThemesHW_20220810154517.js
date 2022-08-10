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
          The motivation for this workshop was to provide hands-on hardware
          experience for first year ECE students and also teach students with
          new concepts that will be covered in second year. This could fill the
          vacancy of academic-related activity during the summer for students
          yet not create too much stress for students so that they can focus on
          the contents of the workshop itself more. The workshop could be a good
          chance for the students to be prepared when entering the second year
          of study.
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
