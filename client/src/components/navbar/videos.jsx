import React from 'react';

const Videos = () => {
  return (
    <div className="about">
      <h1>Videos</h1>
      

      {/* Example with video in your project */}
      <video width="1000" controls>
        <source src={'./video_testimonial.mp4'} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Videos;
