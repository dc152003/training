const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/shopping', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Unified schema for both products and users
const ProductSchema = new mongoose.Schema({
  _id: Number,
  pName: String,
  pPrice: Number,
  pBrand: String,
  pIsInStock: Boolean,
  username: String,
  password: String
});

const Product = mongoose.model('productlist', ProductSchema);


// CREATE - Add new product
app.post('/api/products', async (req, res) => {
  try {
    const product = new Product(req.body);
    const result = await product.save();
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// READ - Get all products
app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find({ pName: { $exists: true } });
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// READ - Get single product by ID
app.get('/api/products/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product || !product.pName) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// UPDATE - Modify product by ID
app.put('/api/products/:id', async (req, res) => {
  try {
    const result = await Product.updateOne({ _id: req.params.id }, { $set: req.body });
    if (result.matchedCount === 0) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE - Remove product by ID
app.delete('/api/products/:id', async (req, res) => {
  try {
    const result = await Product.deleteOne({ _id: req.params.id });
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});