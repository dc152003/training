// const express = require('express');
// const mongoose = require('mongoose');

// const cors = require('cors');
// const bodyParser = require('body-parser');

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// // MongoDB connection
// mongoose.connect('mongodb://localhost:27017/shoppingdb', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// // Product Schema
// const Product = mongoose.model('productList', {
//   _id: Number,
//   pName: String,
//   pPrice: Number,
//   pBrand: String,
//   pIsInStock: Boolean
// });

// // Routes
// app.get('/api/products', async (req, res) => {
//   const products = await Product.find();
//   res.json(products);
// });

// app.post('/api/products', async (req, res) => {
//   const product = new Product(req.body);
//   await product.save();
//   res.json(product);
// });

// app.put('/api/products/:id', async (req, res) => {
//   const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
//   res.json(updated);
// });

// app.delete('/api/products/:id', async (req, res) => {
//   await Product.findByIdAndDelete(req.params.id);
//   res.json({ message: 'Deleted successfully' });
// });

// app.listen(3000, () => console.log('Server running on http://localhost:3000'));


const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { MongoClient, ObjectId } = require('mongodb');

const app = express();
app.use(cors()); // Allow requests from Angular frontend
app.use(bodyParser.json());

// MongoDB connection URI
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

// Database and collection
let db, productsCollection;

async function connectDB() {
    try {
        await client.connect();
        db = client.db('shoppingdb'); // ✅ Database name
        productsCollection = db.collection('productList'); // ✅ Collection name
        console.log("✅ Connected to MongoDB");
    } catch (error) {
        console.error("❌ DB connection failed", error);
    }
}
connectDB();

// CREATE - Add new product
app.post('/products', async (req, res) => {
    try {
        const result = await productsCollection.insertOne(req.body);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// READ - Get all products
app.get('/products', async (req, res) => {
    try {
        const products = await productsCollection.find().toArray();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// READ - Get single product by ID
app.get('/products/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const query = isNaN(id) ? { _id: new ObjectId(id) } : { _id: parseInt(id) };

        const product = await productsCollection.findOne(query);
        if (!product) return res.status(404).json({ message: "Product not found" });
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// UPDATE - Modify product by ID
app.put('/products/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const query = isNaN(id) ? { _id: new ObjectId(id) } : { _id: parseInt(id) };

        const result = await productsCollection.updateOne(
            query,
            { $set: req.body }
        );

        if (result.matchedCount === 0) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// DELETE - Remove product by ID
app.delete('/products/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const query = isNaN(id) ? { _id: new ObjectId(id) } : { _id: parseInt(id) };

        const result = await productsCollection.deleteOne(query);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});