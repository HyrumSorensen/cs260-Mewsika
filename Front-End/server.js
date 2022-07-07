require('dotenv').config()
const path = require('path')
const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 6900
const {seed, createSong} = require('./controller.js')

app.use(express())
app.use(cors())

//here is the portion with all my files
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './home.html'))
})
app.get('/css', (req, res) => {
    res.sendFile(path.join(__dirname, '/home.css'))
})
app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, '/home.js'))
})
app.get('/keyboard', (req, res) => {
    res.sendFile(path.join(__dirname, '/keyboard.html'))
})
app.get('/mySongs', (req, res) => {
    res.sendFile(path.join(__dirname, '/mySongs.html'))
})
app.get('/generator', (req, res) => {
    res.sendFile(path.join(__dirname, '/generator.html'))
})
app.get('/aboutme', (req, res) => {
    res.sendFile(path.join(__dirname, '/aboutme.html'))
})
app.get('/mysongscss', (req, res) => {
    res.sendFile(path.join(__dirname, '/mySongs.css'))
})
app.get('/mysongsjs', (req, res) => {
    res.sendFile(path.join(__dirname, '/mySongs.js'))
})


//here are the functions dealing with my database
app.post('/seed', seed)

app.post('/songs', createSong)


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})