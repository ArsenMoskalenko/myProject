import React from 'react';

const Nav = () => {
    return (
      <nav className="nav">
        <div>
          <a href="#">profile</a>
        </div>
        <div> 
          <a href="#">messages</a>
        </div>
        <div>
          <a href="#">contact me</a>
        </div>
        <div>
          <a href="https://www.instagram.com/_black.bir4_/?hl=ru">
            <img src="https://marjanvanaubel.com/wp-content/uploads/2019/11/instagram-logo.png"/>
          </a>
          <a href="https://www.facebook.com/profile.php?id=100017625334432&ref=bookmarks"><img src="https://image.flaticon.com/icons/svg/1051/1051360.svg"/> </a>
        </div>
      </nav>
     );
    }

export default Nav;