import React from 'react'

export const Login = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='chatAppName'>Welcome to ChatApp</span>
            <span className='title'>Please log in to start </span>
             <form>
                <input type="text" placeholder='Username'/>
                <input type="password" placeholder='Password'/>
                <button>Log in!</button>
             </form>
             <p>Don't have an account yet? Sign up here</p>
        </div>
    </div>
  )
}
