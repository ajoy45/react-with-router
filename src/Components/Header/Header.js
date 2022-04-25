import React from 'react';
import { Link } from "react-router-dom";
import CustomeLink from '../CustomeLink/CustomeLink';
import './Header.css'
const Header = () => {
    return (
        <div>
            <h1>Welcome to React Router Header!</h1>
            <nav className='navbar'>
                <CustomeLink className='navitem' to='/'>Home</CustomeLink>
                <CustomeLink className='navitem' to="/about">About</CustomeLink>
                <CustomeLink className='navitem' to="/friends">Friends</CustomeLink>  
            </nav>
        </div>
    );
};

export default Header;