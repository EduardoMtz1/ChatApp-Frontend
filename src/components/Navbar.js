import React from 'react'

export const Navbar = () => {
  return (
    <div className='navbar'>
        <span className='room'>Chatroom:</span>
        <div className='user'>
            <span>Username</span>
            <button>Log out</button>
        </div>
    </div>
  )
}
