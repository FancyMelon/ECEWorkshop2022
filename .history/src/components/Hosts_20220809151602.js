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

// const renderPrevButton = ({ idDisabled }) => {
//   return <arrowLeft style={{ position: "absolute", right: 0, top: 0 }} />;
// };

// const renderNextButton = ({ idDisabled }) => {
//   return <arrowRight style={{ position: "absolute", right: 0, top: 0 }} />;
// };

const buildURL = (imagePath) =>
  `https://raw.githubusercontent.com/FancyMelon/testOnGit/main/${imagePath}.jpg`;

export const Gallery = () => (
  <>
    <div className="gallery-title-container">
      <h2> 2022 ECE Summer Workshop Highlights </h2>
      <div className="gallery-intro mx-auto my-2 col-md-8 col-12">
        <p>
          2022 ECE Summer Workshop brought <strong>practical experience</strong>{" "}
          to first year and second year students.
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
      // renderPrevButton={renderPrevButton}
      // renderNextButton={renderNextButton}
      renderPrevButton={() => {
        return <ArrowL />;
      }}
      renderNextButton={() => {
        return <ArrowR />;
      }}
    >
      <img src={buildURL(images[0])} className="sliderimg" />
      <img src={buildURL(images[1])} className="sliderimg" />
      <img src={buildURL(images[2])} className="sliderimg" />
      <img src={buildURL(images[3])} className="sliderimg" />
      <img src={buildURL(images[4])} className="sliderimg" />
      <img src={buildURL(images[5])} className="sliderimg" />
      <img src={buildURL(images[6])} className="sliderimg" />
      <img src={buildURL(images[7])} className="sliderimg" />
      <img src={buildURL(images[8])} className="sliderimg" />
      <img src={buildURL(images[9])} className="sliderimg" />
    </AliceCarousel>
  </>
);

export default Gallery;
