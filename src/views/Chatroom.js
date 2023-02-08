import React from 'react'

export const Chatroom = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='chatAppName'>Welcome to ChatApp</span>
            <span className='title'>Wanna start a new Chatroom?</span>
             <form>
                <input type="text" placeholder='New Chatroom name'/>
                <button>Create now!</button>
             </form>
             <span className='title'>Or join an existant one</span>
             <form>
                <input type="text" placeholder='Chatroom ID'/>
                <button>Join now!</button>
             </form>
        </div>
    </div> 
  )
}
