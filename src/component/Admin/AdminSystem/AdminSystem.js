import React, { Component } from 'react'

import AdminNav from '../AdminNav/AdminNav'
import Inventory from '../Inventory/Inventory'
class AdminSystem extends Component {
    state = {  }
    render() {
        return (
            <div>
                <AdminNav />
                <Inventory />
            </div>
        );
    }
}

export default AdminSystem;