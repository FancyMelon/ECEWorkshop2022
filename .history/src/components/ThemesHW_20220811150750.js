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
            <h5>Day 1: Python Basics with Small Projects</h5>
            <p>
              On day 1, the activities consist mostly of questions that were
              designed to help participants understand and to be able to use the
              Python knowledge they learned in class. These activities are
              unrelated to each other, requires little time to complete, and are
              meant for participants to partner up and collaborate to solve
              these problems.
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
              Day 2 has a heavier emphasis on theory compared to Day 1. The
              activities are presented in sequence in order to complete the
              machine learning program. Day 2 is meant for participants to think
              and solve each task on their own. The goal is to have each student
              leaving the workshop knowing to creating their own machine
              learning program with little assistance from the staff and others.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThemesHW;
