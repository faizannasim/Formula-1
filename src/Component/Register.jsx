import PhoneInput from "react-phone-input-2";
import React, { useState } from "react";
import newImg from "../assets/new.png";
import hero from "../assets/register.png";
import { Link, useNavigate } from "react-router-dom";
import "react-phone-input-2/lib/style.css";
import {
  faEnvelope,
  faLock,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast } from "react-toastify";
import OtpInput from "./OtpInput";

function Register() {
  const navigate = useNavigate();
  const strongPasswordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

  const [error, setError] = useState({});
  const [isPassword, setIsPassword] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [phone, setPhone] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [form, setForm] = useState({
    username: "",
    Mobile: "",
    Email: "",
    Password: "",
    ConfirmPassword: "",
  });

  const validate = () => {
    const errors = {};

    if (!form.username.trim()) errors.username = "Enter Your UserName";
    if (!form.Mobile.trim()) errors.Mobile = "Enter Your Mobile Number";
    if (!form.Email.trim()) errors.Email = "Enter Your Email Address";
    else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(form.Email)
    )
      errors.Email = "Enter a valid Email Address";

    if (!form.Password || !form.ConfirmPassword)
      errors.ConfirmPassword = "Please enter both password fields";
    else if (form.Password !== form.ConfirmPassword)
      errors.ConfirmPassword = "Passwords do not match";
    else if (!strongPasswordRegex.test(form.Password))
      errors.ConfirmPassword =
        "Password must contain uppercase, lowercase, number & special char";

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setError(validationErrors);
      return;
    }

    const RegisterUser = JSON.parse(localStorage.getItem("RegisterUser")) || [];

    const isAlreadyRegister = RegisterUser.some(
      (user) => user.Email === form.Email
    );

    if (isAlreadyRegister) {
      toast.error("This email is already registered. Try logging in.");
      return;
    }

    const newUser = {
      username: form.username,
      Mobile: form.Mobile,
      Email: form.Email,
      Password: form.Password,
    };

    RegisterUser.push(newUser);
    localStorage.setItem("RegisterUser", JSON.stringify(RegisterUser));

    localStorage.setItem("Email", form.Email);
    localStorage.setItem("isLoggedIn", "true");

    setIsSubmitted(true);
    setError({});
    setForm({
      username: "",
      Mobile: "",
      Email: "",
      Password: "",
      ConfirmPassword: "",
    });

    toast.success("Registered Successfully!");
    navigate("/Login");
  };

  const handlePhoneNumber = (value) => {
    setForm({ ...form, Mobile: value });
    setPhone(value);
  };

  const onOtpSubmit = (otp) => {
    console.log("login", otp);
  };

  return (
    <div
      className="flex flex-col md:flex-row justify-center items-center min-h-screen bg-gray-100"
      style={{
        backgroundImage: `url(${newImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Hero image */}
     {/* Hero image */}
<div
  className="w-full md:w-1/2 h-80 md:h-[500px] bg-cover bg-center bg-no-repeat mt-8 md:mt-0 rounded-lg shadow-lg"
  style={{
    backgroundImage: `url(${hero})`,
  }}
></div>



      {/* Form */}
      <div className="w-full md:w-1/2 max-w-md p-6 md:p-8 m-4 md:m-0 bg-white/20 backdrop-blur-md shadow-lg rounded-lg">
        <h1
          className="font-bold text-2xl md:text-3xl text-center mb-6"
          style={{ fontFamily: "fantasy" }}
        >
          Start Your Engine 💨
        </h1>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Username */}
          <div>
            <label
              className="block mb-1 font-bold text-black"
              style={{ fontFamily: "fantasy" }}
            >
              User Name
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600">
                <FontAwesomeIcon icon={faCircleUser} />
              </span>
              <input
                type="text"
                name="username"
                placeholder="Enter Your UserName"
                value={form.username}
                onChange={(e) =>
                  setForm({ ...form, username: e.target.value })
                }
                className="w-full h-10 pl-10 pr-4 border-2 rounded focus:ring-2 focus:ring-gray-500 outline-none"
              />
            </div>
            {error.username && (
              <p className="text-red-600 text-sm mt-1">{error.username}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label
              className="block mb-1 font-bold text-black"
              style={{ fontFamily: "fantasy" }}
            >
              Phone
            </label>
            <div>
              {!showOtpInput ? (
                <PhoneInput
                  country={"in"}
                  onChange={handlePhoneNumber}
                  value={form.Mobile}
                  placeholder="Enter your mobile number"
                  inputClass="!w-full !h-10 !pl-10 !pr-4 !border-2 !rounded !focus:ring-2 !focus:ring-gray-500 !outline-none"
                  buttonClass="!bg-transparent !border-none"
                />
              ) : (
                <OtpInput length={6} onOtpSubmit={onOtpSubmit} />
              )}
            </div>
            {error.Mobile && (
              <p className="text-red-600 text-sm mt-1">{error.Mobile}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label
              className="block mb-1 font-bold text-black"
              style={{ fontFamily: "fantasy" }}
            >
              Email
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <input
                type="text"
                value={form.Email}
                onChange={(e) => setForm({ ...form, Email: e.target.value })}
                placeholder="Enter Your Email Address"
                className="w-full h-10 pl-10 pr-4 border-2 rounded focus:ring-2 focus:ring-gray-500 outline-none"
              />
            </div>
            {error.Email && (
              <p className="text-red-600 text-sm mt-1">{error.Email}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label
              className="block mb-1 font-bold text-black"
              style={{ fontFamily: "fantasy" }}
            >
              Password
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600">
                <FontAwesomeIcon icon={faLock} />
              </span>
              <input
                type={isPassword ? "password" : "text"}
                value={form.Password}
                onChange={(e) =>
                  setForm({ ...form, Password: e.target.value })
                }
                placeholder="Enter Your Password"
                className="w-full h-10 pl-10 pr-10 border-2 rounded focus:ring-2 focus:ring-gray-500 outline-none"
              />
              <span
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-black"
                onClick={() => setIsPassword(!isPassword)}
              >
                {isPassword ? "👁️" : "🙈"}
              </span>
            </div>
            {error.Password && (
              <p className="text-red-600 text-sm mt-1">{error.Password}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label
              className="block mb-1 font-bold text-black"
              style={{ fontFamily: "fantasy" }}
            >
              Confirm Password
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600">
                <FontAwesomeIcon icon={faLock} />
              </span>
              <input
                type={isPassword ? "password" : "text"}
                value={form.ConfirmPassword}
                onChange={(e) =>
                  setForm({ ...form, ConfirmPassword: e.target.value })
                }
                placeholder="Enter Your Confirm Password"
                className="w-full h-10 pl-10 pr-10 border-2 rounded focus:ring-2 focus:ring-gray-500 outline-none"
              />
              <span
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-black"
                onClick={() => setIsPassword(!isPassword)}
              >
                {isPassword ? "👁️" : "🙈"}
              </span>
            </div>
            {error.ConfirmPassword && (
              <p className="text-red-600 text-sm mt-1">{error.ConfirmPassword}</p>
            )}
          </div>

          <button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-md transition mt-4"
            type="submit"
          >
            Register
          </button>

          <p className="mt-4 text-black text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 underline">
              Log in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
