const express = require('express')
const app = express()

//app.get - Read data
app.get('/', (req,res)=>{
    res.send('HI! This is home page')
})

app.get('/about', (req,res)=>{
    res.send('HI! This is ABout Us page')
})

//app.post - Insert data
//app.delete - Delete data
//app.put - Update data


//app.all - all
app.all('*', (req,res)=>{
    res.status(404).send('resource not found!')
})

//app.use


//app.listen
app.listen(5000, ()=>{
    console.log('Server is listening on port: 5000')
})