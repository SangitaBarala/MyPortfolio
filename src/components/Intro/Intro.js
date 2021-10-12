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
            <div className="right">
                <div className="wrapper">
                    <h2>Hii there, I'm</h2>
                    <h1>Sangita Barala</h1>
                    <h3><span ref={textRef} ></span> Developer</h3>
                    <br/>
                    <h4>I love coding , and I aspire to become a great developer.
                        I currently code every day to become better than previous day!</h4>
                    <div>
                        <a href="https://github.com" className="fa fa-github" target="_blank"></a>
                        <a href="https://www.linkedin.com/in/sangita-barala-854854205/" target="_blank" className="fa fa-linkedin"></a>
                        <a href="https://mail-attachment.googleusercontent.com/attachment/u/0/?ui=2&ik=f6bffc90ab&attid=0.1&permmsgid=msg-a:r8565189613608147060&th=17c76779c3774da2&view=att&disp=inline&saddbat=ANGjdJ9pV-fHSOjrxEOzjrh9GVaYH7UFuSxjXRbIHGywEU6FdzP6dr6OmNPe9Fof6Kopf8yf0D2IAT0x3t1c3kZqpCi0SfvHF73mPJuMBt6sSlZx9eDZaYAxQRI0Ko_B9e5EHpqCxWeSw2kT1vskBuiy7LuaBEivVfot-Vbipg3JoQ3HqgDPv9nEymA0TdJvigulblYJhxMn7ch76Lq9GF0MO7eEZ-XRpyQ9ap-pEdgW4KzdVIvvKbp4K2ybISJI5t0HG4uFTNa-X8cT3wMCv7C6tUDB7VVH-kP8GL0uCs7wtzmL2E4aUdWL1tAVO6NMYoJQ4W-lm-g6rnCPyLwIxqJUjivWC8wbRhe3HWZ3XWNlnNAsGQDwBtZrnA99uwR7h7ZMdjoaf9weDHU4kP_7VR94aoI45zOzMGhLjrKdowwNfMcI2gEL3tLggJuhGLXT84rEVpx2wu7fLpWXqMum7Zlwn01FxTdxwPMJgLxdp-foKKf5NRitLgbSNHEX_J6AXRorsHF3951oJgSnCvxEYKU_YeNz5wT7uuNWgkYXit-Dd8rEwNwDJL13HUPNSB3Zq8sSva8rXTDlj5itf9dAM73euk9JFo0L-aOCEsYogZhHuH1Dacc7uaupkOn-VQQphpk9lqnvRslUysPwBsfu1uMFHd-EQnmRwP2bknSG1Y4Dh7wyF2KNNpsdoBZpzB8" target="_blank" className="fa fa-folder"></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Intro