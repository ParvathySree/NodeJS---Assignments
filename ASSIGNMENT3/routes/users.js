const express = require('express')
const router = express.Router();
const path = require('path')

const rootDir = require('../utils/path')

router.get('/add-user',(req,res,next) => {
    res.sendFile(path.join(rootDir,'views','add-user.html'))
})

router.post('/add-user',(req,res,next) => {
    res.redirect('/')
})

module.exports = router;