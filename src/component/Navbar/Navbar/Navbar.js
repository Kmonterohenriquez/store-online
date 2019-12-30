import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar(){
    return(
        <header className='Navbar'>
            <div className=' Navbar-container container'>
                <div id='logo'>
                    <i class="fas fa-dice-d20"></i>
                </div>
                <nav>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/admin'>Admin</Link></li>
                        <li><Link to='/about'>About Us</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Navbar