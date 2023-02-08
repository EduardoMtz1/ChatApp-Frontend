import React from 'react'

export const Register = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='chatAppName'>Welcome to ChatApp</span>
            <span className='title'>Please register to start </span>
             <form>
                <input type="text" placeholder='Username'/>
                <input type="password" placeholder='Password'/>
                <button>Sign up!</button>
             </form>
             <p>Already have an account? Login here</p>
        </div>
    </div>
  )
}
