import React, { useState } from 'react'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import {useNavigate} from "react-router-dom";
import { BASE_URL } from '../utils/constants';
const Login = () => {

    const[emailId,setEmailId] = useState("Gourav@gmail.com");
    const[password,setPassword] = useState("Gourav@321");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = async()=>{
        
        try{
            const res = await axios.post(BASE_URL+"/login",{
                emailId,
                password
            },{
                withCredentials:true
            });
            dispatch(addUser(res.data));
            navigate("/");
            

        }catch(err){
            console.log(err);
        }
    }



  return (
    <div className="hero  max-h-screen my-10">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card bg-base-300 w-full max-w-lg shrink-0 shadow-2xl p-10 m-4">
                <div className="card-body">
                    <h1 className="text-5xl font-bold mb-3"> Login now! </h1>

                    <fieldset className="fieldset">

                        <label className="label">Email</label>
                        <input type="email" value={emailId} className="input" 
                        placeholder="Email" onChange={(e)=>setEmailId(e.target.value)} />

                        <label className="label">Password</label>
                        <input type="password" className="input" value={password} 
                        onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />

                        <div><a className="link link-hover">Forgot password?</a></div>


                    <button className="btn btn-neutral mt-4" onClick={handleLogin}>Login</button>
                    </fieldset>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login;
