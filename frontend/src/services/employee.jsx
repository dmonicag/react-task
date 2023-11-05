import axios from 'axios'

const baseUrl = '/api/employees'

const getEmployees = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const addEmployee = newEmployee => {
  const request = axios.post(baseUrl, newEmployee)
  return request.then(response => {return response.data})
}

const deleteEmployee = async (id) => {
  const response = await axios.delete(`${baseUrl}/${id}`)
  return response.data
}

const updateEmployee = (id, updateEmployee) => {
  const request = axios.put(`${baseUrl}/${id}`, updateEmployee)
  return request.then(response => {return response.data})
}
export default {
  getEmployees,
  addEmployee,
  deleteEmployee,
  updateEmployee
}