import React, { useState } from 'react';
import "./navbar.css";

function Navbar({ handleItemClick }) {
    const [activeItem, setActiveItem] = useState(null);

    const handleClick = (item) => {
        const newActiveItem = item === activeItem ? null : item;
        setActiveItem(newActiveItem);
        handleItemClick(newActiveItem); 
    };

    return (
        <div className='navbar-container'>
            <ul className='navbar'>
                <li className="navbar-about-btn" onClick={() => handleClick('about')}>
                    <h1>ABOUT</h1>
                </li>
                <li className="navbar-project-btn" onClick={() => handleClick('project')}>
                    <h1>PROJECT</h1>
                </li>
                {/* <li className="navbar-skill-btn" onClick={() => handleClick('skill')}>
                    <h1>SKILL</h1>
                </li> */}
                <li className="navbar-memo-btn" onClick={() => handleClick('visit')}>
                    <h1>VISIT</h1>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;
