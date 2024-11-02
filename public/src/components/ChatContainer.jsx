import React from 'react';
import styled from 'styled-components';

function ChatContainer({ currentUser }) {
  return (
    <Container>
      <h1>Welcome, {currentUser && currentUser.username}!</h1>
      <p>Select a chat to start messaging.</p>
      {/* Додайте потрібний JSX-код для вмісту чату */}
    </Container>
  );
}

export default ChatContainer;

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
