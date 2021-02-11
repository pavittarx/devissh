import React from "react";
import "./Button.scss";
import {ReactComponent as Continue} from "assets/icons/circle-arrow-right.svg";

function Button({ children }:any){
    return <button className="btn">
        {children}
        <div className="icon">  
        <Continue/>
        </div>
    </button>;
}

export default Button;