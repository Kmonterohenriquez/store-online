import React, { Component } from 'react'
import ItemRow from '../ItemRow/ItemRow'

import axios from 'axios'
class Inventory extends Component {
    state = { 
        products: []
     }

    componentDidMount(){
        axios.get('/api/products')
        .then(res =>{
            console.log('getting products:', res)
            const products = res.data;
            this.setState({ products })
        })
    }

    render() {
        return (
            <div className='Inventory-container'>
                <h1>Inventory</h1>
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th></th>
                        <th></th>
                    </tr>
                    {this.state.products.map( curr => (
                        <ItemRow 
                            id = {curr.id}
                            name = {curr.name}
                            qty = {curr.qty}
                        /> 
                    )
                    )}
                    
                </table>
            </div>
        );
    }
}

export default Inventory;