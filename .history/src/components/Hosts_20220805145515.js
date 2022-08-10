import React from "react";
import Imgix from "react-imgix";
import Heading from "./Heading";

const images = [
  "forest1",
  "forest2",
  "forest3",
  "mountain1",
  "mountain2",
  "mountain3",
  "river1",
  "river2",
  "river3",
];

const buildURL = (imagePath) =>
  `https://assets.imgix.net/tutorials/${imagePath}.webp`;

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
