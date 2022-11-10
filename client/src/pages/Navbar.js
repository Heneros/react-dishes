import React from 'react';
import { Link } from 'react-router-dom';



function Navbar() {
    return (
        <ul className='navbar'>
            <li>
                <Link to="/productscoldsnacks">ColdSnacks</Link>
            </li>
        </ul>
    )
}
export default Navbar;
