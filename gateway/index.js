const express = require('express')
const cors = require('cors');

/**
 * Proxy used to redirect the requests based on endpoints, to respective microsercive
 */
const proxy = require('express-http-proxy')

const port = 3000

const app = express()
app.use(cors())
app.use(express.json());

app.use('/customer', proxy('http://localhost:3001'))
app.use('/shopping', proxy('http://localhost:3003'))

// If no endpoint specified -> root is for products!
app.use('/', proxy('http://localhost:3002'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))