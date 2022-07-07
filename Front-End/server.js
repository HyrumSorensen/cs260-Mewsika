require('dotenv').config()
const path = require('path')
const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 6900
const {seed, createSong, getSongs, deleteSong} = require('./controller.js')

app.use(express())
app.use(cors())
app.use(express.json())



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
    res.sendFile(path.join(__dirname, './keyboard/keyboard.html'))
})
app.get('/keyboardcss', (req, res) => {
    res.sendFile(path.join(__dirname, './keyboard/keyboard.css'))
})
app.get('/keyboardjs', (req, res) => {
    res.sendFile(path.join(__dirname, './keyboard/keyboard.js'))
})
app.get('/generator', (req, res) => {
    res.sendFile(path.join(__dirname, './generator/generator.html'))
})
app.get('/generatorcss', (req, res) => {
    res.sendFile(path.join(__dirname, './generator/generator.css'))
})
app.get('/generatorjs', (req, res) => {
    res.sendFile(path.join(__dirname, './generator/generator.js'))
})
app.get('/aboutme', (req, res) => {
    res.sendFile(path.join(__dirname, './aboutme/aboutme.html'))
})
app.get('/aboutmecss', (req, res) => {
    res.sendFile(path.join(__dirname, './aboutme/aboutme.css'))
})
app.get('/aboutmejs', (req, res) => {
    res.sendFile(path.join(__dirname, './aboutme/aboutme.js'))
})
app.get('/mySongs', (req, res) => {
    res.sendFile(path.join(__dirname, '/mySongs.html'))
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

app.get('/songs', getSongs)

app.delete('/songs/:id', deleteSong)


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})