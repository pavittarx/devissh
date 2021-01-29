import React from 'react';

function Header(){
    return <div className="header">
        <div className="logo">
            <div className="icon"></div>
            <div className="name">Devissh</div>
        </div>
        <div className="navlist">
            <div>Blogs</div>
            <div>Services</div>
            <div>Contact</div>
        </div>
    </div>;
}

export default Header;