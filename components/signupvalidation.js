import * as yup from "yup";

export const signUpValidation = yup.object({
  fullname: yup.string().required('Full name is required'),
  username: yup.string().min(3, 'Username must be at least 3 characters').required('Username is required'),
  phone: yup.string().matches(/^[0-9+\-() ]*$/, 'Phone number is invalid').required('Phone is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string()
    .min(8, 'Password must be at least 8 characters long.')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter.')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter.')
    .matches(/\d/, 'Password must contain at least one number.')
    .matches(/[!@#$%^&*]/, 'Password must contain at least one special character.')
    .required('Password is required'),
  passwordConfirmation: yup.string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Please confirm your password'),
});

// Provide signInValidation for backwards compatibility
// export const signInValidation = yup.object({
//   email: yup.string().email().required('Email is required'),
//   password: yup.string().required('Password is required'),
// }); 