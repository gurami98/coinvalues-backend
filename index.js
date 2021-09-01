const express = require('express')
const app = express()
const coin = require('./routes/coinvaluesRoutes')
const cors = require('cors')

app.use(express.json())
app.use(cors())

app.use('/coin', coin)

app.listen(3003, () => console.log("Server Up and running"))






