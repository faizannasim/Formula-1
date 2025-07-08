import React, { useState } from "react";
import newImg from "../assets/new.png";
import hero from "../assets/register.png";
import { Link } from "react-router-dom";

import {
  faEnvelope,
  faLock,
  faPhone,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate()
  const strongPasswordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

  const [error, setError] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setError(validationErrors);
    } else {
      localStorage.setItem("Email", form.Email);
      setIsSubmitted(true);
      setError({});
      setForm({
        username: "",
        Mobile: "",
        Email: "",
        Password: "",
        ConfirmPassword: "",
      });
      console.log(form);
        navigate("/dashboard")
    }
  };

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
              className="text-black font-bold mb-2"
              style={{ fontFamily: "fantasy" }}
            >
              Mobile
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <FontAwesomeIcon icon={faPhone} />
              </span>
              <input
                type="text"
                name="Mobile"
                value={form.Mobile}
                placeholder="Enter Your Mobile Number"
                onChange={(e) => setForm({ ...form, Mobile: e.target.value })}
                className="w-full h-10 pr-4 py-2 pl-10 border-2 focus:ring-2 outline-none focus:ring-gray-500 transition rounded"
              />
            </div>
            {error.Mobile && (
              <p className="text-red-600 text-sm mt-1">{error.Mobile}</p>
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
                type="text"
                value={form.Password}
                onChange={(e) => setForm({ ...form, Password: e.target.value })}
                placeholder="Enter Your Password"
                className="w-full h-10 pr-4 py-2 pl-10 border-2 focus:ring-2 outline-none focus:ring-gray-500 transition rounded"
              />
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
                type="text"
                value={form.ConfirmPassword}
                onChange={(e) =>
                  setForm({ ...form, ConfirmPassword: e.target.value })
                }
                placeholder="Enter Your Confirm Password"
                className="w-full h-10 pr-4 py-2 pl-10 border-2 focus:ring-2 outline-none focus:ring-gray-500 transition rounded"
              />
            </div>
            {error.ConfirmPassword && (
              <p className="text-red-600 text-sm mt-1">
                {error.ConfirmPassword}
              </p>
            )}
          </div>

          <button className="btn btn-danger absolute bottom-44" type="submit">
            Submit
          </button>

          <p className="absolute bottom-28 text-black" style={{ fontFamily: "fantasy" }}>
  Already have an account? <Link to="/login">Log in</Link>
</p>

        </form>
      </div>
    </div>
  );
}

export default Register;
