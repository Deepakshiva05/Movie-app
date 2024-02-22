import React from 'react';
import loki from '../assets/loki.jpg';
import './login.css';
import { useState } from 'react';
import '../app.css';
import { Link } from 'react-router-dom';
import { database } from './FirebaseConfig';
import {createUserWithEmailAndPassword} from 'firebase/auth';

const Login = () => {

    const handleSubmit =(e)=>{
        e.preventDefault()

        const uname=e.target.uname.value;
        const email=e.target.email.value;
        const pass=e.target.pass.value;
        const cpass=e.target.pass2.value;


        if(pass!=cpass){
            alert("Password not matched");
        }
        else{
        createUserWithEmailAndPassword(database,email,pass).then(data => {
            console.log(data,"authData");
        })
    }
    }
    
  return (
    <div>
      
        <div className="container" id="logmain" >
            <div className="row d-flex justify-content-evenly">
                <div className="col-lg-6 col-md-6">
                    <img src={loki} className='img-fluid' id="lok"></img>
                </div>
                <div className="col-lg-6 col-md-6" id="log">
                    <form action="">
                        <h1 className='mb-3 text-danger'>Sign in</h1>
                        <div className="form-group">
                            <label htmlFor="username"></label>
                            <input type='text' name='uname' id='text1' placeholder='Username'></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password"></label>
                            <input type='password' name='pass' id='text2' placeholder='Password'></input>
                        </div>
                        
                        <button className='btn btn-danger w-100'>Sign in</button>
                        <div className="human d-flex justify-content-between">
                        <input type='checkbox' className='form-check-input mt-3'></input>
                        <p className='mt-3 text-white'>  Remember me</p><a href='#' className='text-white'>Need Help</a>
                        </div>
                        <div className="let d-flex gap-3">
                        <p className='text-white'>New user </p><Link className="text-danger text-decoration-none" to='/signup'> Create Account</Link>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    
    </div>
  );
}

export default Login;
