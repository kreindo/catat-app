import React from 'react';
import CatatInput from './Components/CatatInput';
import Header from './Components/Header';

const CatatApp = () => {
  return (
    <div>
      <h1>Catat App</h1>
      <Header />
      <CatatInput />
      {/* <CatatList/> */}
    </div>
  );
};

export default CatatApp;
