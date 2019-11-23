import React, {Component}from 'react';
import './SingleItem.css'
class SingleItem extends Component {
    state = {  }
    render() {
        const {name , qty} = this.props;
        return (
            <div className='SingleItem'>
                <div className='SingleItem-picture'>

                </div>
                <div className='SingleItem-info'>
                    
                    <h1>{name}</h1>
                    <p>Available:  {qty}</p>
                    <button>Add item</button>
                </div>
            </div>
        );
    }
}

export default SingleItem;