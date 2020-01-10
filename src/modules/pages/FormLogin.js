import { withFormik } from 'formik';
import * as Yup from 'yup';
import Login from './Login';

export const FormLogin = withFormik({
  mapPropsToValues() {
    // Init form field
    return {
      email: '',
      password: '',
    };
  },
  validationSchema: Yup.object().shape({
    // Validate form field
    email: Yup.string()
      .email()
      .required('Email is required'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Username must have min 6 characters'),
  }),
})(Login);
