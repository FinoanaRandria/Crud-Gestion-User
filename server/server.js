const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')


const app = express();
const Port = 3002;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors())

app.listen(Port, ()=>{
    console.log(`Server Is Runing on ${Port}`);
})