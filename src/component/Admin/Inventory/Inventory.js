import React, { Component } from 'react'
import ItemRow from '../ItemRow/ItemRow'
import './Inventory.css'

// import axios from 'axios'
class Inventory extends Component { 
   render() {
        return (
            <div className='Inventory xsm-container'>
                <h1 className='Inventory-title'>Inventory</h1>
                <table cellSpacing="0" cellPadding="0" >
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
                        {this.props.products.map( curr => (
                                <ItemRow 
                                    id = {curr.id}
                                    name = {curr.name}
                                    qty = {curr.qty}
                                    deleteProductFn= {this.props.deleteProductFn}
                                    updateProduct= {this.props.updateProduct}
                                    getUpdateBody= {this.props.getUpdateBody}
                                    showEditItem= {this.props.showEditItem}
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