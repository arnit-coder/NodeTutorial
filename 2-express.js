const express = require('express')
const path = require('path')

const app = express()


app.use(express.static('./public'))
// app.use(express.static('./navbar-app'))


// app.get('/', (req, res)=>{
//     res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
// })

app.get('*', (req, res)=>{
    res.status(404).send('Resource Not Found')
})

app.listen(5000, ()=>{
    console.log('Server running on port: 5000')
})