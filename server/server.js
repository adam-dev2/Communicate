const express = require('express')
const cors = require('cors')
require('dotenv').config();

const authRoutes = require('./routes/authRoutes')
const connectDB = require('./config/db');
const bodyParser = require('body-parser');

connectDB();

const PORT = process.env.PORT || 5001;
const app = express();


app.use(cors());
app.use(bodyParser.json())
app.use('/auth',authRoutes);
app.listen(PORT,()=>{
    console.log(`Server is running on port: ${PORT}`)
})