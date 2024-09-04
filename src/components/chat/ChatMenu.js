import { MoreVert } from "@mui/icons-material";
import { Menu, MenuItem,styled } from "@mui/material";
import { useState } from "react";


const MenuOption = styled(MenuItem)`
font-size: 14px;
padding: 15px 60px 5px 24px; 
color: #4A4A4A;
`
 
// props ko get kr liya destructured kar k
const ChatMenu = ({setOpenDrawer}) => {

const [open ,setopen ] =useState(null);

const handleClose = ()=>{
    setopen(null);
}
//e.current target use kiya h 

const handleclick =(e)=>{
    setopen(e.currentTarget);
}
 
  return (
    <>
      <MoreVert onClick={handleclick}/>
      <Menu

        anchorEl={open}
        keepMounted
        open={open}
        onClose={handleClose}
        
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}

        transformOrigin={{
            vertical:"top",
            horizontal:"right"
        }}
      >

        <MenuOption onClick={() => { handleClose(); setOpenDrawer(true) }}>Profile</MenuOption>
        <MenuOption onClick={handleClose}>Archived</MenuOption>
        <MenuOption onClick={handleClose}>Starred messages</MenuOption>
        <MenuOption onClick={handleClose}>Settings</MenuOption>
        <MenuOption onClick={handleClose}>Log out </MenuOption>
      </Menu>
    </>
  );
};

export default ChatMenu;
