import * as Yup from 'yup';

export const schemaRegistration = Yup.object({
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

export const schemaLogin = Yup.object({
  email: Yup.string()
    .email('Email must be valid')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password is too short')
    .required('Password is required'),
});

export const schemaScript = Yup.object({
  name: Yup.string().required('Name is required'),
  source: Yup.string().required('Source is required'),
  link: Yup.string()
    .required('Link is required')
    .matches(
      /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm,
      'URL is not valid',
    ),
});

export const schemaLead = Yup.object({
  name: Yup.string().required('Name is required'),
  source: Yup.string().required('Source is required'),
  budget: Yup.string().required('Budget is required'),
  nextTask: Yup.string().required('Next task is required'),
  contact: Yup.string().required('Contact is required'),
});
