import React from 'react'
import  Avatar  from "@material-ui/core"
import './Sidebar.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DonutLargelcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';



function Sidebar() {
  return (
    <div className='sidebar'>
<div className='sidebar_header'>
    <AccountCircleIcon/>
    <div className='sidebar_headerRight'>
    <DonutLargelcon/>
    <ChatIcon/>
    <MoreVertIcon/>
    </div>
    </div>    
    <div className='sidebar_search'>

    </div>
    <div className='sidebar_chats'>

    </div>
    </div>
  )
}

export default Sidebar