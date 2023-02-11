import React from 'react'
import { Chatlist } from './Chatlist'
import { Navbar } from './Navbar'

export const Sidebar = ({userLeave, onClose}) => {
  return (
    <div className='sidebar'>
        <Navbar userLeave={userLeave} onClose={onClose}/>
        <Chatlist/>
    </div>
  )
}
