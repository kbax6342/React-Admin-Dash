import React from 'react'
import { SideBar } from '../../components/sideBar/SideBar'
import './Home.scss'

export const Home = () => {
  return (
    <div className='home'>
        <SideBar/>
       <div className='homeContainer'>container</div>
        
    </div>
  )
}
