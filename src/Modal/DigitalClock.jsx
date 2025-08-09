import React, { useEffect, useState } from 'react'

function DigitalClock() {
    const[time,setTime] = useState(new Date())

    useEffect(()=>{
        const timer = setInterval(()=>{
            setTime(new Date());
        },1000)
        return ()=>clearInterval(timer);
    },[])

    const formattedTime = time.toLocaleTimeString();
  return (
    <div className='min-h-screen flex justify-center items-center px-4'>
        <div className='w-full bg-black border border-gray-700 rounded-xl p-8 text-center shadow-lg' style={{fontFamily:"fantasy"}}
        >
            <h2 className='text-amber-700 text-sm uppercase tracking-widest mb-4'>
                Digital Clock
            </h2>
            <div className='text-blue-400 text-5xl md:text-6xl font-bold tracking-wider'>
                {formattedTime}

            </div>

        </div>
        
    </div>
  )
}





export default DigitalClock


import React, { useEffect, useState } from "react";

function Dashboardd() {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    fetch("https://api.escuelajs.co/api/v1/auth/profile", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setApiData(data);
        console.log("data", data);
      })
      .catch((err) => {
        console.log("Error:", err);
        alert("Token invalid or expired");
      });
  }, []);

  return (
    <div className="max-w-md mx-auto mt-12 p-6 bg-white rounded-lg shadow-md text-center">
      <h1 className="text-4xl font-bold text-indigo-600 mb-6">Dashboard</h1>
      <h2 className="text-2xl font-semibold mb-3">
        Welcome, {apiData?.username || "User"}
      </h2>
      <p className="text-gray-700 mb-2">
        <span className="font-medium">Email:</span> {apiData?.email || "Loading..."}
      </p>
      <p className="text-gray-700 mb-4">
        <span className="font-medium">Role:</span> {apiData?.role || "Loading..."}
      </p>
      {apiData?.avatar && (
        <img
          src={apiData.avatar}
          alt="avatar"
          className="mx-auto rounded-full w-24 h-24 object-cover"
        />
      )}
    </div>
  );
}

export default Dashboardd;




import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function SignUp() {
    const [form, setForm] = useState({ username: "", email:"", password: "" }); 
    const [error, setError] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const navigate = useNavigate();

    const validate = () => {
        const errors = {};
       
        if (!form.password.trim()) {
            errors.password = "Enter password";
        }
        return errors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setError(validationErrors);
            return;
        }

        try {
            const res = await fetch('https://dummyjson.com/auth/login', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            const data = await res.json();
            if (res.ok) {
                localStorage.setItem("accesstoken", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJlbWlseXMiLCJlbWFpbCI6ImVtaWx5LmpvaG5zb25AeC5kdW1teWpzb24uY29tIiwiZmlyc3ROYW1lIjoiRW1pbHkiLCJsYXN0TmFtZSI6IkpvaG5zb24iLCJnZW5kZXIiOiJmZW1hbGUiLCJpbWFnZSI6Imh0dHBzOi8vZHVtbXlqc29uLmNvbS9pY29uL2VtaWx5cy8xMjgiLCJpYXQiOjE3NTI3NjA4MDQsImV4cCI6MTc1Mjc2NDQwNH0.BS9uTLPWO51pTA-EjhSbjbtKnSAHA5QCpJcufFPT6kg",); // Or use a hardcoded token if needed
                setSubmitted(true);
                setError({});
                setForm({ username: "", password: "" });
                navigate("/dashboardd");
            } else {
                alert(data.message || "Login Failed");
            }
        } catch (err) {
            alert("Something went wrong");
            console.log(err);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-tr from-blue-100 to-gray-800 flex justify-center items-center">
            <div className="h-[50vh] w-[30%] bg-white/20 backdrop-blur-md rounded"></div>
            <div className="h-[50vh] w-[30%] bg-white/20 backdrop-blur-md ml-0.5 max-w-md p-8 shadow-lg">
                <h1 className="font-bold text-center text-xl mb-4">Login</h1>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label className="block font-bold mb-1">Username</label>
                        <div className="relative">
                            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </span>
                            <input
                                type="text"
                                placeholder="Enter Your Email"
                                value={form.username}
                                onChange={(e) => setForm({ ...form, username: e.target.value })}
                                className="pl-10 pr-4 py-2 h-10 w-full border border-black focus:outline-none"
                            />
                            {error.username && (
                                <p className="text-red-500 text-xs">{error.username}</p>
                            )}
                        </div>
                    </div>

                    <div>
                        <label className="block font-bold mb-1">Password</label>
                        <div className="relative">
                            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </span>
                            <input
                                type="password"
                                placeholder="Enter Your Password"
                                value={form.password}
                                onChange={(e) => setForm({ ...form, password: e.target.value })}
                                className="pl-10 pr-4 py-2 h-10 w-full border border-black focus:outline-none"
                            />
                            {error.password && (
                                <p className="text-red-500 text-xs">{error.password}</p>
                            )}
                        </div>
                    </div>

                    <button
                        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
                        type="submit"
                    >
                        Submit
                    </button>
                </form>

                {submitted && <p className="text-green-600 text-center mt-4">Login Successful!</p>}
            </div>
        </div>
    );
}

export default SignUp;
