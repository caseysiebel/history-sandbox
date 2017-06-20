const express = require('express')
const app = express()
const logger = require('morgan')
const fallback = require('express-history-api-fallback')

app.use(logger('dev'))


app.get('/api/square', (req, res) => res.send('square'))
app.get('/api/circle', (req, res) => res.send('circle'))

const root = __dirname + '/public'

app.use(express.static(root))

app.use(fallback('/index.html', { root: root }))

app.listen(3000, () => console.log('running'))
