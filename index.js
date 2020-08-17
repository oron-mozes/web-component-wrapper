const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const cors = require('cors')

express()
    .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
    .get('/data', cors({
        "origin": "*",
        "methods": "GET",
        "optionsSuccessStatus": 204
    }), (req, res) => res.json({data: {allow: true}}))
    .post('/data', (req, res) => res.json({data: {allow: false}}))
    .get('/', (req, res) => res.render('pages/index'))
    .listen(PORT, () => console.log(`Listening on ${ PORT }`));
