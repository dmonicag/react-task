import DisplayDetails from "./components/DisplayDetails"
import NewEmployeeForm from "./components/NewEmployeeForm"
import employeeService from "./services/employee"
import { useState, useEffect } from "react"

const App = () => {
  const [employees, setEmployees] = useState([])

  useEffect(() => {
    employeeService
    .getEmployees()
    .then(initialState => {
      setEmployees(initialState)
    })
  },[])

  return(
    <div>
      <NewEmployeeForm employees={employees} setEmployees={setEmployees}/>
      <DisplayDetails employees={employees}/>      
    </div>
  )
}
export default App
