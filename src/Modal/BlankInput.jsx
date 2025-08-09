import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


function BlankInput({user}) {
  const[theme,setTheme] = useState("light")
  const textColor = theme === "light" ? "text-black" : "text-white"
  return (
    <div className={`bg-white/10 backdrop-blur-md mt-2 p-4 rounded-md max-w-[900px] mx-auto ${textColor} border  border-gray-300 shadow-sm`}>
      <h2 className={`font-bold ${textColor} text-base mb-3 border-b border-gray-400 pb-1`}> Selected User</h2>
      <form className='grid grid-cols-2 gap-4 text-sm'>
        <div>
        <label className={`font-bold ${textColor}block mb-1`}>Name</label>
        <div className='relative'>
          <span className='absolute left-3 top-1/2 -translate-y-1/2 text-blue-500'>
          <FontAwesomeIcon icon={faEnvelope} />
          </span>
          <input type='text'
          name='name'
          value={user?.name || ""}
          disabled
          className='w-full focus:outline-none focus:ring-2 focus:ring-black  bg-white/20 border border-gray-300 rounded pl-9 pr-3 py-1'/>

        </div>
        </div>
        <div>
          <label className={`font-bold ${textColor}block mb-1`}>userName</label>
          <div className='relative'>
            <span className='absolute left-2 top-1/2 -translate-y-1/2 text-blue-500'>
             <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <input 
            type='text'
            name='userName'
            value={user?.username || ""}
            disabled
            className='w-full bg-white/20 focus:outline-none focus:ring-2 focus:ring-black border border-gray-300 pl-9 pr-3 py-1'

            />
          </div>
        </div>
         <div>
          <label className={`font-bold ${textColor}block mb-1`}>Email</label>
          <div className='relative'>
            <span className='absolute left-2 top-1/2 -translate-y-1/2 text-blue-500'>
             <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <input 
            type='text'
            name='userName'
            value={user?.email || ""}
            disabled
            className='w-full bg-white/20 focus:outline-none focus:ring-2 focus:ring-black border border-gray-300 pl-9 pr-3 py-1'

            />

          </div>

        </div>
         <div>
        <label className={`font-bold ${textColor}block mb-1`}>City</label>
          <div className='relative'>
            <span className='absolute left-2 top-1/2 -translate-y-1/2 text-blue-500'>
             <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <input 
            type='text'
            name='userName'
             value={user?.address?.city || ""}
            disabled
            className='w-full bg-white/20 focus:outline-none focus:ring-2 focus:ring-black border border-gray-300 pl-9 pr-3 py-1'

            />

          </div>

        </div>
        
      </form>
      
    </div>
  )
}

export default BlankInput