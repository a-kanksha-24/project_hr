import React from 'react';

const CallNowButton = ({ phoneNumber }) => {
  return (
    <a href={`tel:${phoneNumber}`} className="call-now-btn">
      Call Now
    </a>
  );
};

export default CallNowButton;