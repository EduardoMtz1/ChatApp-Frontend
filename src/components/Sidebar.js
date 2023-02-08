import React from 'react'
import { Chatlist } from './Chatlist'
import { Navbar } from './Navbar'

export const Sidebar = () => {
  return (
    <div className='sidebar'>
        <Navbar/>
        <Chatlist/>
    </div>
  )
}
