import React from "react";
import { Box, Image } from "native-base";

const Header = () => {
    return (
        <Box>
        <Box h="56px" w="100%" bg="#fff" mt="60px" display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" >
            <Image h="40px" w="40px" ml="8px" source={{uri: "https://github.com/wnewen/App-wk3-photoes/blob/main/btn_menu.png?raw=true"}} alt="btn_menu"/>
            <Image h="40px" w="40px" mr="8px" source={{ uri: "https://github.com/wnewen/App-wk3-photoes/blob/main/btn_search.png?raw=true" }} alt="btn_search"/>
        </Box>
        </Box>
    );
};

export default Header;