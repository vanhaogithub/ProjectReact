import React from 'react';
import { Link } from 'react-router-dom'

function Menu() {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/members'>Members</Link></li>
                    <li><Link to='/schedule'>Schedule</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Menu;