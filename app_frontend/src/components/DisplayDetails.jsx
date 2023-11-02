import { TableBody } from '@mui/material';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

const DisplayDetails = ({employees}) => {
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
                        <TableRow key={e.id}>
                        <TableCell>{e.firstname}</TableCell>
                        <TableCell>{e.lastname}</TableCell>
                        <TableCell>{e.dateofbirth}</TableCell>
                        <TableCell>{e.jobtitle}</TableCell>
                        <TableCell>{e.phonenumber}</TableCell>
                        <TableCell>{e.email}</TableCell>
                        <TableCell>{e.address}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
        </div>
    )
}

export default DisplayDetails