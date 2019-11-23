import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
function Navbar(){
    return(
        <div className='Navbar'>
            <div className=' Navbar-container container'>
                <div id='logo'>
                    <i class="fas fa-dice-d20"></i>
                </div>
                <nav>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/admin'>Admin</Link></li>
                        <li><a>About Us</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar