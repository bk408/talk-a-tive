import './App.css';

import HomePage from './pages/HomePage';
import ChatPage from './pages/ChatPage';
import { Routes, Route } from "react-router-dom";
import Body from './pages/Body';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route path="/chats" element={<ChatPage/>} />
        <Route path="/body" element={<Body/>} />
      </Routes>
    </div>
  );
}

export default App;
