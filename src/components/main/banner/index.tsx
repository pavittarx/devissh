import React from 'react';
import FlexContainer from "utils/flex-container"
import Button from "utils/button";
import {ReactComponent as Email} from "assets/icons/mail.svg";
import {ReactComponent as Phone} from "assets/icons/phone.svg";
import './Banner.scss';

function Banner(){
    return <div className="banner">
       <div className="left">
           <div className="quotes">
               <div className="quote-head">
               We do it for you,<br/>so you don’t have to.
               </div>
               <div className="quote-body">
               We build websites. apps and <br/>market them for you.
               </div>
               <Button>Hire us </Button>
           </div>
       </div>
       <div className="right">
           <div className="contact-details">
               <FlexContainer>
                   <Email/>
                   <div className="val">hey@devissh.com</div>
               </FlexContainer>
               <FlexContainer>
                   <Phone/>
                   <div className="val">9012090000</div>
               </FlexContainer>
           </div>
       </div>
    </div>;
}

export default Banner;