import DisplayDetails from "./components/DisplayDetails"
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
      <DisplayDetails employees={employees} setEmployees={setEmployees}/>
  
    </div>
  )
}
export default App
