import { TableBody } from '@mui/material';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import employeeService from '../services/employee';
import { useState } from 'react';
import { Button } from '@mui/material';
//import NewEmployeeForm from './NewEmployeeForm';
import NewEmployeeModal from './NewEmployeeModal';

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

const DisplayDetails = ({employees, setEmployees}) => {

    const [modalOpen, setModalOpen] = useState(false)
    const openModal = () => setModalOpen(true);

    const closeModal = ()=> {
      setModalOpen(false);
    };

    const handleDelete = async (id) => {
        if(window.confirm("Delete Employee's details?")){
            await employeeService.deleteEmployee(id)
            .then(() => {
                setEmployees(employees => employees.filter((e) => e.id !== id))
            })
            .catch(error => console.log(error.message))            
        }
    }

    const addnewEmployee = async (details) => {
        console.log("details", details)
        try{
            await employeeService.addEmployee(details)
            setEmployees(employees.concat(details))
            setModalOpen(false)
        }
        catch(error){
            console.log(error.message)
        }

    }

    const handleUpdate = (employee) => {
        //console.log(id)
        setModalOpen(true)
        return <NewEmployeeModal first_name={employee.firstname}/>
    }

    return(
        <div>
            <h1>Employee Details</h1>
                <Table style={{ marginBottom: "1em" }}>
                    <TableHead>
                        <StyledTableRow>
                            <TableCell>First Name</TableCell>
                            <TableCell>Last Name</TableCell>
                            <TableCell>Date of Birth</TableCell>
                            <TableCell>Job Title</TableCell>
                            <TableCell>Phone Number</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Address</TableCell>
                        </StyledTableRow>
                    </TableHead>
                    
                    <TableBody>
                    {Object.values(employees).map(e => (
                        <TableRow key={e.phonenumber}>
                        <TableCell>{e.firstname}</TableCell>
                        <TableCell>{e.lastname}</TableCell>
                        <TableCell>{e.dateofbirth}</TableCell>
                        <TableCell>{e.jobtitle}</TableCell>
                        <TableCell>{e.phonenumber}</TableCell>
                        <TableCell>{e.email}</TableCell>
                        <TableCell>{e.address}</TableCell>
                        <TableCell>
                            <button onClick={() => handleDelete(e.id)}>Delete</button>
                            <button onClick={() => handleUpdate(e)}>Edit</button>
                        </TableCell>
                        </TableRow>
                         ))}
                        </TableBody>
                </Table>

    <NewEmployeeModal
        modalOpen={modalOpen}
        onClose={closeModal}
        onSubmit={addnewEmployee}
      />
      <Button variant="contained" onClick={() => openModal()}>
        Add New Employee
      </Button>
      
        </div>
    )
}

export default DisplayDetails