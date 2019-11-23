import React, { Component } from 'react'
import ItemRow from '../ItemRow/ItemRow'
import './Inventory.css'

import axios from 'axios'
class Inventory extends Component {
    state = { 
        products: []
     }
    
    getProducts(){
        axios.get('/api/products')
        .then(res =>{
            console.log('getting products:', res.data)
            const products = res.data;
            this.setState({ products })
        })
        .catch( err => console.log(err))
    }
    componentDidMount(){
        this.getProducts();
    }

    render() {
        return (
            <div className='Inventory xsm-container'>
                <h1 className='Inventory-title'>Inventory</h1>
                <table cellspacing="0" cellpadding="0" >
                    <thead>
                        <tr id='head-row'>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.products.map( curr => (
                                <ItemRow 
                                    id = {curr.id}
                                    name = {curr.name}
                                    qty = {curr.qty}
                                    getProductsFn= {this.getProducts}
                                /> 
                                )
                        )}
                    </tbody>
                    
                </table>
            </div>
        );
    }
}

export default Inventory;