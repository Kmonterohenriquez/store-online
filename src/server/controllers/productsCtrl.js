const products = require('../products');
let id = 6;

module.exports = {
    getProducts(req, res){
        res.status(200).send(products);
    },
    getSingleProduct(req, res){
        const { id } = req.params;
        const index = products.findIndex(curr => curr.id === +id);
        res.status(200).send(products[index])
    },
    createProduct(req, res){
        const {name, price, description, qty} = req.body;
        let newProduct = {
            id: id++,
            name,
            price,
            description,
            qty,
        }
        // console.log(req.body)
        // console.log(req.body.name)
        products.push(newProduct);
        res.status(200).send(products);
    },
    updateProduct(req, res){
        const { id } = req.params;
        const { newName, newPrice, newDescription, newQty } = req.body;
        console.log(id)
        console.log(newName)
        const index = products.findIndex(curr => curr.id === +id);

        products[index].name = newName;
        products[index].price = newPrice;
        products[index].description = newDescription;
        products[index].qty = newQty;

        res.status(200).send(products);
    },
    deleteProduct(req, res){
        const { id } =req.params;
        const index = products.findIndex(curr => curr.id === +id);
        products.splice(index, 1);
        res.status(200).send(products)
    } 
}

