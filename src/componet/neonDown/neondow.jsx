import React from 'react';
import { IoCaretDownSharp } from "react-icons/io5";
import "./neondown.css";

function Neondown({ className }) {
  return (
    <div className={`neondown-container ${className}`}>
      <IoCaretDownSharp />
      <IoCaretDownSharp />
      <IoCaretDownSharp />
    </div>
  )
}

export default Neondown;
