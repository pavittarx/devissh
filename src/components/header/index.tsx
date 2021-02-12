import React from 'react';
import './Header.scss';

function Header(){
    return <div className="header">
        <div className="logo">
            <div className="icon"><img src="./logo.png" alt="Devissh"/></div>
            <div className="ic_name">Devissh</div>
        </div>
        <div className="navlist">
            <div className="item">Blogs</div>
            <div className="item"><a href="#service" >Services</a></div>
            <div className="item"><a href="#contact" > Contact </a></div>
        </div>
    </div>;
}

export default Header;