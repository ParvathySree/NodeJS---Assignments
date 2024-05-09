const express = require('express')
const app = express()
const port = 3000;

const bodyParser = require('body-parser')
const path = require('path');
const usersRoute = require('./routes/users')
const allRoute = require('./routes/page')

app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'public')))
app.use('/user',usersRoute);
app.use(allRoute);

app.use((req,res,next) =>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})

app.listen(port,()=>{
    console.log(`Server started at port ${port}`)
})