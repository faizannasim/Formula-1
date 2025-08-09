import React, { useState, useEffect, useRef } from "react";

function OtpInput({ length = 6, onOtpSubmit }) {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRefs = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (isNaN(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < length - 1) {
      inputRefs.current[index + 1].focus();
    }

    onOtpSubmit(newOtp.join(""));
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div className="flex justify-between gap-2 mt-4">
      {otp.map((_, index) => (
        <input
          key={index}
          type="text"
          maxLength={1}
          ref={(el) => (inputRefs.current[index] = el)}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          className="w-10 h-10 text-center border border-gray-300 rounded"
        />
      ))}
    </div>
  );
}

export default OtpInput;
