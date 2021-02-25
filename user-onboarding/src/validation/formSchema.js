import * as init from "yup"

const formSchema = init.object().shape({
    fname: init.string()
        .trim()
        .required("Make sure to fill out your First and Last name fields"),

    lname: init.string()
        .trim()
        .required("Make sure to fill out your First and Last name fields"),

    email: init.string()
        .email("Make sure to enter a valid email address")
        .required("An email is required"),
    
    tos: init.boolean()
        .required("Please agree to our Terms of Services to proceed")
        .oneOf([true], "Please accept the terms of service"),
    
    password: init.string()
        .required("You need a password to proceed")
        .min(10, "Password must be a minimum of 10 characters"),
})

export default formSchema;