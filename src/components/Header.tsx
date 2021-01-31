import React from 'react';

function Header(){
    return <div className="header">
        <div className="logo">
            <div className="icon"><img src="./logo.png" /></div>
            <div className="ic_name">Devissh</div>
        </div>
        <div className="navlist">
            <div className="item">Blogs</div>
            <div className="item">Services</div>
            <div className="item">Contact</div>
        </div>
    </div>;
}

export default Header;