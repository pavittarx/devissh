import React from "react";
import "./Container.scss";

function Container({ children, backcolor }:any){
    return <div style={{backgroundColor: backcolor}}>
            <div className="Container">
                {children}
            </div>
        </div>;
}

export default Container;