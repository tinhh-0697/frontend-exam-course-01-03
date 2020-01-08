import { withFormik } from 'formik';
import * as Yup from 'yup';
import { InputName } from './InputName';

export const FormModal = withFormik({
  mapPropsToValues() {
    // Init form field
    return {
      name: '',
    };
  },
  validationSchema: Yup.object().shape({
    // Validate form field
    name: Yup.string().required('Name is required'),
  }),
})(InputName);
