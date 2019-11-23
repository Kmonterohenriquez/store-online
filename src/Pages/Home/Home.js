import React, { Component } from 'react'
// import axios from 'axios'
import './Home.css'
import Navbar from '../../component/Navbar/Navbar/Navbar'
import ItemContainer from '../../component/ItemContainer/ItemContainer'
import bg from '../../img/main-bg.png'
class Home extends Component {
    state = {  }
    render() {
        return (
            <div className='Home'>
                {/* <img src={bg} alt='background'/> */}
                <Navbar/>
                <ItemContainer/>
                
                    <img src={bg} alt='background'/>
                
            </div>
        );
    }
}

export default Home;