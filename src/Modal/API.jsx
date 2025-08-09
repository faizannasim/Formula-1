import React, { useState } from 'react'

function API({users=[],onUpdate}) {
  const [theme,setTheme] = useState("light")


  const textColor = theme === "light" ? "text-black" : "text-white"

  return (
    <div className=' mb-6 p-5 rounded-xl shadow-xl'>
      <h2 className={`font-bold mb-4  text-xl ${textColor}inline-block pb-1 tracking-wide`}>Driver Lineup</h2>
      <div className='overflow-auto'>
        <table className='w-full text-sm text-left border-collapse  bg-white/20 text-black rounded-lg overflow-hidden'>
        <thead className=' text-black'>
          <tr>
             <th className="px-4 py-3   font-semibold text-sm">ID</th>
              <th className="px-4 py-3   font-semibold text-sm">Name</th>
               <th className="px-4 py-3  font-semibold text-sm">UserName</th>
                <th className="px-4 py-3   font-semibold text-sm">Email</th>
                  <th className="px-4 py-3   font-semibold text-sm">Address</th>
                 <th className="px-4 py-3  font-semibold text-sm">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item)=>(
            <tr key={item.id} className={`bg-white/20 backdrop-blur-lg hover:bg-yellow transition-color hover:even:bg-neutral-800 hover:odd:bg-neutral-700
`}>
               <td className="px-4 py-2  ">{item.id}</td>
                <td className="px-4 py-2  ">{item.name}</td>
                <td className="px-4 py-2  ">{item.username}</td>
                <td className="px-4 py-2  ">{item.email}</td>
                <td className="px-4 py-2  ">{item.address?.city}</td>
                <td className='px-4 py-2  '>
                  <button onClick={()=>onUpdate(item)} className={`bg-blue-400 hover:bg-blue-500 ${textColor} py-1 px-4 rounded-md shadow-sm text-sm transition duration-200`}>
                    Update
                  </button>


                </td>

            </tr>
          ))}
        </tbody>
        </table>


      </div>
      
    </div>
  )
}

export default API