import React, {Component}from 'react';
import './SingleItem.css'
import axios from 'axios'
class SingleItem extends Component {
    constructor(props){
        super(props)
        this.updateProduct= this.updateProduct.bind(this);
    }   

    updateProduct(e){
        // e.preventDefault();
        let newQty= this.props.qty - 1;
        axios.put(`/api/product/${this.props.id}`, {newQty} )
        .then(res => 
            this.setState({propducts: res.data}))
        .catch( error => console.log(error))     
    }
    render() {
        const {name , qty, id} = this.props;
        return (
            <div className='SingleItem' key={id}>
                <div className='SingleItem-picture'>

                </div>
                <div className='SingleItem-info'>
                    
                    <h1>{name}</h1>
                    <p>Available:  {qty}</p>
                    <button onClick={this.updateProduct}>Add item</button>
                </div>
            </div>
        );
    }
}

export default SingleItem;