import React from 'react'
import axios from 'axios'
import '../Inventory/Inventory.css'

class ItemRow extends React.Component{

deleteItem =(e)=> {
    e.preventDefault();
    axios.delete(`/api/product/${this.props.id}?`)
    .then(console.log('item deleted'))
    .catch( error => console.log(error))
    {this.props.getProductsFn()}
}

Edit =()=> {

}
render(){
    return(
       
        <tr id={this.props.id}>
            <td>{this.props.id}</td>
            <td>{this.props.name}</td>
            <td>{this.props.qty}</td>
            <td><button className='edit-btn btn'>Edit</button></td>
            <td><button className='delete-btn btn'onClick={this.deleteItem}>Delete</button></td>
        </tr>
        
    )
}
}

export default ItemRow