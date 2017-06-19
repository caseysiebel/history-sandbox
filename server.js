const express = require('express')
const app = express()
const logger = require('morgan')

app.use(logger('dev'))

app.get('/square', (req, res) => res.send('square'))
app.get('/circle', (req, res) => res.send('circle'))

app.use(express.static(__dirname + '/public'))

app.listen(3000, () => console.log('running'))
