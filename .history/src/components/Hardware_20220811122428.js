import React from "react";
import bannerImg2 from "../assets/images/HWHL.jpg";

export default function Intro(props) {
  return (
    <div className="intro-container container">
      <img className="banner-image mr-auto" src={bannerImg2} alt="aboutPic1" />
      <div className="description mr-auto px-3">
        <h2 className="title">2022 ECE Hardware Workshop</h2>
        {/* <hr className="seperation-line"/> */}
        <p className="description-text">
          The schedule for the ECE students during the normal work term is very
          compacted and busy. However, after the final exam, there isn’t too
          many activities provided at the university for students to continue
          solidate their knowledge learned from the last school year or chances
          for them to explore more for their future studies. Thus, the need for
          students to have hands-on experience during the summer arise. The
          motivation for this workshop was to provide hands-on hardware
          experience for first year ECE students and teach students with new
          concepts that will be covered in second year. This could fill the
          vacancy of academic-related activity during the summer for students
          yet not create too much stress for students so that they can focus on
          the contents of the workshop itself more. The workshop could be a good
          chance for the students to be prepared when entering the second year
          of study.
        </p>
      </div>
    </div>
  );
}
