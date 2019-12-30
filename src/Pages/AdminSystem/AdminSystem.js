import React, { Component } from 'react'
import axios from 'axios'

import AdminNav from '../../component/Admin/AdminNav/AdminNav'
import Inventory from '../../component/Admin/Inventory/Inventory'
import AddNewItem from '../../component/Admin/AddNewItem/AddNewItem'
import EditItem from '../../component/Admin/EditItem/EditItem'
import Footer from '../../component/Footer/Footer'

class AdminSystem extends Component {
    constructor(props){
        super(props);
        this.state = {  
            products: [],
            updateBody: {},
            editItem: false
            }
    }
  
    componentDidMount(){
        this.getProducts();
    }

    // Get Products
    getProducts=()=>{
        axios.get('/api/products')
        .then(res =>{

            const products = res.data;
            this.setState({ products })
        })
        .catch( err => console.log(err))
    }

    // Delete Product
    deleteProduct=(id)=>{
        this.setState({ id });
        axios.delete(`/api/product/${id}?`)
        .then(res => this.setState({products: res.data}))
        .catch( error => console.log(error))
    }

    //Update product
    updateProduct =(id, body )=> {
        console.log(id, body)
        axios.put(`/api/product/${id}`, body)
        .then(res => 
            this.setState({propducts: res.data}))
        .catch( error => console.log(error))     
    }
    getUpdateBody=(body)=>{
        this.setState({updateBody: body})
    }

    showEditItem=()=>{
        this.setState({ editItem: !this.state.editItem });
    }
    // const padding={

    // }
    render() {
        console.log('testing', this.state.updateBody)
        return (
            <div>
                <AdminNav />
                <div style={ {padding: 80}}>
                    {
                        this.state.editItem? 
                        <EditItem  
                            updateBody= {this.state.updateBody} 
                            updateProduct= {this.updateProduct} 
                            
                        />
                        :
                        <AddNewItem />
                    }
                </div>
                <Inventory 
                    products= {this.state.products}
                    deleteProductFn= {this.deleteProduct}
                    updateProduct= {this.updateProduct}
                    getUpdateBody= {this.getUpdateBody}
                    showEditItem= {this.showEditItem}
                />
                <Footer/>
                    </div>
        );
    }
}

export default AdminSystem;