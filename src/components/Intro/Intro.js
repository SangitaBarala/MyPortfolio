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
                        <a href="https://mail-attachment.googleusercontent.com/attachment/u/0/?ui=2&ik=f6bffc90ab&attid=0.1&permmsgid=msg-a:r-2595450270934863741&th=17c7aea0f2acbfb0&view=att&disp=inline&realattid=f_kupujuva0&saddbat=ANGjdJ_-l1TNUS4ymlXcAjVY67Wlz44ZVFL-5yVXL-OY3hwWVWjZY-iFwh9Ulp2cUySUSd8Y1DpgeQVHyY6ci4nIpUniJMjMGUn6mVB0-2Rald2EDWJEmtr-I76W-s5BywR1oKtJHca9cItLLmY6TWyiY5Bf7mAvRxT-sF-CFg5hrpOa2EXFQCJ3UdaoaPEG6lteUj8sbZ3ZZkjrErh7yoy-qUqEVoChrnazMT9yUn9JZZqsAOp-BuU7nQXv0oaWoBZ5X3357GvyzAu4v6IKl112wbR9QrIryHG3IGvzsbdp1Hir0ZuhDfU8VPjUJH6E6gh2nVAESXeo0tpRGsj-gyBT6Rta_l6l0aDm5AK06aYpmPPn6rBlJEd5jdmg6X870VjmcGn4vCEgcP854hF2bf9zgmYPIMTUJ_kjdlkWNcpNljl11h3QWv8_vxoWQEQeCF3KSz0iKCACdXmxT417JWRAHfLd8zicywa8ot1Y3JnS0xEJKeypOV24pt-CKxu4MXcQfqdYSrnB5PVRy2ms1wOSruxMF6k1XfjFRm4J66_3PzET80SnvE07zeQQ2u6zVQNkIZXERibkDVG7MhTGoBsa1OC5aAlRVLD30bSU2zo3-AXUMniIm_bZMpjYqRbWFtQRqN7R01g5UBf_2xt0vjuWGXGV75ZGBzwMnVGJxtlUUULQTh6u7b4PlG4yl2c" target="_blank" className="fa fa-folder"></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Intro