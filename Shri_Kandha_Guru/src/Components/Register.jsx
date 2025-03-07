import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Register() {

  const [Register, SetRegister] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    SetRegister({
      ...Register,
      [e.target.name]: [e.target.value],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{

        const response = await fetch("http://localhost:3000/api/auth/register", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(Register),
          })

        if(!response.success){
            toast(response.message);
            return response.json();
        }

        toast(response.message);
        return response.json();

    }catch(err){
        console.log(err);
    }

  };

  return (
    <div className="flex h-[90.7vh] items-center justify-center">
        <ToastContainer 
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"/>
      <form
        onSubmit={handleSubmit}
        className="p-8 rounded-lg h-fit bg-teal-700 flex flex-col gap-5"
      >
        <h2 className="text-white text-3xl font-semibold text-center">
          Register
        </h2>
        <div>
          <label htmlFor="username" className="block w-20">
            Username
          </label>
          <input
            type="text"
            onChange={handleChange}
            value={Register.username}
            className="py-1 px-2 focus-visible:outline-none bg-teal-700 border-b-2 border-black text-white"
            name="username"
            id="username"
          />
        </div>
        <div>
          <label htmlFor="email" className="block w-20">
            Email
          </label>
          <input
            type="email"
            onChange={handleChange}
            value={Register.email}
            className="py-1 px-2 focus-visible:outline-none bg-teal-700 border-b-2 border-black text-white"
            name="email"
            id="email"
          />
        </div>
        <div>
          <label htmlFor="password" className="block w-20">
            Password
          </label>
          <input
            type="password"
            onChange={handleChange}
            value={Register.password}
            className="py-1 px-2 focus-visible:outline-none bg-teal-700 border-b-2 border-black text-white"
            name="password"
            id="password"
          />
        </div>
        <div className="text-center">
          <button className="text-center rounded-md bg-white px-6 py-1">
            Register
          </button>
        </div>
        <div className="text-center text-sm">
          New User?{" "}
          <Link to="/register" className="text-blue-200 underline">
            Click Here to Register...
          </Link>
        </div>
      </form>
    </div>
  );
}
