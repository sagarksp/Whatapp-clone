import { createContext,  useState } from "react";

export const AccountContext =createContext(null);

const AccountProvider = ({children})=>{

    const [account,setAcount] = useState();

    return(

        <AccountContext.Provider value={{
                    account,
                    setAcount
           
        }}>
            {children}
        {/* CHILDREN FORWARD KREGE */}

        </AccountContext.Provider>

    )


}
export default AccountProvider;