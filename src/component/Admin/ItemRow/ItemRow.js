import React from 'react'

import '../Inventory/Inventory.css'

class ItemRow extends React.Component{


    selectItem(item){
        let updateBody = {
            id: this.props.id,
            name: this.props.name,
            qty: this.props.qty,
        }
        this.props.getUpdateBody(updateBody);


        // Change Row color when is selected
        let element = document.getElementById(item)
        element.classList.add('active');
        console.log('item id is: ', item, typeof item)

        this.props.showEditItem();
    }
    render(){
    return(

        <tr key={this.props.id} id= {`${this.props.id}`}>
            <td>{this.props.id}</td>
            <td>{this.props.name}</td>
            <td>{this.props.qty}</td>
            <td><button className='edit-btn btn' onClick={()=>this.selectItem(`${this.props.id}`)}>Edit</button></td>
            <td><button className='delete-btn btn' onClick={()=>this.props.deleteProductFn(this.props.id)}>Delete</button></td>
        
        </tr>
        
    )
}
}

export default ItemRow