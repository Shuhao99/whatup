import React from 'react';
import "./Chat.css";
import { Avatar, IconButton } from '@mui/material';
import MicIcon from '@mui/icons-material/Mic';
import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import { useState } from 'react';
//import axios from "../../axios";

// function Chat({messages}) {
function Chat() {
    // const [input, setInput] = useState("");

    // const sendMessage = async (e) => {
    //     e.preventDefault();
    //     await axios.post('/messages/new', {
    //         message: input,
    //         name: "Demo2",
    //         timestamp: "Just now",
    //         received: false
    //     });

    //     setInput("");
    // }
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar />

                <div className="chat__headerInfo">
                    <h3>Room Name</h3>
                    <p>Last seen...</p>
                </div>

                <div className="chat__headerRight">
                    <IconButton>
                        <SearchIcon/>
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>

            <div className="chat__body">
                {/* {messages.map((message) => (
                    <p className={`chat__message ${message.received && "chat__reciever"}`}>
                        <span className="chat__name">{message.name}</span>
                            {message.message}
                        <span className="chat__timestamp">
                            {message.timestamp}
                        </span>
                    </p>
                ))} */}
                <p className="chat__message">
                        <span className="chat__name">Sony</span>
                            This is a message.
                        <span className="chat__timestamp">
                           {new Date().toUTCString()}
                        </span>
                </p>

            </div>

            {/* <div className="chat__footer">
                <InsertEmoticonIcon />
                <form >
                    <input
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    type="text"
                    placeholder="Type a message"
                    />
                    <button
                    onClick={sendMessage}
                    type="submit"
                    >
                        Send a message
                    </button>
                </form>
                <MicIcon />
            </div> */}
        </div>
    )
}

export default Chat