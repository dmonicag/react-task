require('dotenv').config()
const express = require('express')
const Employee = require('./models/employees')
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.json())

app.get('/api/employees', (request, response) => {
    Employee.find({}).then(employees => {
        response.json(employees)
    })
})

app.post('/api/employees', (request, response) => {
    const body = request.body
    const newEmployee = new Employee({
        firstname: body.firstname,
        lastname: body.lastname,
        dateofbirth: body.dateofbirth,
        jobtitle: body.jobtitle,
        email: body.email,
        phonenumber: body.phonenumber,        
        address: body.address
    })
    newEmployee.save().then(savedPerson => {
        response.json(savedPerson)
    })
    .catch(error => {
        console.log(error.message)
    })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`server running on PORT ${process.env.PORT}`)
})

