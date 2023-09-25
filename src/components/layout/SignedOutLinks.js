import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => {
    return (
        <ul className="right">
             <li>
                <NavLink to="/">ТОВАРЫ</NavLink>
            </li>
            {/* <li>
                <NavLink to="/signup">РЕГИСТРАЦИЯ</NavLink>
            </li> */}
            <li>
                <NavLink to="/signin">ВОЙТИ</NavLink>
            </li>
            {/* <li>
                <NavLink to="/"> Projects</NavLink>
            </li> */}
           
        </ul>
    );
}

export default SignedOutLinks;