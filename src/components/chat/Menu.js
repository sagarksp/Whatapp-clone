import { Box,styled } from "@mui/material";
//importing components
import MenuHeader from "./MenuHeader";
import SearchBox from "./SearchBox";


const Menuset = styled(Box)`
    borderRight=1px;
`

const Menu = () =>{

    return(
        <Menuset>
            <MenuHeader />
            <SearchBox />
        </Menuset>
    )
}
export default Menu;