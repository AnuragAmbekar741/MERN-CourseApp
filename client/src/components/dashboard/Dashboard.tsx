import React, { useEffect } from 'react'
import Appbar from '../Appbar'
import MainScreen from './MainScreen'
import getData from '../../hooks/getData'

const Dashboard:React.FC = () => {

  const {gettingData} = getData()

  useEffect(()=>{
    gettingData("http://localhost:3011/admin/me")
  },[])

  return (
    <div className='flex w-full h-screen p-10'>
      <Appbar/>
      <MainScreen/>
    </div>
  )
}

export default Dashboard