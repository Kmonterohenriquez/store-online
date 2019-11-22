import React from 'react'

class ItemRow extends React.Component{
render(){
    return(
        <tr>
            <td>{this.props.id}</td>
            <td>{this.props.name}</td>
            <td>{this.props.qty}</td>
            <td><button>Edit</button></td>
            <td><button>Delete</button></td>
        </tr>
    )
}
}

export default ItemRow