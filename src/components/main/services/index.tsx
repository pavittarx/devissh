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
                <div></div>
            </FlexContainer>
        </div>;
}

export default Services;