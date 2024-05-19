import React from 'react';
import { ImArrowDown } from "react-icons/im";
import "./neondown.css";

function Neondown({ className }) {
  return (
    <div className={`neondown-container ${className}`}>
      <ImArrowDown className='up'/>
      <ImArrowDown className='down'/>
    </div>
  )
}

export default Neondown;
