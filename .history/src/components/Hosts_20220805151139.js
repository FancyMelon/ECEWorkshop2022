import React from "react";
import Imgix from "react-imgix";
import Heading from "./Heading";

const images = [
  "wslImage1",
  "wslImage2",
  "wslImage3",
  "wslImage4",
  "wslImage5",
  "wslImage6",
  "wslImage7",
  "wslImage8",
  "wslImage9",
  "wslImage10",
];

const buildURL = (imagePath) =>
  `https://github.com/FancyMelon/testOnGit/blob/main/${imagePath}.jpg`;

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
