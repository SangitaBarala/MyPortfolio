import React, {useEffect, useRef} from "react";
import './Intro.scss'
import Resume from '../Resume/Sangita_Barala_-_ReactWeb_Developer (1).ef369f89 (1).pdf'

import {init} from 'ityped'
const Intro = () => {
    const textRef = useRef()
    useEffect(()=>{
        init(textRef.current, {
            showCursor: false,
            backDelay:1500,
            backSpeed:60,
            strings: ['Web', 'Application', 'UI']
        })
    }, [])
    return(
        <div className="intro" id="intro">
            <div className="right">
                <div className="wrapper">
                    <h2>Hii there, I'm</h2>
                    <h1>Sangita Barala</h1>
                    <h3><span ref={textRef} ></span> Developer</h3>
                    <br/>
                    <h4>I love coding , and I aspire to become a great developer.
                        I currently code every day to become better than previous day!</h4>
                    <div>
                        <a href="https://github.com/SangitaBarala" className="fa fa-github" target="_blank"></a>
                        <a href="https://www.linkedin.com/in/sangita-barala-854854205/" target="_blank" className="fa fa-linkedin"></a>
                        <a href={Resume} target="_blank" className="fa fa-folder">
                            <span className="resume_text">Download Resume</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Intro