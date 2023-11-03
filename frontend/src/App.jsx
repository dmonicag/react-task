import { useState, useEffect } from 'react'
import EmployeeList from './components/EmployeeList'
import employeeService from './services/employee'
import Modal from './components/Modal'
import './App.css'
import Notification from './components/Notification'

const App = () => {
  const [employees, setEmployees] = useState([])
  const [modalOpen, setModalOpen] = useState(false)
  const [notification, setNotification] = useState(null)
  const [error_notification, setError] = useState(null)

  useEffect(() => {
    employeeService
    .getEmployees()
    .then(initial => {
      setEmployees(initial)
    })
  }, [])

  const handleDelete = async (id) => {
    if(window.confirm("Delete Employee's details?")){
      await employeeService.deleteEmployee(id)
      .then(() => {
          setEmployees(employees => employees.filter((e) => e.id !== id))
          setNotification(`Employee deleted successfully`)
          setTimeout(() => {
          setNotification(null)
        }, 5000)
      })
      .catch(error => {
        setError(`Contact already deleted`)
        setTimeout(() => {
          setError(null)
        }, 5000)
      })
      }
  }

  const handleSubmit = async (newData) => {
    try{
      await employeeService.addEmployee(newData)
      setEmployees(employees.concat(newData))
      setModalOpen(false)
      setNotification("Employee added successfully")
      setTimeout(() => {
        setNotification(null)
      }, 5000)
    }
    catch(error){
      setError(error.message)
        setTimeout(() => {
          setError(null)
        }, 5000)
    }
  }

  const handleEdit = (id) => {
    //const emp_to_edit = employees.find(e => e.id === id)
    //console.log(emp_to_edit)
    //setRowtoedit(employees.find(e => e.id === id))
    //setRowtoedit(id)
    setModalOpen(true)
  }

  return(
    <div>
      <Notification message={notification} error_message={error_notification}/>
      <EmployeeList employees={employees} deleteItem={handleDelete} editItem={handleEdit}/>
      <button className="btn" onClick={() => setModalOpen(true)}>Add Employee</button>
      {
      modalOpen && 
      <Modal 
        closeModal={() => {
          setModalOpen(false)
        }}
        onSubmit={handleSubmit}
      />
      }
    </div>
  )
}

export default App
