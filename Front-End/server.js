require('dotenv').config()
const path = require('path')
const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 4005

app.use(express.json)

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './home.html'))
})
app.get('/css', (req, res) => {
    res.sendFile(path.join(__dirname, './home.css'))
})
app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, './home.js'))
})


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})