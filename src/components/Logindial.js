import { Dialog, Box,Typography,List,ListItem, styled } from "@mui/material";
import { qrCodeImage } from "../constants/data";
import { GoogleLogin } from "@react-oauth/google";

import { jwtDecode } from "jwt-decode";

const dialogStyle ={
    height:"96%",
    marginTop:'12%',
    width:'60%',
    maxWidth:'100%',
    boxShadow:'none',
    overflow:'hidden'
}

//handling list style

const StyledList = styled(List)`
& > li {
        padding:0;
        margin-top:15px;
        font-size: 18px;
        line-height: 28px;
        color: #4a4a4a;

}
`

const QRCode = styled('img')({
    height: 264,
    width:264,
    margin: ' 50px 0 0 50px'
})
const Title = styled(Typography)
`
font-size : 26px;
color:#525252;
font-family:inherit;
margin-bottom:25px;
`

const Component =styled(Box)
`
display:flex;

`
const Container = styled(Box)
`
padding: 56px 0 56px 56px;
`

const Logindial = () =>{

    const onLoginSuccess = (res)=>{
       const decode = jwtDecode(res.credential)
       console.log(decode)
    }
    const onLoginError =(res)=>{
        console.log( "login failed", res)
    }


    return(
        <Dialog open = {true}
            PaperProps={{sx : dialogStyle}}
        >
        <Component>
            <Container>
                <Title>To use whatsapp in computers</Title>
                <StyledList>
                    <ListItem>1. Open WhatsApp on your phone </ListItem>
                    <ListItem>2. Tap Menu Settings and select Whatsapp Web</ListItem>
                    <ListItem>3. Point your phone to this screen to capture the code</ListItem>
                </StyledList>
            </Container>
            <Box style={{position: 'relative'}}>
                <QRCode src={qrCodeImage} alt="qr code " />
                <Box style = {{position: 'absolute', top: '50%', tranform: 'translateX(25%)'}}>
                    <GoogleLogin 
                    onSuccess={onLoginSuccess}
                    onError = {onLoginError}
                    />
                </Box>
            </Box>
        </Component>
        </Dialog>
    )
}
export default Logindial;