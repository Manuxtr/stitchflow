import * as yup from "yup"

export const signUpSchema = yup.object({
    fullname:yup.string().required("full name is required"),
    username:yup.string().min("username must at least 4 characters").required("username is required"),
    phone:yup.string().matches([0-9]).max(11,"phone should be 11 digits").required("phone is required"),
    email:yup.string()
    .min(6,"password smust be atleast 6 characters")
    .matches(/[A-Z]/, "password must contain at least one uppercase")
    .matches(/[a-z]/, "password must contain at least one lowercase")
    .matches(/[!@#$%^&*]/,"password must contain a special character")
    .required("password is required"),
    passwordComfirmation:yup.string()
    .oneOf([yup.ref("password",null,"password must match")])
    .required("please comfirm password")
})