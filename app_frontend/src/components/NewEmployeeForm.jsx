import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';


import { useState } from 'react';
//import employeeService from '../services/employee';

const NewEmployeeForm = ({onCancel, onSubmit }) => {
    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [birthdate, setBirthDate] = useState('')
    const [phonenumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [jobtitle, setJobTitle] = useState('')

    const add_employee = async (event) =>{
        event.preventDefault()
        onSubmit({
            firstname,
            lastname,
            birthdate,
            jobtitle,
            phonenumber,
            email,
            address
        })
        /*const new_employee = { 
            firstname: firstname,
            lastname: lastname,
            dateofbirth: birthdate,
            phonenumber: phonenumber,
            email: email,
            address: address
        }
        try{
            const employee = await employeeService.addEmployee(new_employee)
        setEmployees(employees.concat(employee))
        }
        catch(error){
            console.log("error:", error.message)
          }
          setAddress('')
          setBirthDate('')
          setEmail('')
          setFirstName('')
          setLastName('')
          setPhoneNumber('')
      }*/
    }

    return(
        <div>
            
            <div>
                <form onSubmit={add_employee}>                
                <TextField 
                    label="First Name"
                    value={firstname} 
                    onChange={({ target }) => setFirstName(target.value)} >
                </TextField>
                <TextField 
                    label="Last Name"
                    value={lastname}
                    onChange={({ target }) => setLastName(target.value)}>
                </TextField>
                <TextField 
                    type="date"
                    label="Date of Birth"
                    value={birthdate}
                    onChange={({target}) => setBirthDate(target.value)}>
                </TextField>
                <TextField 
                    label="Job title"
                    value={jobtitle}
                    onChange={({target}) => setJobTitle(target.value)}>
                </TextField>
                <TextField
                    label="Phone Number"
                    value={phonenumber}
                    onChange={({target}) => setPhoneNumber(target.value)}>
                </TextField>
                <TextField
                    label="Email"
                    value={email}
                    onChange={({target}) => setEmail(target.value)}>
                </TextField>
                <TextField
                    label="Address"
                    value={address}
                    onChange={({target}) => setAddress(target.value)}>
                </TextField>
                <Button type="submit">Add Employee</Button>
                <Button variant='contained' onClick={onCancel}>Close</Button>
            </form>
            </div>
        </div>
    )
}

export default NewEmployeeForm