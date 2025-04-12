const express = require('express');
const port = 3000;
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/api',(req,res)=> {
    res.status(200).json({message: "api is running"});
})

app.listen(port,()=>{
    console.log(`Server is up running on port: http://localhost:${port}/api`);
})