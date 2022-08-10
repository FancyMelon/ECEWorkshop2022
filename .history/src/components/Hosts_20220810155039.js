import React from "react";
// import Imgix from "react-imgix";
import Heading from "./Heading";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import arrowLeft from "../assets/images/arrow-left-filling.svg";
import arrowRight from "../assets/images/arrow-right-filling.svg";

const images = [
  "wsImage1",
  "wsImage2",
  "wsImage3",
  "wsImage4",
  "wsImage15",
  "wsImage14",
  "wsImage7",
  "wsImage8",
  "wsImage9",
  "wsImage12",
];

const renderPrevButton = ({ idDisabled }) => {
  return <img className="arrow" src={arrowLeft} alt="arrowLeft" />;
};

const renderNextButton = ({ idDisabled }) => {
  return <img className="arrow" src={arrowRight} alt="arrowRight" />;
};

const buildURL = (imagePath) =>
  `https://raw.githubusercontent.com/FancyMelon/testOnGit/main/${imagePath}.jpg`;

export const Gallery = () => (
  <>
    <div className="gallery-title-container">
      <h2> 2022 ECE Summer Workshop Highlights </h2>
      <div className="gallery-intro mx-auto my-2 col-md-8 col-12">
        <p>
          2022 ECE Summer Workshop brought <strong>practical experience</strong>
          to first year and second year students. We are so honored to have a
          class of students coming to support us when we performed the test run.
          Special thanks to the attendees both from ECE 2T4 and 2T5 Classes.
        </p>
      </div>
    </div>
    <AliceCarousel
      mouseTracking
      //disableDotsControls
      // disableButtonsControls  // ---> also remove this
      // activeIndex={activeIndex}  // ---> no need to this anymore
      controlsStrategy="responsive"
      autoPlay={true}
      autoPlayInterval={3000}
      infinite={true}
      keyboardNavigation={true}
      renderPrevButton={renderPrevButton}
      renderNextButton={renderNextButton}
    >
      <img src={buildURL(images[0])} className="sliderimg" alt="image1"/>
      <img src={buildURL(images[1])} className="sliderimg" alt="image2"/>
      <img src={buildURL(images[2])} className="sliderimg" alt="image3"/>
      <img src={buildURL(images[3])} className="sliderimg" alt="image4">
      <img src={buildURL(images[4])} className="sliderimg" alt="image5"/>
      <img src={buildURL(images[5])} className="sliderimg" alt="image6"/>
      <img src={buildURL(images[6])} className="sliderimg" alt="image7"/>
      <img src={buildURL(images[7])} className="sliderimg" alt="image8"/>
      <img src={buildURL(images[8])} className="sliderimg" alt="image9"/>
      <img src={buildURL(images[9])} className="sliderimg" alt="image10"/>
    </AliceCarousel>
  </>
);

export default Gallery;
