import React, { useState } from 'react';
import "./navbar.css";

function Navbar() {
    const [darkened, setDarkened] = useState(false);
    const [buttonHidden, setButtonHidden] = useState(false);

    const handleClick = () => {
        setButtonHidden(true); // 버튼 숨김
        setDarkened(true); // 어두운 레이어 표시
        setTimeout(() => {
        setDarkened(false); // 어두운 레이어 사라짐
    }, 1000);
    };
    return (
    <div className='navbar-container'>
        <ul className='navbar'>
            <li className={`section01-btn ${buttonHidden ? 'section01-btn-hidden' : ''}`} onClick={handleClick}>
                <h1>A<span id="offset">BO</span>UT</h1>
            </li>
            <li className={`section01-btn ${buttonHidden ? 'section01-btn-hidden' : ''}`} onClick={handleClick}>
                <h1>PRO<span id="offset">JE</span>CT</h1>
            </li>
            <li className={`section01-btn ${buttonHidden ? 'section01-btn-hidden' : ''}`} onClick={handleClick}>
                <h1>SK<span id="offset">I</span>LL</h1>
            </li>
            <li className={`section01-btn ${buttonHidden ? 'section01-btn-hidden' : ''}`} onClick={handleClick}>
                <h1>M<span id="offset">E</span>MO</h1>
            </li>
        </ul>
<div className={`darken-overlay ${darkened ? 'darken-overlay-show' : ''}`} onClick={handleClick}></div>
    </div>
    )
}

export default Navbar