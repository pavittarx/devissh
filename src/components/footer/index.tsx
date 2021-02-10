import React from 'react';

import Contact from './contact';
import {ReactComponent as Facebook} from "assets/icons/facebook.svg";
import {ReactComponent as LinkedIn} from "assets/icons/LinkedIn.svg";
import {ReactComponent as Whatsapp} from "assets/icons/whatsapp.svg";
import './Footer.scss';

function Footer(){
    return  <div>
        <Contact/>
        <div className="footer">
            <div className="illus"></div>
            <div className="social">
                <div className="icons">
                    <div><Facebook/></div>
                    <div><Whatsapp/></div>
                    <div><LinkedIn/></div>
                </div>
                <div className="email">
                    hey@devissh.com
                </div>
            </div>
            <div className="lower">
                <div className="copyright">
                    <div><span>(c)</span> 2021 Devissh</div>
                    <div>Terms and Conditions</div>
                </div>
            </div>
        </div>
    </div>;
}

export default Footer;