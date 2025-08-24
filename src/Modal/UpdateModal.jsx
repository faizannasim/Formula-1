import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import newImg from "../assets/bull.png";
import { toast } from "react-toastify";

function UpdateModal({ onSubmit, onclose, user }) {
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (user) {
      setName(user.name || "");
      setUserName(user.username || "");
      setEmail(user.email || "");
      setCity(user.address?.city || "");
    }
  }, [user]);

  const textColor = theme === "light" ? "text-black" : "text-white";

  const updateUser = async (e) => {
    e.preventDefault();

    const updatedUser = {
      ...user,
      name,
      username,
      email,
      address: {
        ...user.address,
        city,
      },
    };

    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${user.id}`,
        {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedUser),
        }
      );
      const data = await res.json();
      console.log("Updated user:", data);

      onSubmit(data);
      toast.success("User details updated successfully");
      onclose();
    } catch (err) {
      toast.error("Failed to update user.");
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4"
      onClick={onclose} // Close modal on background click
    >
      {/* Stop propagation so clicking inside modal doesn't close */}
      <div
        className="flex flex-col md:flex-row bg-white/20 backdrop-blur-lg rounded-xl overflow-hidden max-w-4xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="hidden md:block md:w-1/2 bg-cover bg-center"
          style={{
            backgroundImage: `url(${newImg})`,
            minHeight: "50vh",
          }}
        />

        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <h1
            className={`text-center font-bold mb-6 ${textColor}`}
            style={{ fontFamily: "fantasy", fontSize: "1.5rem" }}
          >
            Update User
          </h1>

          <form className="space-y-4" onSubmit={updateUser}>
            {[
              { label: "Name", value: name, setter: setName, type: "text" },
              { label: "Username", value: username, setter: setUserName, type: "text" },
              { label: "Email", value: email, setter: setEmail, type: "email" },
              { label: "City", value: city, setter: setCity, type: "text" },
            ].map(({ label, value, setter, type }) => (
              <div key={label}>
                <label
                  className={`font-bold block mb-1 ${textColor}`}
                  style={{ fontFamily: "fantasy" }}
                >
                  {label}
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-black">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </span>
                  <input
                    type={type}
                    value={value}
                    onChange={(e) => setter(e.target.value)}
                    className="w-full bg-white/80 placeholder:text-gray-600 focus:ring-2 focus:outline-none focus:ring-blue-500 border border-gray-300 rounded text-black shadow-sm pl-10 pr-4 py-2"
                    style={{ fontFamily: "fantasy" }}
                    required
                  />
                </div>
              </div>
            ))}

            <div className="flex justify-end space-x-4 pt-3">
              <button
                type="button"
                onClick={onclose}
                className="px-4 py-2 rounded-md bg-gray-700 text-white hover:bg-gray-600 transition"
              >
                Close
              </button>
              <button
                type="submit"
                className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateModal;
