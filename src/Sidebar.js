import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import DonutLargelcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Avatar, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import SidebarChat from './SidebarChat';
import db from './firebase';





function Sidebar() {

    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        const unsubscribe = db.collection('rooms').onSnapshot(snapshot => (
            setRooms(snapshot.docs.map(doc =>

            ({
                id: doc.id,
                data: doc.data()
            })
            ))
        ))
        return() => {
            unsubscribe();
        }
    }, [])

    return (
        <div className='sidebar'>
            <div className='sidebar_header'>
                <Avatar />
                <div className='sidebar_headerRight'>
                    <IconButton>
                        <DonutLargelcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>

                </div>
            </div>
            <div className='sidebar_search'>
                <div className='sidebar_searchContainer'>
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <input placeholder='Search or start new chat' type='text' />
                </div>

            </div>
            <div className='sidebar_chats'>
                <SidebarChat addNewChart />
              {rooms.map(room => (
                <SidebarChat key={room.id} id={room.id} 
                name={room.data.name}/>
                
              ))}

            </div>
        </div>
    )
}

export default Sidebar