import React, { Component } from 'react'

class Inventory extends Component {
    state = {  }
    render() {
        return (
            <div className='Inventory-container'>
                <table>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Description</th>
                    </tr>
                    {/* Map Items to be inserted into the table */}
                    <tr>
                        <td>Jill</td>
                        <td>Smith</td>
                        <td>50</td>
                        <td>dsadasd</td>
                    </tr>
                    {/* Map Ends */}
                </table>
            </div>
        );
    }
}

export default Inventory;