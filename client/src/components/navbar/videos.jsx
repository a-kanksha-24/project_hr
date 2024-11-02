import React from 'react';

const Videos = () => {
  return (
    <div className="about">
      <h1>Videos</h1>
      <video width="100%" autoplay>
        <source src={'./video_testimonial.mp4'} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Videos;
