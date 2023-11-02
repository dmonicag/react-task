require('dotenv').config()
const express = require('express')
const Employee = require('./models/employees')
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.json())

app.get('/api/employees', (req, res) => {
    Employee.find({}).then(employees => {
        res.json(employees)
    })
})

app.listen(process.env.PORT, () => {
    console.log(`server running on PORT ${process.env.PORT}`)
})

