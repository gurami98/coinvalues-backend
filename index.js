const express = require('express')
const app = express()
const coin = require('./routes/coinvaluesRoutes')
const cors = require('cors')
const port = process.env.PORT || 3003

app.use(express.json())
app.use(cors())

app.use('/coin', coin)

app.listen(port, () => console.log("Server Up and running"))






