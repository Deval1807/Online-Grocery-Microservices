const express = require('express')
const cors = require('cors');

const app = express()
app.use(cors());
app.use(express.json());

const port = 3001

app.get('/', (req, res) => res.send('Hello From Customer!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))