import React from "react";
import "./Input.scss";

function Input({type, placeholder, icon}:any){
    return <div className="InContainer">
        <div className="Area">
        <input type={type} placeholder={placeholder} />
        </div>
        <div className="Icon">{icon}</div>
    </div>;
}

export default Input;