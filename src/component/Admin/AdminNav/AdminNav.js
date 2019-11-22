import React, { Component } from 'react'
import './AdminNav.css'

class AdminNav extends Component {
    state = {  }
    render() {
        return (
            <div className='Navbar'>
                <div className=' Navbar-container container'>
                    <div id='logo'>
                    <p><i class="fab fa-bity"></i>Admin Section</p>
                    </div>
                    <nav>
                        <ul>
                            <li><a>Home</a></li>
                            <li><a>sign out</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}

export default AdminNav;