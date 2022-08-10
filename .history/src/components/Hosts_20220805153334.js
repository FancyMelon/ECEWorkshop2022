import React from "react";
import Imgix from "react-imgix";
import Heading from "./Heading";

const images = [
  "wsImage1",
  "wsImage2",
  "wsImage3",
  "wsImage4",
  "wsImage11",
  "wsImage6",
  "wsImage7",
  "wsImage8",
  "wsImage9",
  "wsImage12",
];

const buildURL = (imagePath) =>
  `https://raw.githubusercontent.com/FancyMelon/testOnGit/main/${imagePath}.jpg`;

export const Gallery = () => (
  <div className="gallery-container container">
    <Heading text="2022 ECE Summer Workshop Highlights" />
    <div className="gallery">
      {images.map((image) => (
        <Imgix
          sizes="(min-width: 960px) 33vw, (min-width: 640px) 50vw, 100vw"
          src={buildURL(image)}
          key={image}
          imgixParams={{
            fit: "crop",
            fm: "jpg",
          }}
          width="600"
          height="600"
        />
      ))}
    </div>
  </div>
);

export default Gallery;
