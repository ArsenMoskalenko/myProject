import React from 'react';

const Header = () => {
    return (
      <div className="header">
        <img src="https://image.flaticon.com/icons/svg/2702/2702614.svg"/>
        <p className="pPort">MyPortfolio</p>
        <ul className="ulWraper">
          <li>
          <a href="#s">Home</a>
          </li>
          <li>
          <a href="#s">News feed</a>
          </li>
          <li>
          <a href="#s">Messages</a>
          </li>
        </ul>
    </div>
    );
  }

export default Header;