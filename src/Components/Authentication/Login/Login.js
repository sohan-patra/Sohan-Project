import React from 'react'
import './Login.css'
import { useFormik } from 'formik'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const formValidate = (formValue) => {
    const errors = {};
    let validateEmail = RegExp('^([a-z0-9,-]+)@([a-z]{5,12}).([a-z.]{2,20})$');
    let passwordValidate = RegExp('^(?=.*[a-zA-Z0-9])(?=.*[!@#$%&]).{4,15}$')

    if (!formValue.password) {
        errors.password = "Please enter Password";
    } else if (!passwordValidate.test(formValue.password)) {
        errors.password = "Wrong Pattern";
    }
    if (!formValue.email) {
        errors.email = "Please enter Email";
    } else if (!validateEmail.test(formValue.email)) {
        errors.email = "Wrong Pattern";
    }
    console.log("Errors :", errors);
    return errors;
}
export default function Login() {
    let navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            password: '',
            email: ''
        },
        validate: formValidate,
        onSubmit: (values) => {
            console.log("Received Values :", values);
            axios.post("https://node-project-storage.herokuapp.com/postLoginData", values)
                // axios.post("https://jsonplaceholder.typicode.com/users",values)
                .then(res1 => {
                    console.log("Data Submited Succesfully :", res1.data);
                    window.sessionStorage.setItem("Token Value:", res1.data.token)
                    alert("Data Submited Succesfully");
                    navigate('/shopcatpage')
                })
                .catch(err1 => {
                    console.log("Error to submit Data :", err1);
                })
        }
    })
    return (
        <div>
            <div className='container15'>
                <div className='form1'>
                    <h4>Login to your account</h4>
                    <form className="myform1" onSubmit={formik.handleSubmit}>
                        <br />
                        <label className='label1' htmlFor='email'>Email:</label>
                        <input type="text" name="email" placeholder='Email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                        <br />
                        {formik.touched.email && formik.errors.email ? (<p className='err'>{formik.errors.email}</p>) : null}
                        <br />
                        <label className='label1' htmlFor='password'>Password:</label>
                        <br />
                        <input type="text" name="password" placeholder='Password' value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                        <br />
                        {formik.touched.password && formik.errors.password ? (<p className='err'>{formik.errors.password}</p>) : null}
                        <br />
                        <button type='submit' name='submit' disabled={!(formik.isValid && formik.dirty)}>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
