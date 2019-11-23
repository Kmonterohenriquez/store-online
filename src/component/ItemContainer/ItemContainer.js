import React, { Component } from 'react'
import axios from 'axios'
import SingleItem from '../../component/SingleItem/SingleItem'
import './ItemContainer.css'
// import bg from '../../img/main-bg.png'

class ItemContainer extends Component {
    state = {  
        products: []
    }
    getItems(){
        axios.get('/api/products')
        .then(res =>{
            console.log('getting products:', res.data)
            const products = res.data;
            this.setState({ products })
        })
        .catch( err => console.log(err))
    }
    componentDidMount(){
        this.getItems()
    }
    render() {
        
        return (
            <div className='ItemContainer '>
                {/* <div className='main-bg'>
                    <img src={bg} alt='background'/>
                </div> */}
                <div className='xsm-container grid-container'>
                    {this.state.products.map(item =>(
                        <SingleItem 
                            name = {item.name}
                            qty = {item.qty}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default ItemContainer;