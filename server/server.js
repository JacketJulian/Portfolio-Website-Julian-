const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

const analyticsSchema = new mongoose.Schema({
  eventType: { type: String, required: true },
  eventData: { type: Object, required: true },
  timestamp: { type: Date, default: Date.now },
});

const Analytics = mongoose.model('Analytics', analyticsSchema);

app.post('/api/track', (req, res) => {
  const { eventType, eventData } = req.body;
  const newAnalytic = new Analytics({ eventType, eventData });

  newAnalytic.save()
    .then(() => res.json('Analytic event tracked!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
