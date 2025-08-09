import PhoneInput from "react-phone-input-2";
import React, { use, useState } from "react";
import newImg from "../assets/new.png";
import hero from "../assets/register.png";
import { Link } from "react-router-dom";
import "react-phone-input-2/lib/style.css";
import ReCAPTCHA from "react-google-recaptcha";
import TextField from "@mui/material/TextField";

import {
  faEnvelope,
  faLock,
  faPhone,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { Phone } from "lucide-react";
import { toast } from "react-toastify";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../firebase";
import OtpInput from "./OtpInput";

function Register() {
  const navigate = useNavigate();
  const strongPasswordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

  const [error, setError] = useState({});
  const [isPassword, setIsPassword] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [phone, setPhone] = useState("");

  const [showOtpInput, setShowOtpInput] = useState("");
  const [form, setForm] = useState({
    username: "",
    Mobile: "",
    Email: "",
    Password: "",
    ConfirmPassword: "",
  });

  const validate = () => {
    const errors = {};

    if (!form.username.trim()) {
      errors.username = "Enter Your UserName";
    }

    if (!form.Mobile.trim()) {
      errors.Mobile = "Enter Your Mobile Number";
    }

    if (!form.Email.trim()) {
      errors.Email = "Enter Your Email Address";
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(form.Email)
    ) {
      errors.Email = "Enter a valid Email Address";
    }

    if (!form.Password || !form.ConfirmPassword) {
      errors.ConfirmPassword = "Please enter both password fields";
    } else if (form.Password !== form.ConfirmPassword) {
      errors.ConfirmPassword = "Passwords do not match";
    } else if (!strongPasswordRegex.test(form.Password)) {
      errors.ConfirmPassword =
        "Password must be strong (A-Z, a-z, 0-9, special character)";
    }

    return errors;
  };

  const handleCaptcha = () => {};
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setError(validationErrors);
      return;
    }
    //console.log("Form Submitted:", form)

    const RegisterUser = JSON.parse(localStorage.getItem("RegisterUser")) || [];
    console.log(RegisterUser);

    const isAlreadyRegister = RegisterUser.some(
      (user) => user.Email === form.Email,
    );

    if (isAlreadyRegister) {
      toast.error("This email is already registered. Try logging in.");
      return;
    }

    const newUser = {// push this into reg user
      username: form.username, 
      Mobile: form.Mobile,
      Email: form.Email,
      Password: form.Password,
      
    };
    console.log("Newly Registered:", newUser);


    RegisterUser.push(newUser);
    console.log("Updated User List:", RegisterUser);

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
  const onOtpSubmit = (otp)=>{
    console.log("login",otp)

  }
  return (
    <div
      className="flex justify-center min-h-screen"
      style={{
        backgroundImage: `url(${newImg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="bg-white/20 w-[40%] h-[85vh] overflow-y-auto mt-22 text-white p-8 flex flex-col justify-center items-center backdrop-blur-md ml-0.5 shadow-lg"
        style={{
          backgroundImage: `url(${hero})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      <div className="relative bg-white/20 backdrop-blur-md ml-0.5 shadow-lg w-[40%] h-[85vh] mt-22 max-w-md p-8 overflow-auto">
        <h1
          className="font-bold text-black flex items-center justify-center"
          style={{ fontFamily: "fantasy" }}
        >
          Start Your Engine💨
        </h1>
        <form className="space-4-5" onSubmit={handleSubmit}>
          <div>
            <label
              className="text-black font-bold block mb-2"
              style={{ fontFamily: "fantasy" }}
            >
              User Name
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <FontAwesomeIcon icon={faCircleUser} />
              </span>
              <input
                type="text"
                name="username"
                placeholder="Enter Your UserName"
                value={form.username}
                onChange={(e) => setForm({ ...form, username: e.target.value })}
                className="w-full h-10 pr-4 py-2 pl-10 border-2 focus:ring-2 outline-none focus:ring-gray-500 transition rounded"
              />
            </div>
            {error.username && (
              <p className="text-red-600 text-sm mt-1">{error.username}</p>
            )}
          </div>

          <div>
            <label
              className="font-bold mb-2 text-black"
              style={{ fontFamily: "fantasy" }}
            >
              Phone
            </label>

            <div className="relative">
              {!showOtpInput ? (
                <PhoneInput
                  country={"in"}
                  onChange={handlePhoneNumber}
                  value={form.Mobile}
                  placeholder="Enter your mobile number"
                  inputClass="!w-full !h-10 !pr-4 !py-2 !pl-10 !border-2 !focus:ring-2 !outline-none !focus:ring-gray-500 !transition !rounded !bg-white/10 !border-black"
                  buttonClass="!bg-transparent !hover:bg-transparent !border-none"
                  containerClass="!w-full"
                />
              ) : (
                <div>
                  <p>Enter OTP sent to {form.Mobile}</p>
                  <OtpInput length={6} onOtpSubmit={onOtpSubmit}></OtpInput>
                </div>
              )}
            </div>
            {error.Mobile && (
              <p className="text-red-600 text-sm mt-1 min-h-[1.2rem]">
                {error.Mobile}
              </p>
            )}
          </div>

          <div>
            <label
              className="font-bold mb-2 text-black"
              style={{ fontFamily: "fantasy" }}
            >
              Email
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <input
                type="text"
                value={form.Email}
                onChange={(e) => setForm({ ...form, Email: e.target.value })}
                placeholder="Enter Your Email Address"
                className="w-full h-10 pr-4 py-2 pl-10 border-2 focus:ring-2 outline-none focus:ring-gray-500 transition rounded"
              />
            </div>
            {error.Email && (
              <p className="text-red-600 text-sm mt-1">{error.Email}</p>
            )}
          </div>

          <div>
            <label
              className="font-bold mb-2 text-black"
              style={{ fontFamily: "fantasy" }}
            >
              Password
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <FontAwesomeIcon icon={faLock} />
              </span>
              <input
                type={isPassword ? "password" : "text"}
                value={form.Password}
                onChange={(e) => setForm({ ...form, Password: e.target.value })}
                autoComplete="current-password"
                placeholder="Enter Your Password"
                className="w-full h-10 pr-4 py-2 pl-10 border-2 focus:ring-2 outline-none focus:ring-gray-500 transition rounded"
              />
              <span
                className="button absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
                onClick={() => setIsPassword(!isPassword)}
              >
                {" "}
                👁️{" "}
              </span>
            </div>
            {error.Password && (
              <p className="text-red-600 text-sm mt-1">{error.Password}</p>
            )}
          </div>

          <div>
            <label
              className="font-bold mb-2 text-black"
              style={{ fontFamily: "fantasy" }}
            >
              Confirm Password
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <FontAwesomeIcon icon={faLock} />
              </span>
              <input
                type={isPassword ? "password" : "text"}
                value={form.ConfirmPassword}
                onChange={(e) =>
                  setForm({ ...form, ConfirmPassword: e.target.value })
                }
                placeholder="Enter Your Confirm Password"
                className="w-full h-10 pr-4 py-2 pl-10 border-2 focus:ring-2 outline-none focus:ring-gray-500 transition rounded"
              />
              <span
                className="button absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
                onClick={() => setIsPassword(!isPassword)}
              >
                {" "}
                👁️{" "}
              </span>
            </div>
            {error.ConfirmPassword && (
              <p className="text-red-600 text-sm mt-1">
                {error.ConfirmPassword}
              </p>
            )}
          </div>
          <div id="recaptcha"></div>

          <button className="btn btn-danger mt-4 w-full" type="submit">
            Send OTP
          </button>

          <button className="btn btn-danger mt-4 w-full" type="submit">
            verify OTP
          </button>

          <p
            className="mt-4 text-black text-center"
            style={{ fontFamily: "fantasy" }}
          >
            Already have an account? <Link to="/login">Log in</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
