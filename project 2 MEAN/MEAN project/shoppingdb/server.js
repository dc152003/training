const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { MongoClient } = require("mongodb");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
const uri = "mongodb+srv://devaanshi:Password!1234@myshopping-cluster.global.mongocluster.cosmos.azure.com/?tls=true&authMechanism=SCRAM-SHA-256&retrywrites=false&maxIdleTimeMS=120000"
//const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);

let db, productsCollection;

// Utility: Convert _id safely (since it's a number, not ObjectId)
function getQueryById(id) {
  const parsedId = parseInt(id);
  return isNaN(parsedId) ? null : { _id: parsedId };
}

async function startServer() {
  try {
    // Connect to DB
    await client.connect();
    db = client.db("shopping");               // your DB
    productsCollection = db.collection("productlist"); // your collection
    console.log("Connected to MongoDB");

    // Root test route
    app.get("/", (req, res) => {
      res.send("API is running...");
    });

    // Add new product
    app.post('/products', async (req, res) => {
      try {
        const product = req.body;

        // Ensure _id is an integer
        if (typeof product._id !== 'number') {
          return res.status(400).json({ error: "_id must be an integer" });
        }

        const result = await productsCollection.insertOne(product);
        res.status(201).json({ message: "Product created", data: result });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });

    // Get all products
    app.get("/products", async (req, res) => {
      try {
        const products = await productsCollection.find().toArray();
        res.json(products);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    });


    // Update product
    app.put('/products/:id', async (req, res) => {
      try {
        const query = getQueryById(req.params.id);
        if (!query) return res.status(400).json({ error: "Invalid product ID" });

        const result = await productsCollection.updateOne(query, { $set: req.body });
        if (result.matchedCount === 0) {
          return res.status(404).json({ message: "Product not found" });
        }

        res.json({ message: "Product updated", data: result });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });

    // Delete product
    app.delete('/products/:id', async (req, res) => {
      try {
        const query = getQueryById(req.params.id);
        if (!query) return res.status(400).json({ error: "Invalid product ID" });

        const result = await productsCollection.deleteOne(query);
        if (result.deletedCount === 0) {
          return res.status(404).json({ message: "Product not found" });
        }

        res.json({ message: "Product deleted", data: result });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });

    // Start server
    const PORT = 3000;
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });

  } catch (error) {
    console.error("DB connection failed:", error.message);
    process.exit(1);
  }
}

startServer();
