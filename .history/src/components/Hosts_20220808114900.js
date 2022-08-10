import React from "react";
import Imgix from "react-imgix";
import Heading from "./Heading";

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
    <div className="gallery">
      <div className="themes-intro mx-auto my-2 col-md-8 col-12">
        <p>
          Innovation Fair 2021 is returning with a theme of{" "}
          <strong>Post-Pandemic Era</strong>. We seeks to expand the boundary of
          personal well-being, enhance the experience of communal living, and
          initiate a dialogue between individual students and the community we
          live in.
        </p>
      </div>
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
