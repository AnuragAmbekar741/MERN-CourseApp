import React from 'react'
import Appbar from '../Appbar'
import MainScreen from './MainScreen'

const Dashboard:React.FC = () => {
  return (
    <div className='flex w-full h-screen p-10'>
      <Appbar/>
      <MainScreen/>
    </div>
  )
}

export default Dashboard