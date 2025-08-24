import React, { useEffect, useState } from "react";
import { auth } from "../firebase";  // firebase.js ka sahi path dena hai
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";


function PhoneOTP() {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);

useEffect(() => {
  if (!auth) return; // ensure auth exists
  window.recaptchaVerifier = new RecaptchaVerifier(
    "recaptcha-container",
    { size: "invisible" },
    auth
  );
}, [auth]);



  const requestOTP = () => {
    const appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, phone, appVerifier)
      .then((result) => {
        setConfirmationResult(result);
        alert("OTP sent to: " + phone);
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to send OTP");
      });
  };

  const verifyOTP = () => {
    if (!confirmationResult) {
      alert("Please request OTP first.");
      return;
    }
    confirmationResult
      .confirm(otp)
      .then(() => {
        alert("Verification successful!");
      })
      .catch(() => {
        alert("Invalid OTP, try again.");
      });
  };

  return (
    <div>
      <input
        type="tel"
        placeholder="+91 1234567890"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button onClick={requestOTP}>Send OTP</button>

      <div id="recaptcha-container"></div>

      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />
      <button onClick={verifyOTP}>Verify OTP</button>
    </div>
  );
}

export default PhoneOTP;
