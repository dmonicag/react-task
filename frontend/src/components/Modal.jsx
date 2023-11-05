/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './Modal.css'
import { useFormik } from 'formik'
import { formValidatorSchema } from './formValidatorSchema'

const Modal = ({ closeModal, subForm, defaultValue }) => {
  const formState = defaultValue ||
        {
          firstname: '',
          lastname: '',
          dateofbirth: '',
          jobtitle: '',
          phonenumber: '',
          email: '',
          address: ''
        }

  const onSubmit = (values, actions) => {
    subForm(values)
    closeModal()
  }

  const { values, errors, handleBlur, handleChange, handleSubmit, submitForm } = useFormik({
    initialValues:
    { firstname: formState.firstname,
      lastname: formState.lastname,
      dateofbirth: formState.dateofbirth,
      jobtitle: formState.jobtitle,
      phonenumber: formState.phonenumber,
      email: formState.email,
      address: formState.address
    },
    validationSchema: formValidatorSchema,
    onSubmit
  })

  return(
    <div className="modal-container"
      onClick={(e) => {
        if(e.target.className ==='modal-container')
          closeModal()
      }}
    >
      <div className="modal">
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='firstname'>First Name&nbsp;
              <span>{errors.firstname && <small style={{ color: 'red' }}>{errors.firstname}</small>}</span>
            </label>
            <input
              name='firstname'
              value={values.firstname}
              onChange={handleChange}
              onBlur={handleBlur}>
            </input>
          </div>
          <div className='form-group'>
            <label
              htmlFor='lastname'>Last Name
            </label>
            <input
              name='lastname'
              value={values.lastname}
              onChange={handleChange}
              onBlur={handleBlur}>
            </input>
          </div>
          <div className='form-group'>
            <label
              htmlFor='dateofbirth'>Date of Birth
            </label>
            <input
              type='date'
              name='dateofbirth'
              value={values.dateofbirth}
              onChange={handleChange}
              onBlur={handleBlur}>
            </input>
          </div>
          <div className='form-group'>
            <label
              htmlFor='jobtitle'>Job title&nbsp;
              <span>{errors.jobtitle && <small style={{ color: 'red' }}>{errors.jobtitle}</small>}</span>
            </label>
            <input
              name='jobtitle'
              value={values.jobtitle}
              onChange={handleChange}
              onBlur={handleBlur}>
            </input>
          </div>
          <div className='form-group'>
            <label
              htmlFor='phonenumber'>Contact Number&nbsp;
              <span>{errors.phonenumber && <small style={{ color: 'red' }}>{errors.phonenumber}</small>}</span>
            </label>
            <input
              type='number'
              name='phonenumber'
              value={values.phonenumber}
              onChange={handleChange}
              onBlur={handleBlur}>
            </input>
          </div>
          <div className='form-group'>
            <label
              htmlFor='email'>Email &nbsp;
              <span>{errors.email && <small style={{ color: 'red' }}>{errors.email}</small>}</span>
            </label>
            <input
              type='email'
              name='email'
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}>
            </input>
          </div>
          <div className='form-group'>
            <label
              htmlFor='address'>Address
            </label>
            <input
              name='address'
              value={values.address}
              onChange={handleChange}
              onBlur={handleBlur}>
            </input>
          </div>
        </form>
        <button
          type='button'
          className='btn'
          onClick={submitForm}>Submit
        </button>
      </div>
    </div>
  )
}

export default Modal