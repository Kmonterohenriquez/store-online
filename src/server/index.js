const express = require('express');
const productsCtrl = require('../server/controllers/productsCtrl')

const app = express();

const PORT = 4000;

app.use(express.json());

// Destructoring Functions from Products
const { getProducts, getSingleProduct, createProduct, updateProduct, deleteProduct } = productsCtrl;
        
// Endpoints
app.get('/api/products', getProducts);
app.get('/api/product/:id', getSingleProduct)
app.post('/api/products', createProduct);
app.put('/api/product/:id', updateProduct);
app.delete('/api/product/:id', deleteProduct);

app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));