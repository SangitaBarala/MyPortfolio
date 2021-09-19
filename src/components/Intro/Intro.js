import React, {useEffect, useRef} from "react";
import './Intro.scss'
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
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/pic2.jpg" alt="picture"/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hii there, I'm</h2>
                    <h1>Sangita Barala</h1>
                    <br/>
                    <h3><span ref={textRef} ></span> Developer</h3>
                    <a href="#portfolio">
                        portfolio
                    </a>
                </div>
            </div>
        </div>
    )
}
export default Intro