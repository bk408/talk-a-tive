import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ChatPage = () => {


  const [chats, setChats] = useState([])
  const [home, setHome] = useState(null)


  const fetchChats = async() => {
    const {data} = await axios.get('/api/chat')

    setChats(data);
  }

  useEffect(() => {
    fetchChats();
  }, [])

  return(
    <div>{chats.map((chat) => {
    return(
        <div>{chat.chatName}</div>
    )
  })}
    </div>
  )
}

export default ChatPage