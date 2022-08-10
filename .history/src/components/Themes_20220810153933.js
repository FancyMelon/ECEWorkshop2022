import React from "react";
import Heading from "./Heading";
import workshop1 from "../assets/images/workshop1.jpg";
import workshop2 from "../assets/images/workshop2.jpg";
import workshop3 from "../assets/images/workshop3.jpg";

function Themes() {
  // mental and physical health
  // productivity and organization
  // community building
  return (
    <div className="themes-container container">
      <h2> 2022 Software Workshop Series </h2>
      <div className="themes-intro mx-auto my-2 col-md-8 col-12">
        <p>
          The software workshops aim at first-year students who had difficulties
          with APS105 contents and wished to explore more on the software side
          in the ECE program. The workshops build on several software
          programming skills to assist the students through either projects or
          activities.
        </p>
      </div>

      <div className="themes mx-auto">
        <div className="theme-1 theme-item">
          <div className="img-container">
            <img className="theme-img" src={workshop1} alt="" />
          </div>

          <div className="theme-title-container">
            <h5>Workshop 1: Sudoku Project</h5>
            <p>
              The first workshop was held on May 25th and lasted 2 days. The
              workshop theme is about Sudoku Project, which intends to make a
              Sudoku puzzle game in C language. By doing the Sudoku Project,
              students can review the first-year concepts such as arrays and
              loops and familiarize themselves with software development
              routines.
            </p>
          </div>
        </div>

        <div className="theme-2 theme-item">
          <div className="img-container">
            <img className="theme-img" src={workshop2} alt="" />
          </div>

          <div className="theme-title-container">
            <h5>Workshop 2: Research Project Database</h5>
            <p>
              The second software workshop aimed at more advanced concepts in
              APS105. The project of research databases required a linked list
              for its primary data structure and binary search trees to create
              searching functions based on the last names. The raw data were
              from ECE496, the design capstone course. The students would create
              such a database to store the raw data and establish sorting and
              searching functions.
            </p>
          </div>
        </div>
        <div className="theme-3 theme-item">
          <div className="img-container">
            <img className="theme-img" src={workshop3} alt="" />
          </div>

          <div className="theme-title-container">
            <h5>Workshop 3: Coding Environment Setup</h5>
            <p>
              The third workshop aims to introduce first-year students to some
              frequently used concepts and tools in the second year. The topics
              that were covered were IDE, Debugger, git, and Hash tables.The
              topics covered are taken from material in ECE244, ECE297, and
              partially from APS105 that were not covered for 2T5 students
              (remote connection to ECF). Most of the activities are created
              originally in ways to help first-year students transition into the
              second year.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Themes;
