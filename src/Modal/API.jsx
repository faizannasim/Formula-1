import React, { useState } from 'react';

function API({ users = [], onUpdate }) {
  const [theme, setTheme] = useState('light');

  const textColor = theme === 'light' ? 'text-black' : 'text-white';
  const bgColor = theme === 'light' ? 'bg-white/90' : 'bg-gray-900/80';

  return (
    <div className={`mb-6 p-5 rounded-xl shadow-xl ${bgColor}`}>
      <h2
        className={`font-bold mb-4 text-xl ${textColor} inline-block pb-1 tracking-wide`}
        style={{ fontFamily: 'fantasy' }}
      >
        Driver Lineup
      </h2>

      <div className="overflow-auto">
        <table className="min-w-full text-sm md:text-base text-left border-collapse rounded-lg overflow-hidden">
          <thead className={`${theme === 'light' ? 'bg-gray-200 text-black' : 'bg-gray-700 text-white'}`}>
            <tr>
              <th className="px-3 md:px-4 py-2 font-semibold text-sm md:text-base">ID</th>
              <th className="px-3 md:px-4 py-2 font-semibold text-sm md:text-base">Name</th>
              <th className="px-3 md:px-4 py-2 font-semibold text-sm md:text-base">UserName</th>
              <th className="px-3 md:px-4 py-2 font-semibold text-sm md:text-base">Email</th>
              <th className="px-3 md:px-4 py-2 font-semibold text-sm md:text-base">Address</th>
              <th className="px-3 md:px-4 py-2 font-semibold text-sm md:text-base">Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map((item) => (
              <tr
                key={item.id}
                className={`${
                  theme === 'light' ? 'bg-white/80' : 'bg-gray-800/80'
                } hover:${theme === 'light' ? 'bg-yellow-200' : 'bg-yellow-700'} even:bg-gray-100 even:dark:bg-gray-900 odd:bg-white/70 odd:dark:bg-gray-800 transition-colors`}
              >
                <td className="px-3 md:px-4 py-2">{item.id}</td>
                <td className="px-3 md:px-4 py-2">{item.name}</td>
                <td className="px-3 md:px-4 py-2">{item.username}</td>
                <td className="px-3 md:px-4 py-2">{item.email}</td>
                <td className="px-3 md:px-4 py-2">{item.address?.city}</td>
                <td className="px-3 md:px-4 py-2">
                  <button
                    onClick={() => onUpdate(item)}
                    className={`bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 md:px-4 rounded-md shadow-sm text-xs md:text-sm transition duration-200`}
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default API;
