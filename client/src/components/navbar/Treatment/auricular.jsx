import React from 'react';
import Sidebar from './sidebar';
import Content from './auricularContent';

function Auricular() {
  return (
    <div className='accupuncture'>
       <Content />
      <Sidebar />
    </div>
  );
}

export default Auricular;