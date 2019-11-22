import React, { Component } from 'react'

import AdminNav from '../../component/Admin/AdminNav/AdminNav'
import Inventory from '../../component/Admin/Inventory/Inventory'
import AddNewItem from '../../component/Admin/AddNewItem/AddNewItem'
class AdminSystem extends Component {
    // state = {  }
    render() {
        return (
            <div>
                <AdminNav />
                <Inventory />
                <AddNewItem />
                
            </div>
        );
    }
}

export default AdminSystem;