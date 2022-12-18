const express = require('express')
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')
//If i want all these constants in my about page also then i would have to copy it hence The concept of middleware used!!

//In app.use order matters if i write app.use after Home then logger function will not be used with Home page....... 

// app.use(logger)
// app.use('/api', logger)
app.use([logger, authorize])
//order in the array matters

app.get('/', (req, res)=>{

    res.send('Home')
})

app.get('/about', (req, res)=>{
    res.send('About')
})

app.get('/api/products', (req, res)=>{
    res.send('Products')
})

app.get('/api/items', (req, res)=>{
    res.send('Items')
})

app.listen(5000, ()=>{
    console.log('Server listening on port: 5000')
})