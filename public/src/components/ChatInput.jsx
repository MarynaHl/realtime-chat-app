import React, { useState } from "react";
import { BsEmojiSmileFill } from "react-icons/bs";
import { IoMdSend } from "react-icons/io";
import styled from "styled-components";
import Picker from "emoji-picker-react";

export default function ChatInput() {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [msg, setMsg] = useState("");

  const handleEmojiPickerhideShow = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  const handleEmojiClick = (event, emoji) => {
let message = msg;
message += emoji.emoji;
setMsg(message);
  };

  return (
    <Container>
      <div className="button-container">
        <div className="emoji">
          <BsEmojiSmileFill onClick={handleEmojiPickerhideShow} />
          {showEmojiPicker && <Picker onEmojiClick={handleEmojiClick} />}
        </div>
      </div>
      <form className="input-container">
        <input
          type="text"
          placeholder="Message..." />
          value={msg}
          onChange={(e)=>setMsg(e.target.value)}
        <button className="submit">
          <IoMdSend />
        </button>
      </form>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  align-items: center;
  padding: 1rem;
  background-color: #2b2b41;
  position: relative;

  .button-container {
    display: flex;
    align-items: center;
    color: white;
    margin-right: 1rem;

    .emoji {
      position: relative;

      svg {
        font-size: 1.5rem;
        color: #f1c40f;
        cursor: pointer;
      }

      .emoji-picker-react {
        position: absolute;
        bottom: 50px;
        background-color: #27293d;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
        border-color: #44475a;
        border-radius: 0.5rem;

        .emoji-scroll-wrapper::-webkit-scrollbar {
          background-color: #27293d;
          width: 5px;
        }

        .emoji-scroll-wrapper::-webkit-scrollbar-thumb {
          background-color: #44475a;
        }

        .emoji-categories button {
          filter: contrast(0);
        }

        .emoji-search {
          background-color: #44475a;
          border-color: #f1c40f;
        }

        .emoji-group:before {
          background-color: #27293d;
        }
      }
    }
  }

  .input-container {
    display: flex;
    align-items: center;
    background-color: #44475a;
    border-radius: 1.5rem;
    padding: 0.5rem 1rem;
    width: 100%;

    input {
      flex: 1;
      background-color: transparent;
      border: none;
      color: #f8f8f2;
      font-size: 1rem;
      padding-left: 0.5rem;

      &::placeholder {
        color: #8d8d8d;
      }

      &:focus {
        outline: none;
      }
    }

    button {
      background-color: #f1c40f;
      border: none;
      border-radius: 50%;
      padding: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      svg {
        font-size: 1.2rem;
        color: #2b2b41;
      }
    }
  }
`;
