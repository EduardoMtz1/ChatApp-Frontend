import React from 'react'

export const InputMessage = () => {
  return (
    <div className='inputMessage '>
      <input type="text" placeholder='Type something' />
      <div className='send'>
        <button>Send</button>
      </div>
    </div>
  )
}
