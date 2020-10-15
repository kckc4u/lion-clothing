import React from 'react';
import {Link} from 'react-router-dom';

import './header.style.scss';
// import Logo from '../../assets/crown.svg';
// Use as <img src={Logo} alt="Lions" className="logo"/>
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';

const Header = ({currentUser}) => {
    return (
        <div className="header">
            <Link to="/" className="logo-container">
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link className="option" to="/shop">Shop</Link>
                <Link className="option" to="/shop">Contact</Link> 
                  
                {
                    currentUser ? 
                        <div className="option" onClick={() => { auth.signOut(); }}> Sign out</div> :
                        <Link className="option" to="/signin">Sign In</Link>

                }
            </div>
        </div>
    )
}

export default Header;