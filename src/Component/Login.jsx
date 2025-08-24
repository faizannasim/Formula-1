import React, { useState } from "react";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import newImg from "../assets/hh.jpg";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UAParser } from "ua-parser-js";

function Login() {
  const navigate = useNavigate();
  const [isPassword, setIsPassword] = useState(true);
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [data, setData] = useState({ Email: "", Password: "" });

  const validate = () => {
    const errors = {};
    if (!data.Email.trim()) errors.Email = "Enter Your Email Address";
    else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(data.Email))
      errors.Email = "Enter a valid email address";
    if (!data.Password.trim()) errors.Password = "Enter Your Password";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setError(validationErrors);
      return;
    }

    const RegisterUser = JSON.parse(localStorage.getItem("RegisterUser")) || [];

    // 🔴 Agar RegisterUser empty hai
    if (RegisterUser.length === 0) {
      toast.error("Please register first!");
      return;  // navigate hataya
    }

    const MatchUser = RegisterUser.find(
      (user) => user.Email === data.Email && user.Password === data.Password
    );

    if (!MatchUser) {
      toast.error("Invalid Email or Password");
      return;
    }

    try {
      const res = await fetch("https://ipinfo.io/json?token=02be15483e6676");
      const ipData = await res.json();
      const parser = new UAParser();
      const result = parser.getResult();

      const loginInfo = {
        ip: ipData.ip,
        city: ipData.city,
        region: ipData.region,
        country: ipData.country,
        browser: result.browser.name,
        os: result.os.name,
        device: result.device.type || "Desktop",
        time: new Date().toLocaleString(),
      };

      const prevLogins = JSON.parse(localStorage.getItem("LoginHistory")) || [];
      prevLogins.push(loginInfo);
      localStorage.setItem("LoginHistory", JSON.stringify(prevLogins));
      localStorage.setItem("Email", data.Email);
      localStorage.setItem("isLoggedIn", "true");

      setIsSubmitted(true);
      setError({});
      setData({ Email: "", Password: "" });
      toast.success("Login Successful!");
      navigate("/dashboard");
    } catch (err) {
      console.error("Error in login tracking:", err);
      toast.error("Error in login tracking");
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-yellow-200 via-purple-300 to-gray-500"
      style={{
        backgroundImage: `url(${newImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Welcome Panel */}
      <div className="w-full md:w-1/2 lg:w-1/3 bg-white/20 text-black p-6 md:p-12 flex flex-col justify-center items-center text-center md:text-left mb-8 md:mb-0 rounded-lg">
        <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ fontFamily: "fantasy" }}>
          Welcome Back
        </h2>
        <p className="italic text-xl md:text-2xl font-bold" style={{ fontFamily: "fantasy" }}>
          You don't win races in the garage. Let's go! 🔧➡️🏁
        </p>
      </div>

      {/* Login Form */}
      <div className="w-full md:w-1/2 lg:w-1/3 bg-white/10 backdrop-blur-md shadow-lg p-6 md:p-10 rounded-lg mx-4 max-w-md">
        <h1 className="text-center text-white text-2xl mb-6" style={{ fontFamily: "fantasy" }}>
          Login
        </h1>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Email */}
          <div>
            <label htmlFor="email" className="block mb-1 font-bold text-white" style={{ fontFamily: "fantasy" }}>
              Email
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <input
                id="email"
                type="text"
                value={data.Email}
                onChange={(e) => setData({ ...data, Email: e.target.value })}
                placeholder="Enter your Email"
                className="w-full border h-10 border-gray-500 rounded-md text-white pl-10 pr-4 py-2 bg-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                style={{ fontFamily: "fantasy" }}
              />
            </div>
            {error.Email && <p className="text-red-600 text-sm mt-1">{error.Email}</p>}
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block mb-1 font-bold text-white" style={{ fontFamily: "fantasy" }}>
              Password
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <FontAwesomeIcon icon={faLock} />
              </span>
              <input
                id="password"
                type={isPassword ? "password" : "text"}
                value={data.Password}
                onChange={(e) => setData({ ...data, Password: e.target.value })}
                placeholder="Enter your Password"
                className="w-full border h-10 border-gray-500 rounded-md text-white pl-10 pr-10 py-2 bg-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                style={{ fontFamily: "fantasy" }}
              />
              <button
                type="button"
                onClick={() => setIsPassword(!isPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white"
              >
                {isPassword ? "👁️" : "🙈"}
              </button>
            </div>
            {error.Password && <p className="text-red-600 text-sm mt-1">{error.Password}</p>}
          </div>

          {/* Remember Me */}
          <div>
            <label className="flex items-center space-x-2 text-white" style={{ fontFamily: "fantasy" }}>
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="border h-5 w-5 border-gray-500 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              />
              <span>Remember Me</span>
            </label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-md transition"
            style={{ fontFamily: "fantasy" }}
          >
            Submit
          </button>

          {/* Sign Up Link */}
          <p className="text-white text-center" style={{ fontFamily: "fantasy" }}>
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-400 underline">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
