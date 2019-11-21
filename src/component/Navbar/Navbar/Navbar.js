import React from 'react'
import './Navbar.css'

function Navbar(){
    return(
        <div className='Navbar'>
            <div className=' Navbar-container container'>
                <div id='logo'>
                    <i class="fab fa-bity"></i>
                </div>
                <nav>
                    <ul>
                        <li><a>Home</a></li>
                        <li><a>user</a></li>
                        <li><a>About Us</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar