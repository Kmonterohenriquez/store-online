import React, { Component } from 'react'
// import axios from 'axios'
import './Home.css'
import Navbar from '../../component/Navbar/Navbar/Navbar'
import ItemContainer from '../../component/ItemContainer/ItemContainer'
import bg from '../../img/main-bg.png'
import Footer from '../../component/Footer/Footer'

class Home extends Component {
    state = {  }
    
    render() {
        return (
            <div className='Home'>
                <Navbar/>
                <ItemContainer/>
                <img src={bg} alt='background'/>
                <Footer />
            </div>
        );
    }
}

export default Home;