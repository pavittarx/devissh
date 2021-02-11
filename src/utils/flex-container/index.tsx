import React from "react";
import "./FlexContainer.scss";

function FlexContainer({ children }:any){
    return <div className="FlexContainer">
        {children}
    </div>;
}

export default FlexContainer;