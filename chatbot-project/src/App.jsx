import { useState } from 'react';
import ChatInput from './components/Chatinput';
import ChatMessages from './components/ChatMessages';
import './App.css'

function App() {
  const [chatMessages, setChatMessages] = useState([
    { message: 'hello chat bot', sender: 'user', id: 'id1' },
    { message: 'Hello! How can I help you?', sender: 'bot', id: 'id2' },
    { message: 'what is the time?', sender: 'user', id: 'id3' },
    { message: "It's 10:03 PM", sender: 'bot', id: 'id4' }
  ]);
  //const [chatMessages,setChatMessages] = array;

  //const chatMessages = array[0];
  //const setChatMessages = array[1];


  return (
    <div className="app-container">

      <ChatMessages
        chatMessages={chatMessages}
      />

      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

export default App
