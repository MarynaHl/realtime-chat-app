import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { BiPowerOff } from "react-icons/bi";

export default function Logout() {
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <Button onClick={handleClick}>
      <BiPowerOff />
    </Button>
  );
}

const Button = styled.button``;
