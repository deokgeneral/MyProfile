import React, { useState } from 'react';
import Navbar from '../navbar/navbar';
import About from '../randing/about/about';
import Off from "../randing/off/off";
import Project from '../randing/project/project';
import Skill from '../randing/skill/skill';
import Visit from '../randing/visit/visit';
import "./main.css";

function Main() {
    const [content, setContent] = useState('off'); // 초기 상태를 'off'로 설정

    const handleItemClick = (item) => {
        if (item === 'OFF') {
            setContent('off');
        } else {
            setContent(item);
        }
    };

    let component;
    switch (content) {
        case 'about':
            component = <About/>;
            break;
        case 'project':
            component = <Project />;
            break;
        case 'skill':
            component = <Skill />;
            break;
        case 'visit':
            component = <Visit />;
            break;
        case 'off':
            component = <Off />;
            break;
        default:
            component = <Off />;
            break;
    }

    return (
        <div className='section01-contanier'>
            <div className="section01-contanier-title">
                <b>D<span>E</span>OK<span>'s</span> Por<span>tF</span>ol<span>io</span></b>
            </div>
            <Navbar handleItemClick={handleItemClick} />
            <div className='section01-content'>
                <div className="section01-info">
                    {component}
                </div>
            </div>
        </div>
    );
}

export default Main;
