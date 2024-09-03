import Messenger from "./components/Messenger";
import { GoogleOAuthProvider } from "@react-oauth/google";

const App = ()=> {

  const clientId1 ='781575511001-9rk3v93d39o65ljf105r0afjkhim7ggu.apps.googleusercontent.com';
  
  return (
    <GoogleOAuthProvider clientId={clientId1}>
     <Messenger />
     
    </GoogleOAuthProvider>
  );
}

export default App;
