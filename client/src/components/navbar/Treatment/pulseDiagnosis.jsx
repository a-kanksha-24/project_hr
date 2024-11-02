import React from 'react';
import Sidebar from './sidebar';
import Content from './pulseDiagnosisContent';

function PulseDiagnosis() {
  return (
    <div className='accupuncture'>
       <Content />
      <Sidebar />
    </div>
  );
}

export default PulseDiagnosis;