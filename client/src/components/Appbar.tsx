import React, { useState } from 'react'
import { adminAppbarlinks } from '../constants/data'
import { GiHamburgerMenu } from 'react-icons/gi';
import { BiLogOut } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';


const Appbar:React.FC = () => {

    const [collapse,setCollapse] = useState(false)

    const navigate = useNavigate()

    const logout = () =>{
        localStorage.setItem('token','')
        navigate('/login')
    }

  return (
    <div className={`${collapse?'w-24 rounded-l-md rounded-b-md':'w-1/5 rounded-md'} flex flex-col p-2 text-white text-md font-light  relative shadow-lg border border-gray-600`}>
        <div 
          className={`bg-gray-800 p-2 flex justify-center ${collapse?'rounded-md my-2':'rounded-full absolute right-0 top-0 -mt-4 -mr-3 border border-gray-600'}`}
          onClick={()=>setCollapse(!collapse)}
        >
            <GiHamburgerMenu className="text-xl text-white"/>
        </div>
        {
            adminAppbarlinks.map(link=>{
                return (
                    <div key={link.hash} className='w-full flex py-2 px-5 justify-start items-center my-4 rounded-md cursor-pointer'>
                        <link.icon className={`text-white ${collapse?'text-[2.5rem]':'text-4xl'}`}/>
                        <p className={`ml-7 font-medium ${collapse?'hidden':''}`}>
                            {link.name}
                        </p>
                    </div>

                )
            })
        }
        <div 
            className='w-full flex -mb-80 py-2 px-5 justify-start items-center my-4 rounded-md cursor-pointer'
            onClick={logout}
        >
            <BiLogOut className={`text-white ${collapse?'text-[2.5rem]':'text-4xl'}`}/>
            <p className={`ml-7 font-medium ${collapse?'hidden':''}`}>Logout</p>
        </div>
    </div>
  )
}

export default Appbar