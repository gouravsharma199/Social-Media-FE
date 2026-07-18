import React from 'react'

const Login = () => {
  return (
    <div className="hero  max-h-screen my-10">
        <div className="hero-content flex-col lg:flex-row-reverse">
            {/* <div className="text-center lg:text-left">
               
                <p className="py-6">
                    login and start your jurney Today 
                </p>
            </div> */}
            <div className="card bg-base-300 w-full max-w-lg shrink-0 shadow-2xl p-10 m-4">
            <div className="card-body">
                 <h1 className="text-5xl font-bold mb-3"> Login now! </h1>
                <fieldset className="fieldset">
                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" />
                <label className="label">Password</label>
                <input type="password" className="input" placeholder="Password" />
                <div><a className="link link-hover">Forgot password?</a></div>
                <button className="btn btn-neutral mt-4">Login</button>
                </fieldset>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Login;
