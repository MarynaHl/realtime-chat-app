import React, { useState } from 'react';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Loader from "../assets/loader.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { setAvatarRoute } from '../utils/APIRouters';

export default function SetAvatar() {
  return (
    <div>
      <h1>Set Avatar</h1>
    </div>
  );
}
