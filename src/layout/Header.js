/* Header.js */
import React from 'react';
import logo from "../image/FW_logo.jpg";



const Header = () => {
  return (
    <header>

        <div className='nav-head'>
            <div className='mainlogo'>
                <img src={logo} width= '30px' />
            </div>
            <ul>
                <li><a href='/'>애견용품</a></li>
                <li><a href='/board'>커뮤니티</a></li>
                <li><a href='/board'>내정보</a></li>
            </ul>

        </div>
    </header>
  );
};

export default Header;