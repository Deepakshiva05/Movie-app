import React, { useState } from 'react';
import moon from '../assets/moon.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { database } from './FirebaseConfig';
import {createUserWithEmailAndPassword} from 'firebase/auth';


const Signup = () => {

    const history =useNavigate()

    // const[uname,setUname]=useState();
    // const[email,setEmail]=useState();
    // const[pass,setPass]=useState();
    // const[pass2,setPass2]=useState();

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
            // history('/home')
        })
    }
    }
  

  return (
    <div>
      <div className="container" id="logmain" >
            <div className="row d-flex justify-content-evenly">
                <div className="col-lg-6 col-md-6">
                    <img src={moon} className='img-fluid' id="lok"></img>
                </div>
                <div className="col-lg-6 col-md-6" id="log">
                    <form onSubmit={(e)=>handleSubmit(e)}>
                        <h1 className='mb-3 text-danger'>Sign Up</h1>
                        <div className="form-group">
                            
                            <input type='text' name='uname' id='text1' placeholder='Username'></input>
                        </div>
                        <div className="form-group">
                      
                            <input type='text' name='email'  id='text2' placeholder='Email'></input>
                        </div>
                        <div className="form-group">
                            
                            <input type='password' name='pass' id='text3' placeholder='Password'></input>
                        </div>
                        <div className="form-group">
                       
                            <input type='password'name='pass2' id='text4' placeholder='Confirm Password'></input>
                        </div>
                        
                        <button className='btn btn-danger w-100' type="submit">Sign Up</button>
                        <div className="human d-flex justify-content-between">
                        <input type='checkbox' id='check' className='form-check-input mt-3'></input>
                        <p className='mt-3 text-white'>  Remember me</p><a href='#' className='text-white'>Need Help</a>
                        </div>
                        <div className="let d-flex gap-3">
                        <p className='text-white'>Aldredy have Account</p><Link className='text-danger text-decoration-none' to='/signin'>Sign in</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Signup;
