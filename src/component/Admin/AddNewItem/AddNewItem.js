import React, { Component } from 'react'
import axios from 'axios'
import './AddNewItem.css'
class AddNewItem extends Component {
    state ={
        name:'',
        price:0,
        qty: 0,
        description: ''
    }

    changeHandler = (e) => {
        if(e.target.name === 'name'){
            this.setState({ name: e.target.value })
        }
        if(e.target.name === 'price'){
            this.setState({ price: e.target.value })
        }
        if(e.target.name === 'qty'){
            this.setState({ qty: e.target.value })
        }
        if(e.target.name === 'description'){
            this.setState({ description: e.target.value })
        }
    }


    handleSubmit =()=> {
        // e.preventDefault();
        const { name, price, qty, description }= this.state;
        let newProduct={
            name,
            price,
            qty,
            description
        };

        axios.post('/api/products', newProduct)
        .then(
            console.log("Product created"))
        .catch( error => console.log(error))       
    }

    render() {
        return (
            <div className='AddNewItem xsm-container'>
                <h1 className='AddNewItem-title'>Add new item</h1>
                
                <form onSubmit={this.handleSubmit}>
                    <div className='block'>
                        <label>Name</label>
                        <input type='text' name='name' placeholder='Enter Item Name' onChange = {this.changeHandler}/>
                    </div>
                    <div className='block'>
                        <label>Qty</label>
                        <input type='text' name='qty' placeholder='Enter Qty' onChange = {this.changeHandler}/>
                    </div>
                    <div className='block'>
                        <label>Description</label>
                        <input type='text' name='description' placeholder='Enter Desctiption' onChange = {this.changeHandler}/>
                    </div>
                    <div className='block btn-block'>
                        <button type='submit' className='add-btn btn'> Add </button>
                    </div>
                </form>
            
            </div>
        );
    }
}

export default AddNewItem;
