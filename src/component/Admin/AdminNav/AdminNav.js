import React, { Component } from 'react'
import './AdminNav.css'
import { Link } from 'react-router-dom'

class AdminNav extends Component {
    state = {  }
    render() {
        return (
            <header className='Navbar'>
                <div className=' Navbar-container container'>
                    <div id='logo'>
                    <p><i class="fas fa-dice-d20"></i>Admin Center</p>
                    </div>
                    <nav>
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li>sign out</li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}

export default AdminNav;