const express = require('express')
const router = express.Router()

// All authors Route
router.get('/', (req, res) =>{
    res.render('index')
})

//New author route
router.get('/new', (req, res) => {
    res.render('authors/new')
})

//create author route
router.post('/', (req, res) => {
    res.send('Create')
})

module.exports = router