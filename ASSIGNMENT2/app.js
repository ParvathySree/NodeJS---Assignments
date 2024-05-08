const express = require('express')
const app = express();

const port = 3000;

// app.use((req,res,next)=>{
//     console.log("Hello 1")
//     next();
// })

// app.use((req,res,next)=>{
//     console.log("Hello 2")
//     res.send('<h1>Hey there!</h1>')
// })

app.use('/users',(req,res,next)=>{
    res.send('<h1>Hey Users!</h1>')
})

app.use('/',(req,res,next)=>{
    res.send('<h1>Hey!</h1>')
})

app.listen(port,()=>{
    console.log(`Server started at port ${port}`)
})