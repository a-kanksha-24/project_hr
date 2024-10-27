import React from 'react';
import Sidebar from './sidebar';
import Content from './accupunctureContent';

function Accupuncture() {
  return (
    <div className='accupuncture'>
       <Content />
      <Sidebar />
    </div>
  );
}

export default Accupuncture;