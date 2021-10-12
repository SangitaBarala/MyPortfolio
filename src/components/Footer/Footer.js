import React from 'react';
import './footer.scss'

const Footer = () => {
    return (
        <div className="footer">
            <div>
                <a href="https://github.com" className="fa fa-github" target="_blank"></a>
                <a href="https://www.linkedin.com/in/sangita-barala-854854205/" className="fa fa-linkedin" target="_blank"></a>
                <a className="fa fa-folder" target="_blank"></a>
            </div>
            <div className="copyright">
                <h3>MyReactPortfolio&copy;2021</h3>
            </div>
            <div>
                <h3>Sangitakhatkar.0425@gmail.com</h3>
            </div>
        </div>
    );
};

export default Footer;