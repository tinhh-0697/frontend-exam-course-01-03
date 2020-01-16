import { withFormik } from 'formik';
import * as Yup from 'yup';
import { InputModal } from './InputModal';

export const FormModal = withFormik({
  mapPropsToValues({ name, views, status }) {
    // Init form field
    return {
      name,
      views,
      status,
    };
  },
  validationSchema: Yup.object().shape({
    // Validate form field
    name: Yup.string().required('Name is required'),
    views: Yup.number()
      .required('Views is required')
      .max(1000000000),
    status: Yup.boolean().required('Required'),
  }),
})(InputModal);
