import React from "react";
// import Imgix from "react-imgix";
// import Heading from "./Heading";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

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

const buildURL = (imagePath) =>
  `https://raw.githubusercontent.com/FancyMelon/testOnGit/main/${imagePath}.jpg`;

export const Gallery = () => (
  <div className="gallery-title-container">
    <Heading text="2022 ECE Summer Workshop Highlights" />
     <div className="gallery-intro mx-auto my-2 col-md-8 col-12">
       <p>
         2022 ECE Summer Workshop brought <strong>practical experience</strong>{" "}
         to first year and second year students.
       </p>
     </div>
  </div>
  <AliceCarousel autoPlay autoPlayInterval="3000">
    <img src={buildURL(images[0])} className="sliderimg" />
    <img src={buildURL(images[1])} className="sliderimg" />
    <img src={buildURL(images[2])} className="sliderimg" />
    <img src={buildURL(images[3])} className="sliderimg" />
    <img src={buildURL(images[4])} className="sliderimg" />
    <img src={buildURL(images[5])} className="sliderimg" />
  </AliceCarousel>
);

export default Gallery;
