import React, { useEffect, useState } from "react";

function Dashboardd() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("accesstoken");

    fetch("https://dummyjson.com/auth/me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        console.log("User data received:", data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  return (
    <div className="max-w-md mx-auto mt-12 p-6 bg-white rounded-lg shadow-md text-center">
      <h1 className="text-4xl font-bold text-indigo-600 mb-6">Dashboard</h1>
      <h2 className="text-2xl font-semibold mb-3">
        Welcome, {user?.username || "Guest"}
      </h2>
      <p className="text-gray-700 mb-2">
        <span className="font-medium">ID:</span> {user?.id || "Loading..."}
        < br />
        <span className="font-medium">Email:</span> {user?.email || "Loading..."}
      </p>
      <p className="text-gray-700 mb-2"> 
        <span className="font-medium">Name:</span> {user?.firstName} {user?.lastName}
        <span className="font-medium">Gender:</span> {user?.gender || "Loading..."}
      </p>
      {user?.image && (
        <img
          src={user.image}
          alt="avatar"
          className="mx-auto rounded-full w-24 h-24 object-cover"
        />
      )}
    </div>
  );
}

export default Dashboardd;
