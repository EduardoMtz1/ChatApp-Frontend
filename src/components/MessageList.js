import React, {useEffect, useRef} from 'react'
import { useSelector } from 'react-redux'
import { Message } from './Message'

export const MessageList = () => {
  const messageList = useSelector(state => state.messageList)
  const messageToShow = messageList;

  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "auto" })
  }
  useEffect(() => {
    scrollToBottom()
  }, [messageToShow]);
  return (
    <div className='messageList'>
        {messageToShow != null? messageToShow.map((content) => 
          <Message content={content}/>
        ): ''}
        <div ref={messagesEndRef} />
    </div>
  )
}
