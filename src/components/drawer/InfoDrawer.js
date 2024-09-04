import { Drawer,Box,Typography ,styled} from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import Profile from "./Profile";



const Header = styled(Box)
`
background: #008069;
height:107px;
color:#FFFFFF;
display:flex;
& svg, & > p {
    margin-top:auto;
    padding:15px;
    font-weight:600 
    }

`
const Component = styled(Box)`
    background:#ededed;
    height:85%;
`


// yha p hum dono child ki css uske parent se manage karege
// icon ko svg boltye h or typography ko p tag 

const drawerStyle = {
    left:20,
    top:17, 
    height:'95%',
    width: '30%',
    boxShadow: 'none'

};

const Text =styled(Typography)
`
font-size:15px;
`



const InfoDrawer = ({open,setOpen})=>{

    const handleClose = () =>{
        setOpen(false);
    }

    return(
        <Drawer                        
                open={open}
                // onclose jb click hoga tab bhar click hoga
                onClose={handleClose}
                PaperProps={{sx: drawerStyle}}
                // zindex badha do upar dikh jayega 
                style={{zIndex:1500}}
        
        >
            <Header>
                <ArrowBack onClick = {() =>setOpen(false)}/>
                <Text>Profile</Text>
            </Header>
            <Component>
                    <Profile />
            </Component>

        </Drawer>
    )

}
export default InfoDrawer;