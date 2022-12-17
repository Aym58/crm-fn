import * as Yup from 'yup';

export const schema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .email('Email must be valid')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password is too short')
    .required('Password is required'),
  passwordRepeat: Yup.string()
    .required('Passwords must match')
    .oneOf([Yup.ref('password')], 'Passwords must match'),
});
