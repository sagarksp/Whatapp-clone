
import { AppBar, Toolbar, styled, Box } from '@mui/material';
import Logindial from './Logindial'; // Ensure the correct path

const Component = styled(Box)
`
height:100vh; 
background-color:#DCDCDC;
`

const Header = styled(AppBar)
`
    height: 200px;
    background-color:#00bfa5;
    box-shadow: none;
`



const Messenger = () => {
  return (
    <Component>
      <Header>
        <Toolbar>
          
        </Toolbar>
      </Header>
      <Logindial />
    </ Component>
  );
};

export default Messenger;

