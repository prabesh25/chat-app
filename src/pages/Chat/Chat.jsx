import React from 'react'
import './Chat.css'
// import RightSidebar from '../../components/LeftSlidebar/ChatBox/RightSlidebar/RightSidebar'
import ChatBox from '../../components/ChatBox/ChatBox'
// import LeftSidebar from '../../components/LeftSlidebar/Leftslidebar/LeftSidebar'
import RightSidebar from '../../components/RightSlidebar/RightSidebar'
import LeftSidebar from '../../components/LeftSlidebar/LeftSidebar'

const Chat = () => {
  return (
    <div className='chat'>
        <div className="chat-container">
            <LeftSidebar/>
            <ChatBox/>
            <RightSidebar/>
        </div>
    </div>
  )
}

export default Chat