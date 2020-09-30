const express = require('express')
const route = express.Router()

route.get('/', (req, res) => {
    res.render('home.hbs')
})
route.get('/contact', (req, res) => {
    res.render('contact.hbs')
})
route.get('/service', (req, res) => {
    res.render('service.hbs')
})
module.exports = route