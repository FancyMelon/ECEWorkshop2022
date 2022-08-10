import React from "react";
import bannerImg from "../assets/images/banner.jpg";

export default function Intro(props) {
  return (
    <div className="intro-container container">
      <img
        className="banner-image mr-auto"
        src={bannerImg}
        alt="Innovation Fair"
      />
      <div className="description mr-auto px-3">
        <h2 className="title">About ECE Workshops 2022</h2>
        {/* <hr className="seperation-line"/> */}
        <p className="description-text">
          The undergraduate engineering curriculum has a very tightly arranged
          schedule and assessment-oriented purpose throughout the materials and
          practices. However, after the sudden end of the school year marked by
          the final exams, students often find it difficult to practice
          essential skills during the summer and thus resulting in difficulties
          in the following school year. The initiative suggests a means to
          engage lower-year undergraduate students in curriculum-related group
          practical experiences in order to gain skills useful in a model that
          simulates an industry environment. 
        </p>
      </div>
    </div>
  );
}
