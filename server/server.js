const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const routes = require('./routes/users.route')

const app = express();
const Port = 3002;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors())
app.use('/',routes)
app.all('*',(req,res)=>{
     res.status(404).send('Route does not exist')
})
app.listen(Port, ()=>{
    console.log(`Server Is Runing on ${Port}`);
})