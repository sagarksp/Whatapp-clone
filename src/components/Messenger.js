import { AppBar, Toolbar, styled, Box } from "@mui/material";
import Logindial from "./Logindial"; // Ensure the correct path
import ChatDialog from "./chat/ChatDialog";
import { useContext } from "react";
import { AccountContext } from "../context/AccountProvider";

const Component = styled(Box)`
  height: 100vh;
  background-color: #dcdcdc;
`;

const AppHeader = styled(AppBar)`
  height: 200px;
  background-color: #00bfa5;
  box-shadow: none;
`;
const ChatHeader = styled(AppBar)`
  height: 125px;
  background-color: #00a884;
  box-shadow: none;
`;

const Messenger = () => {
  const { account } = useContext(AccountContext);

  return (
    <Component>
      {account ? (
        <>
          <ChatHeader>
            <Toolbar></Toolbar>
          </ChatHeader>
          <ChatDialog />
        </>
      ) : (
        <>
          <AppHeader>
            <Toolbar></Toolbar>
          </AppHeader>
          <Logindial />
        </>
      )}
    </Component>
  );
};

export default Messenger;
