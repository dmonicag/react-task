require('dotenv').config()
const express = require('express')
const Employee = require('./models/employees')
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.json())
var mongoose = require('mongoose'); 
var ObjectId = mongoose.Types.ObjectId;

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

app.delete('/api/employees/:id', async (request, response) => {
    const { id } = request.params;
    const post = await Employee.findById(id).exec()
    const result = await post.deleteOne()
    .then(result => {
        response.status(204).end()
    })
})

app.put('/api/employees/:id', async(request, response) => {
    const { firstname,
            lastname,
            phonenumber,
            email,
            address,
            jobtitle } = request.body

    Employee.findByIdAndUpdate(request.params.id,
        { firstname, lastname, phonenumber, email, address, jobtitle },
        { new: true, runValidators: true, context:'query' })
    .then(updatedEmployee => {
          response.json(updatedEmployee)
     })
    .catch(error => {
        console.log(error.message)
    })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`server running on PORT ${process.env.PORT}`)
})

