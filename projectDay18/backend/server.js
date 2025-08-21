const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/authdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Define schema and model
const UserSchema = new mongoose.Schema({
  username: String,
  password: String
});
const User = mongoose.model('usercredentials', UserSchema);

app.get('/api/login', async (req, res) => {
  const { username, password } = req.query;
  const user = await User.findOne({ username, password });
  if (user) {
    res.json({ success: true, message: 'Login successful', userName: user.username });
  } else {
    res.json({ success: false, message: 'Invalid credentials' });
  }
});


app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
}); 


