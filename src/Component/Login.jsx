import React, { useState } from "react";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import newImg from "../assets/hh.jpg";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [data, setData] = useState({
    Email: "",
    Password: "",
  });
  const validate = () => {
    const errors = {};
    if (!data.Email.trim()) {
      errors.Email = "Enter Your Email Address";
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(data.Email)
    ) {
      errors.Email = "Enter a valid email addres ";
    }
    if (!data.Password.trim()) {
      errors.Password = "Enter Your Password";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setError(validationErrors);
    } else {
      localStorage.setItem("Email", data.Email);
      setIsSubmitted(true);
      setError({});
      setData({ Email: "", Password: "" });
      console.log("Form Submitted", data);

      navigate("/dashboard");
    }
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-gradient-to-br from-yellow-200 via-purple-300 to-gray-500"
      style={{
        backgroundImage: `url(${newImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-[30%] h-[45vh] bg-white/10 text-white p-8  flex flex-col justify-center items-center">
        <h2
          className="text-2xl font-bold mb-2"
          style={{ fontFamily: "fantasy" }}
        >
          "Welcome Back!"
        </h2>
        <p
          className="text-center italic text-[30px] font-bold"
          style={{ fontFamily: "fantasy" }}
        >
          You don't win races in the garage. Let's go! 🔧➡️🏁
        </p>
      </div>

      <div className="relative bg-white/10 backdrop-blur-md ml-0.5 shadow-lg w-[90%] h-[45vh] max-w-md p-8 ">
        <h1
          className="flex justify-center items-center text-white"
          style={{ fontFamily: "fantasy" }}
        >
          Login
        </h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              className="block text-white  mb-1 font-bold"
              style={{ fontFamily: "fantasy" }}
            >
              Email
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <input
                type="text"
                name="email"
                value={data.Email}
                onChange={(e) => setData({ ...data, Email: e.target.value })}
                placeholder="Enter your Email"
                className="w-full border h-10 border-gray-500 rounded-md  text-white pl-10 pr-4 py-2 focus:ring-2  focus:ring-blue-500 focus:outline-none transition"
                style={{ fontFamily: "fantasy" }}
              />
            </div>
            {error.Email && (
              <p className="text-red-600 text-sm mt-1">{error.Email}</p>
            )}
          </div>
          <div>
            <label
              className="block  mb-1 font-bold text-white"
              style={{ fontFamily: "fantasy" }}
            >
              password
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <FontAwesomeIcon icon={faLock} />
              </span>
              <input
                type="text"
                name="Password"
                value={data.Password}
                onChange={(e) => setData({ ...data, Password: e.target.value })}
                placeholder="Enter your Password"
                className="w-full border h-10 border-gray-500 pl-10 pr-4 py-2  text-white rounded-md focus:ring-2  focus:ring-blue-500 focus:outline-none transition"
                style={{ fontFamily: "fantasy" }}
              />
            </div>
            {error.Password && (
              <p className="text-red-600 text-sm mt-1">{error.Password}</p>
            )}
          </div>
          <div>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="border h-5 w-5 border-gray-500   rounded focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                style={{ fontFamily: "fantasy" }}
              />
              <span
                style={{ fontFamily: "fantasy" }}
                className="ml-2  text-white"
              >
                Remember Me
              </span>
            </label>
          </div>

          <button
            className="btn btn-danger"
            type="submit "
            style={{ fontFamily: "fantasy" }}
          >
            Submit
          </button>
          <p className="text-white" style={{ fontFamily: "fantasy" }}>
            Don't Have An account ?{" "}
            <Link to="/register" className="text-blue-600 ml-1 underline">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
