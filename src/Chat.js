import React, { useEffect, useState } from 'react'
import './Chat.css'
import { Avatar, IconButton } from '@mui/material'
import AttachFile from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Search from '@mui/icons-material/Search';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';



function Chat() {

    const [input, setInput] = useState("");
    const [seed, setSeed] = useState("");

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    const sendMessage = (e) => {
        e.preventDefault();
        console.log('You typed...', input)
        setInput("");
    }

    return (
        <div className='chat'>
            <div className='chat_header'>
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className='chat_headerInfo'>
                    <h3>Room Name</h3>
                    <p>Last seen at ....</p>
                </div>
                <div className='chat_headerRight'>
                    <IconButton>
                        <Search />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className='chat_body'>
                <p className={`chat_message ${true && 'chat_reciever'}`}><span className='chat_name'>Thanu</span>Heyyy Guyss<span className='chat_timestamp'>3.50pm</span></p>
                <p className='chat_message'><span className='chat_name'>Thanu</span>Heyyy Guyss<span className='chat_timestamp'>3.50pm</span></p>

            </div>
            <div className='chat_footer'>
                <InsertEmoticonIcon />
                <form><input value={input} onChange={e => setInput(e.target.value)} placeholder='Type a message' type='text' />
                    <button onClick={sendMessage} type='submit' >Send a message</button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat



