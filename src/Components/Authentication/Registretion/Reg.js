import React from 'react'
import './Reg.css'
import { useFormik } from 'formik'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const formValidate=(formValue)=>{
    const errors={};
    let validateEmail=RegExp('^([a-z0-9,-]+)@([a-z]{5,12}).([a-z.]{2,20})$');
    let validatePass=RegExp('^(?=.*[a-zA-Z0-9])(?=.*[!@#$%&]).{4,15}$')
    if(!formValue.username)
    {
        errors.username="Please Enter Username";
    }
    if(!formValue.password)
    {
        errors.password="Please Enter Password";
    }else if(!validatePass.test(formValue.password))
    {
        errors.password="Wrong Pattern";
    }
    if(!formValue.email)
    {
        errors.email="Please Enter Email";
    }else if(!validateEmail.test(formValue.email))
    {
        errors.email="Wrong Pattern";
    }
    console.log("Errors :",errors);
    return errors;
}

export default function Reg() {
    const navigate=useNavigate();
    const formik=useFormik({
        initialValues:{
            username:'',
            password:'',
            email:''
        },
        validate:formValidate,
        onSubmit:(values)=>{
            console.log("Received Value :",values);
            axios.post("https://node-project-storage.herokuapp.com/postUserData",values)
            // axios.post("https://jsonplaceholder.typicode.com/users",values)
            .then(res=>{
                console.log("Data submited succesfully",res.data);
                alert("Data submited successfully");
                navigate('/loginpage')

            })
            .catch(err=>{
                console.log("Error to submit data ",err);
            })
        }
    })
  return (
    <div>
        <div className='container15'>
            <div className='form1'>
            <h4>Register to your account</h4>
            <form className="myform" onSubmit={formik.handleSubmit}>
                <br/>
                <label className='label1' htmlFor='username'>Username:</label>
                <input type="text" name='username' placeholder="Username" value={formik.values.username} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                <br/>
                {formik.touched.username && formik.errors.username ? (<p className='err'>{formik.errors.username}</p>) : null}
                <br/>
                <label className='label1' htmlFor='password'>Password:</label>
                <input type="text" name='password' placeholder="Password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                <br/>
                {formik.touched.password &&formik.errors.password ? (<p className='err'>{formik.errors.password}</p>) : null}
                <br/>
                <label className='label1' htmlFor='email'>Email:</label>
                 <input type="text" name='email' placeholder="Email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                <br/>
                {formik.touched.email &&formik.errors.email ? (<p className='err'>{formik.errors.email}</p>) : null}
                <button type="submit" name='submit' disabled={!(formik.isValid && formik.dirty)}>Register</button>
            </form>
            </div>
        </div>
    </div>
  )
}
