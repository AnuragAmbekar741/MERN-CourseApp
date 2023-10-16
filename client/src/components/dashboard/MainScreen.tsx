import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
import { CiUser } from 'react-icons/ci';



const MainScreen:React.FC = () => {
  return (
        <div className='w-full flex justify-start'>
                {/* <h1 className='text-3xl text-white'>Main screen</h1> */}
                <div className='w-full flex justify-between h-fit border-b border-gray-500 border-l-0 p-3'>
                    <div className='w-4/5'>
                        <input className="w-full border p-2 rounded-xl focus:outline-none text-lg font-medium bg-slate-200" />
                        <AiOutlineSearch className="text-3xl text-black absolute top-[3.75rem] right-72"/>
                    </div>
                    <div className='w-1/5 flex justify-center'>
                        <CiUser className="text-4xl text-white my-1"/>
                        <h1 className='text-xl p-2 text-center text-white'>Username</h1>
                    </div>
                </div>
        </div> 
  )
}

export default MainScreen