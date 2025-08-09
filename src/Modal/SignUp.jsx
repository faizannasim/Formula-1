import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';

function SignUp() {
    const [form, setForm] = useState({ username: "", email:"", password: "" }); 
    const [error, setError] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const[isPassword,setIsPassword] = useState(true)

    const navigate = useNavigate();

    const validate = () => {
        const errors = {};
        if(!form.username.trim()){
            errors.username = "enter your username"
        }
       
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
            console.log("data",data);
            
            if (res.ok) {
                console.log(res)
                localStorage.setItem("accesstoken", data.accessToken,)
                setSubmitted(true);
                setError({});
                setForm({ username: "", password: "" });
                navigate("/dashboardd");
            } else {
                toast.error(data.message || "Login Failed");
            }
        } catch (err) {
            toast.error("Something went wrong");
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
                                type={isPassword ?  "password " : "text"}
                                placeholder="Enter Your Email"
                                value={form.username}
                                onChange={(e) => setForm({ ...form, username: e.target.value })}
                                className="pl-10 pr-4 py-2 h-10 w-full border border-black focus:outline-none"
                            />

                            <span className='button' onClick={()=>setIsPassword(!isPassword)}> 👁️</span>
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
