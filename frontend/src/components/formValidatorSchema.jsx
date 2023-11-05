/* eslint-disable quotes */
import * as Yup from 'yup'

const Phone_regex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/

export const formValidatorSchema = Yup.object().shape({
  firstname: Yup.string().min(2).required("Required"),
  lastname: Yup.string().min(1),
  dateofbirth: Yup.date(),
  jobtitle: Yup.string().required("Required"),
  phonenumber: Yup.string().matches(Phone_regex, 'Please enter valid phone number').required("Required"),
  email: Yup.string().email("Please enter valid email"),
  address: Yup.string().min(5)
})