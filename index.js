require('dotenv').config();
const express = require('express');
const routes = require('./src/routes/index');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./src/db/db');
const checkStatus = require('./src/utils/checkStatus');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to the database
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


setInterval(checkStatus, 300000); // 5 minutes


// Routes
app.use('/api', routes);
app.use(bodyParser.json());

// Static files
// app.use(express.static('public'));



console.log('PORT:', process.env.PORT);
console.log('MONGODB_URI:', process.env.MONGODB_URI);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
