import React from 'react';
import './Expertise.scss'
import frontendPic from '../Images/assets/frontendPic.jpg'
import backendPic from '../Images/assets/backendPic.jpg'
const Expertise = () => {
    return (
        <div className="expertise" id="expertise">
            <h1>Expertise</h1>
            <div className="frontend">
                <div className="frontendSkills">
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Bootstrap</li>
                        <li>Material-UI</li>
                    </ul>
                </div>
                <div className="frontendImg">
                    <img src={frontendPic}/>
                </div>
            </div>
            <div className="frontend">
                <div className="backendImg">
                    <img className="backendImg2" src={backendPic}/>
                </div>
                <div className="backendSkills">
                    <ul>
                        <li>NODE JS</li>
                        <li>Express</li>
                        <li>MongoDb</li>
                        <li>Mysql</li>
                        <li>REST-API</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Expertise;