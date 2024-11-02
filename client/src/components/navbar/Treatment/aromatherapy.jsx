import React from 'react';
import Sidebar from './sidebar';
import Content from './aromatherapycontent';

function AromaTherapy() {
  return (
    <div className='accupuncture'>
       <Content />
      <Sidebar />
    </div>
  );
}

export default AromaTherapy;