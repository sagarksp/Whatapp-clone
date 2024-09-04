import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";
import { Box,styled } from "@mui/material";
import {Chat} from '@mui/icons-material';
import { useState } from "react";

//components
import ChatMenu from "./ChatMenu";
import InfoDrawer from "../drawer/InfoDrawer";

const Component = styled(Box)
 `
 height:44px;
 background:#ededed;
 padding:8px 16px;
 display:flex;
 align-items:center;
 `   

 const Wrapper = styled(Box)
 `
 margin-left:auto;
 & > *{
 margin-left :2px;
 padding:8px;
 color:#000
 };
 & :first-child{
 font-size:22px;
 margin-right:8px;
 margin-top:3px;
 }
 `

//styling image
const Image =styled('img')({
    height:40,
    width:40,
    borderRadius:'50%'
    
})

const MenuHeader  = ()=>{

    const [openDrawer, setOpenDrawer] = useState(false);
 
    const{account} = useContext(AccountContext);

    const toggleDrawer = ()=> {

        setOpenDrawer(true);
    } 


return(

    <>
    <Component>
        <Image src={account.picture} alt="dp" onClick={()=> toggleDrawer()}/>
        <Wrapper>
            <Chat />
            {/* chat Menu m pass kara diya setOpen drawer because i want to show profile when i click in menu on */}
            <ChatMenu setOpenDrawer ={setOpenDrawer}/>
        </Wrapper>
    </Component>
    {/* info drawer m profile kholni h to usme hi state bhej di props m */}
    <InfoDrawer open ={openDrawer} setOpen={setOpenDrawer} />
    
    </>
)

}
export default MenuHeader;