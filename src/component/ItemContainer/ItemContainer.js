import React, { Component } from 'react'
import axios from 'axios'
import SingleItem from '../SingleItem/SingleItem'

class ItemContainer extends Component {
    state = {  
        products: []
    }
    getItems(){
        axios.get('/api/products')
        .then( res => (
            let products = res.data;
            this.setState({ products})
        ))
    }
    componentDidMount(){
        this.getItems()
    }
    render() {
        return (
            <div className='ItemContainer '>
                <div className='xsm-container grid-container'>
                    <SingleItem />
                </div>
            </div>
        );
    }
}

export default ItemContainer;