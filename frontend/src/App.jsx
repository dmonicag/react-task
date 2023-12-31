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
  const [emptoEdit, setEmpToEdit] = useState([])

  useEffect(() => {
    employeeService
      .getEmployees()
      .then(initial => {
        setEmployees(initial)
      })
  }, [])

  const handleDelete = async (id) => {
    if(window.confirm('Delete Employee\'s details?')){
      await employeeService.deleteEmployee(id)
        .then(() => {
          setEmployees(employees => employees.filter((e) => e.id !== id))
          setNotification('Employee deleted successfully')
          setTimeout(() => {
            setNotification(null)
          }, 5000)
        })
        .catch(error => {
          setError(error.message)
          setTimeout(() => {
            setError(null)
          }, 5000)
        })
    }
    return employees
  }

  const addEmployeeDetail = (data) => {
    try{
      employeeService.addEmployee(data)
      setEmployees(employees.concat(data))
      setModalOpen(false)
      setNotification('Employee added successfully')
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
    return employees
  }

  const updateEmployeeDetail = (id, data) => {
    try{
      employeeService
        .updateEmployee(id, data)
        .then(edited_emp => {
          setEmployees(employees.map(emp => emp.id !== emptoEdit.id ? emp : edited_emp))
          setNotification('Employee detail updated successfully')
          setTimeout(() => {
            setNotification(null)
          }, 5000)
        })
    }
    catch(error){
      setError(error.message)
      setTimeout(() => {
        setError(null)
      }, 5000)
    }
    return employees
  }

  const handleSubmit = async (newData) => {
    if(emptoEdit === null){
      await addEmployeeDetail(newData)
    }
    else {
      await updateEmployeeDetail(emptoEdit.id, newData)
    }
  }

  const handleEdit = async (id) => {
    setModalOpen(true)
    const emp_to_edit = employees.find((e) => e.id === id)
    setEmpToEdit(emp_to_edit)
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
          setEmpToEdit(null)
        }}
        subForm={handleSubmit}
        defaultValue={emptoEdit}
      />
      }
    </div>
  )
}

export default App
