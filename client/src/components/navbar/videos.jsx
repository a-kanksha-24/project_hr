import React from "react";
import "./video.css";
import video from "./video_testimonial.mp4";

const Videos = () => {
  return (
    <div className="videos">
      <h1>VIDEOS</h1>
      <video autoPlay controls loop>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag. Please update your browser
        to view this content.
      </video>
    </div>
  );
};

export default Videos;
