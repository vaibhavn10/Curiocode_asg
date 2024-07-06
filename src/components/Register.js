import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from "../assets/logo.png"
import { showAlert } from '../alert/showAlert';

function Register() {
  const navigate = useNavigate();
    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const isRegistered = async() =>{
        const url="https://fakestoreapi.com/users";
        const response = await fetch(url);
        const data = await response.json();
        for(const user of data){
            if(email===user.email){
                return true;
            }
        }
        return false;
    }

    const handleSubmit = async(e) =>{
        e.preventDefault();
        const register = await isRegistered();   
        if(register){
            // console.log("Already Registered.");
            showAlert("User is Already Registered.", "red");
            navigate("/");
          }
          else{
            // console.log("Account Created Successfully.")            
            showAlert("Account Created Successfully.", "green")
        }
    }
  return (
    <div className="flex min-h-full h-screen flex-col justify-center px-4 py-12 md:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <img className="mx-auto h-20 w-auto" src={logo} alt="Your Company"/>
        <h2 className="mt-6 text-center text-2xl text-zinc-300 font-bold leading-9 tracking-tight to-blue-500">
          Create a new account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="username"
                className="block text-sm text-zinc-200 font-semibold leading-6 text-black"
              >
                Enter Username
              </label>
            </div>
            <div className="mt-2">
              <input
                id="username"
                name="username"
                type="text"
                value={username}
                onChange={(e)=>{setUsername(e.target.value)}}
                required
                className="block w-full rounded-md border-0 bg-zinc-950 py-1.5 text-white shadow-sm ring-1 ring-inset ring-zinc-600 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="email"
                className="block text-sm text-zinc-200 font-semibold leading-6 text-black"
              >
                Enter Email
              </label>
            </div>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}}
                required
                className="block w-full rounded-md border-0 bg-zinc-950 py-1.5 text-white shadow-sm ring-1 ring-inset ring-zinc-600 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm text-zinc-200 font-semibold leading-6 text-black"
              >
                Enter Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}}
                required
                className="block w-full rounded-md border-0 bg-zinc-950 py-1.5 text-white shadow-sm ring-1 ring-inset ring-zinc-600 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white/90 shadow-sm hover:bg-green-700  duration-200"
            >
              Register
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-400">
          Already have a account{" : "}
          <Link to="/"
            className="font-semibold leading-6 text-green-500 hover:text-green-400"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Register
