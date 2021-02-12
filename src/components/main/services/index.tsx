import React from 'react';

import FlexContainer from "utils/flex-container";
import './Services.scss';

function Services(){
    return <div className="Services">
                <div className="Quote">
                    <div className="head">
                    Professional and Reliable
                    </div>
                    <div className="title">
                    We build professional grade websites and apps. 
                    </div>
                    <div className="body">
                    We cater to small and medium size businesses, help them create an online presence. And, be heard in the right spaces.
                    </div>
                </div>
            <FlexContainer>
                <div className="building_web">
                </div>
                <div className="Quote">
                    <div className="title">
                    Web Development 
                    </div>
                    <div className="body">
                    At Devissh, we build websites that are secure, reliable and in-line with your business needs. 
                    </div>
                </div>
            </FlexContainer>
            <FlexContainer>
                <div className="Quote">
                    <div className="title">
                    App Development
                    </div>
                    <div className="body">
                    In this fast pacing world, if you are looking for an app to meet your specific business needs. We are here for you. 
                    </div>
                </div>
                <div className="mobile_app">
                </div>
               
            </FlexContainer>
            <FlexContainer>
                <div className="social_network">
                </div>
                <div className="Quote">
                    <div className="title">
                    Digital Marketing
                    </div>
                    <div className="body">
                    Building an online presence takes much more than having an app. Every business understand the need to be visible to their potential clients.  
                    </div>
                </div>
            </FlexContainer>
        </div>;
}

export default Services;