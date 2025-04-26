const express = require('express')
const cors = require('cors')
// const session = require('express-session')
// const passport = require('passport')
require('dotenv').config();

const authRoutes = require('./routes/authRoutes')
const connectDB = require('./config/db');
// const intializeUser = require('./passportConfig');

connectDB();

const PORT = process.env.PORT || 5001;
const app = express();

app.use(cors());
app.use(express.json())

// app.use(session({
//     secret: process.env.SESSION_SECRET || "secret",
//     resave: false,
//     saveUninitialized: false
// }))

// intializeUser(passport); 
// app.use(passport.initialize());
// app.use(passport.session());

app.use('/auth',authRoutes);
app.listen(PORT,()=>{
    console.log(`Server is running on port: ${PORT}`)
})