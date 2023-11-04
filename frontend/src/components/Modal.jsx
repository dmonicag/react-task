import { useState } from 'react'
import './Modal.css'

const Modal = ({ closeModal, onSubmit, defaultValue }) => {
  const [formState, setFormState] = useState(
    defaultValue ||
        {
          firstname: '',
          lastname: '',
          dateofbirth: '',
          jobtitle: '',
          phonenumber: '',
          email: '',
          address: ''
        })

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formState)
    closeModal()
  }


  return(
    <div className="modal-container"
      onClick={(e) => {
        if(e.target.className ==='modal-container')
          closeModal()
      }}
    >
      <div className="modal">
        <form>
          <div className='form-group'>
            <label htmlFor='firstname'>First Name</label>
            <input name='firstname' value={formState.firstname} onChange={handleChange}></input>
          </div>
          <div className='form-group'>
            <label htmlFor='lastname'>Last Name</label>
            <input name='lastname' value={formState.lastname} onChange={handleChange}></input>
          </div>
          <div className='form-group'>
            <label htmlFor='dateofbirth'>Date of Birth</label>
            <input name='dateofbirth' value={formState.dateofbirth} onChange={handleChange}></input>
          </div>
          <div className='form-group'>
            <label htmlFor='jobtitle'>Job title</label>
            <input name='jobtitle' value={formState.jobtitle} onChange={handleChange}></input>
          </div>
          <div className='form-group'>
            <label htmlFor='phonenumber'>Contact Number</label>
            <input name='phonenumber' value={formState.phonenumber} onChange={handleChange}></input>
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input name='email' value={formState.email} onChange={handleChange}></input>
          </div>
          <div className='form-group'>
            <label htmlFor='address'>Address</label>
            <input name='address' value={formState.address} onChange={handleChange}></input>
          </div>
        </form>
        <button type="submit" className='btn' onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  )
}

export default Modal