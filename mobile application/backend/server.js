const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/banking', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define schema
const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const User = mongoose.model('usercredentials', UserSchema);

// Auth endpoint
// app.get('/api/authenticate', async (req, res) => {
//   const { username, password } = req.query;
//   const user = await User.findOne({ username, password });
//   res.json({ success: !!user });
// });

app.post('/api/authenticate', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username, password });
  res.json({ success: !!user });
});


app.listen(3000, () => {
  console.log('✅ Backend running on http://localhost:3000');
});