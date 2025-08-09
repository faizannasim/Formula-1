import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import newImg from "../assets/bull.png";
import newImg1 from "../assets/bg.jpeg";
import { toast } from "react-toastify";

function UpdateModal({ onSubmit, onclose, user }) {
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");

  useEffect(() => {
    if (user) {
      setName(user.name || "");
      setUserName(user.username || "");
      setEmail(user.email || "");
      setCity(user.address?.city || "");
    }
  }, [user]);

const updateUser = async (e) => {
  e.preventDefault();

  const updateUser = {
    ...user,
    name,
    username,
    email,
    address: {
      ...user.address,
      city,
    },
  };
const textColor = theme === 'light' ? 'text-black' : 'text-white';

  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users/${user.id}`,
      {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateUser),
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
      className="fixed inset-0 bg-black/40 flex justify-center items-center z-50"
     
    >
      
      <div
        className="h-[50vh] w-[25%] bg-white/20 backdrop-blur-lg flex flex-col justify-center items-center"
        style={{
          backgroundImage: `url(${newImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

     
      <div className="relative bg-white/20 backdrop-blur-md w-[25%] h-[50vh] ml-0.5 max-w-h p-8">
        <h1
          className="flex justify-center items-center text-black"
          style={{ fontFamily: "fantasy" }}
        >
          Update User
        </h1>

        <form className="space-y-4" onSubmit={updateUser}>
          {/* Name */}
          <div>
            <label className="font-bold block mb-1 text-black" style={{ fontFamily: "fantasy" }}>
              Name
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/3 -translate-y-1/3 text-black">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full  bg-white/80 placeholder:text-gray-600 focus:ring-2 focus:outline-none focus:ring-blue-500 border border-gray-300 rounded text-black shadow-sm pl-10 pr-4 py-2"

                style={{ fontFamily: "fantasy" }}
              />
            </div>
          </div>

         
          <div>
            <label className="font-bold block mb-1 text-black" style={{ fontFamily: "fantasy" }}>
              Username
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/3 -translate-y-1/3 text-black">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <input
                type="text"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full  bg-white/80 placeholder:text-gray-600 focus:ring-2 focus:outline-none focus:ring-blue-500 border border-gray-300 rounded text-black shadow-sm pl-10 pr-4 py-2"

                style={{ fontFamily: "fantasy" }}
              />
            </div>
          </div>

        
          <div>
            <label className="font-bold block mb-1 text-black" style={{ fontFamily: "fantasy" }}>
              Email
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/3 -translate-y-1/3 text-black">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                 className="w-full  bg-white/80 placeholder:text-gray-600 focus:ring-2 focus:outline-none focus:ring-blue-500 border border-gray-300 rounded text-black shadow-sm pl-10 pr-4 py-2"

                style={{ fontFamily: "fantasy" }}
              />
            </div>
          </div>

          
          <div>
            <label className="font-bold block mb-1 text-black" style={{ fontFamily: "fantasy" }}>
              City
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/3 -translate-y-1/3 text-black">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
               className="w-full  bg-white/80 placeholder:text-gray-600 focus:ring-2 focus:outline-none focus:ring-blue-500 border border-gray-300 rounded text-black shadow-sm pl-10 pr-4 py-2"

                style={{ fontFamily: "fantasy" }}
              />
            </div>
          </div>

         
          <div className="flex justify-end space-x-3 pt-3 gap-5">
            <button
              className={`btn btn-danger px-4 py-1 rounded-md bg-gray-700 {textColor}`}
              type="button"
              onClick={onclose}
            >
              Close
            </button>
            <button
              className={`btn btn-danger px-4 py-1 rounded-md bg-gray-700 {textColor}`}
              type="submit"
            >
              Update
              <span></span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateModal;
