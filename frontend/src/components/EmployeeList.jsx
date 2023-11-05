import './EmployeeList.css'

const EmployeeList = ({ employees, deleteItem, editItem }) => {
  return(
    <div className="table-wrapper">
      <table className="table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Date of Birth</th>
            <th>Job Title</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Address</th>
            <th colSpan={2}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((e) => {
            return <tr key={e.id}>
              <td>{e.firstname}</td>
              <td>{e.lastname}</td>
              <td>{e.dateofbirth}</td>
              <td>{e.jobtitle}</td>
              <td>{e.phonenumber}</td>
              <td>{e.email}</td>
              <td>{e.address}</td>
              <td>
                <button className='btn' onClick={() => deleteItem(e.id)}>delete</button>
              </td>
              <td>
                <button className='btn'onClick={() => editItem(e.id)}>edit</button>
              </td>
            </tr>
          })}
        </tbody>
      </table>

    </div>
  )
}

export default EmployeeList