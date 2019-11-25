import React, {Component} from 'react'
import '../AddNewItem/AddNewItem.css'

class EditItem extends Component {

    constructor(props){
        super(props);
        this.state = {
            newName: props.updateBody.name || '',
            newPrice: 0,
            newQty: props.updateBody.qty || '',
            newDescription: '',
        }
    }

    changeHandler = (e) => {
        if(e.target.name === 'name'){
            this.setState({ newName: e.target.value })
        }
        if(e.target.name === 'price'){
            this.setState({ newPrice: e.target.value })
        }
        if(e.target.name === 'qty'){
            this.setState({ newQty: e.target.value })
        }
        if(e.target.name === 'description'){
            this.setState({ newDescription: e.target.value })
        }
    }

    editItemSubmit =()=> {

        const { newName, newPrice, newQty, newDescription } = this.state;
        let productUpdated={
            newName,
            newPrice ,
            newQty,
            newDescription
        };
        if(this.props.updateBody.id) {
            this.props.updateProduct(this.props.updateBody.id, productUpdated);
        } else {
            alert('Please select an item to edit')
        }
        
    }

    render() {
        return (
            <div className='EditItem xsm-container'>
                <h1 className='EditItem-title'>Edit item</h1>
                
                <form onSubmit={this.editItemSubmit}>
                    <div className='block'>
                        <label>Name</label>
                        <input type='text' name='name' placeholder= {this.props.updateBody.name || 'Enter Item Name'} onChange = {this.changeHandler}/>
                    </div>
                    <div className='block'>
                        <label>Qty</label>
                        <input type='number' min='0' max='100' name='qty' placeholder={ this.props.updateBody.qty || 'Enter Qty'} onChange = {this.changeHandler}/>
                    </div>
                    <div className='block'>
                        <label>Description</label>
                        <input type='text' name='description' placeholder='Enter Desctiption' onChange = {this.changeHandler}/>
                    </div>
                    <div className='block btn-block'>
                        <button type='submit' className='add-btn btn'> Save </button>
                    </div>
                </form>
            
            </div>
        );
    }
}

export default EditItem;