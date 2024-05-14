import React from 'react';
import Navbar from '../navbar/navbar';
import "./main.css";

function Main() {

  return (
    <div className='section01-contanier'>
      <div className="section01-contanier-title">
        <b>W<span>EL</span>C<span>OM</span>E</b>
      </div>
      <div className='section01-content'>
        <div className="section01-info">
          <h1>OFF</h1>
      </div>
      <Navbar />
    </div>
  );
}

export default Main;
