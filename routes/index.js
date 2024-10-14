const express = require('express')
const router = express.Router()

router.get('/', (req,res) => {
    res.render('index')
})

//sending files between MVC
module.exports = router