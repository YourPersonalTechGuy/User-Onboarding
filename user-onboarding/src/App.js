//imports
import './App.css';
import React, {useState, useEffect} from "react";
import axios from "axios"
import * as init from "yup";
import Form from "./components/Form"
import formSchema from "./validation/formSchema"
import User from "./components/User"

//initialValues
const initialFormValues = {
  fname: "",
  lname: "",
  email: "",
  password: "",
  tos: false,
};
const initialFormErrors = {
  fname: "",
  lname: "",
  email: "",
  password: "",
  tos: false,
};
const initialUsers = [];
const initialDisabled = true;

function App() {
  //Initializing states using the previous generated initial values
  const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)


  /*
  Helpers
  */

  //gets the list of users and updates into users state
  const getUsers = () => {
    axios.get("https://reqres.in/api/users?per_page=10000000")
    .then((res)=>{
      setUsers(res.data.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  
  //updates users list in the API
  const postUser = (newUser) => {
    axios.post("https://reqres.in/api/users", newUser)
      .then((res)=>{
        setUsers([...users, res.data])
        alert(JSON.stringify(res.data))
      })
      .catch((err)=>{
        console.log(err)
      })
  }

  /*
  event handlers
  */
  
  //updates state based on form input fields
  const formUpdate = (name, value) => {
    init.reach(formSchema, name)
      .validate(value)
      .then(()=>{
        setFormErrors({...formErrors, [name]: ""})
      })
      .catch((err)=>{
        setFormErrors({...formErrors, [name]: err.errors[0]})
      })
    setFormValues({...formValues, [name]:value})
  }

  //Creates POST request to API to store the form data
  const formSubmit = () => {
    const newUser = {
      id: users.length+1,
      first_name: formValues.fname.trim(),
      last_name: formValues.lname.trim(),
      email: formValues.email.trim(),
      password: formValues.password,
    }
    postUser(newUser)
    setFormValues(initialFormValues)
  }

  /*
  Side Effects
  */

  useEffect(()=>{
    getUsers()
  },[])

  useEffect(()=>{
    formSchema.isValid(formValues)
      .then((valid)=>{
        setDisabled(!valid)
      })
  }, [formValues])



  return (
    <div className="App">
      <Form 
        values={formValues}
        submit={formSubmit}
        change={formUpdate}
        isDisabled={disabled}
        errors={formErrors}
      />
      {users.map((user)=>{
       return <User key={user.id} values={user} />
      })}
    </div>
  );
}

export default App;
