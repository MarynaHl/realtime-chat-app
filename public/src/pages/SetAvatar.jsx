import React, { useState } from 'react';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Loader from "../assets/loader.gif";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { setAvatarRoute } from '../utils/APIRouters';

export default function SetAvatar() {

    const api = "https://api.multiavatar.com/45678945";
    const navigate = useNavigate();

  return (
    <>
    <Container><h1>Set Avatar</h1></Container>
    <ToastContainer />
    </>
  );
}

const Container = styled.div``;