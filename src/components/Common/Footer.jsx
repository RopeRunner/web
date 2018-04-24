const logo = require('../../images/logo.png');

import React from 'react';

const Footer = () => {
    return (
        <div className="Footer" >
            <div className="FooterCopy">
                <p>&copy; 2018 Equinox. All rights reserved.</p>
            </div>
            <div className="FooterLogo">
                <img src={logo} alt="logo"/>
            </div>
        </div>
    )
}

export default Footer;