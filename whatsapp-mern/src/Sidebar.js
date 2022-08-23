 import React from 'react'
 import "./Sidebar.css"
 import SidebarChat from './SidebarChat';
 import ChatIcon from '@mui/icons-material/Chat';
 import DonutLargeIcon from '@mui/icons-material/DonutLarge';
 import SearchIcon from '@mui/icons-material/Search';

import { Avatar, IconButton } from '@mui/material';
 function Sidebar() {

   return (
     <div className='sidebar'>
        <div className='sidebar__header'>
            <Avatar src='https://gravatar.com/avatar/b2c5a94a605dbf39061bebe4756c8fce?s=400&d=robohash&r=x'/>
            <div className='sidebar__headerRight'>
                <IconButton>
                    <DonutLargeIcon />
                </IconButton>
                <IconButton>
                    <ChatIcon />
                </IconButton>
                <IconButton>
                    <ChatIcon />
                </IconButton>
                
            </div>
        </div>
        <div className='sidebar__search'>
            <div className='sidebar__searchContainer'>
                <SearchIcon/>
                <input placeholder='Search or start new chat' type="text"></input>
            </div>
        </div>
        <div className='sidebar__chats'>
            <SidebarChat/>
            <SidebarChat/>
            <SidebarChat/>
        </div>
     </div>
        
   )
 }
 
 export default Sidebar