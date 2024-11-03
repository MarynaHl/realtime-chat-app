import React from 'react';
import styled from 'styled-components';
export default function ChatContainer({currentChat}) {

  return (
    {currentChat && (
    <Container>
<div className="chat-header">
  <div className="user-details">
    <div className="avatar">
    <img
src={`data:image/svg+xml;base64,${currentChat.avatarImage}`}
alt="avatar"
         />
         <div className="username">
      <h3>{currentChat.username}</h3>
      </div>
    </div>
  </div>
</div>
      {/* <h1>Welcome, {currentUser && currentUser.username}!</h1>
      <p>Select a chat to start messaging.</p> */}
      <div className="chat-messages"></div>
      <div className="chat-input"></div>
    </Container>
  )}
}

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: #2a2a2a;
  text-align: center;
  padding: 1rem;

  h1 {
    font-size: 2rem;
    color: #4e0eff;
  }

  p {
    font-size: 1.2rem;
  }
`; 
