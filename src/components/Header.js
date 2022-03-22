import React from "react";
import { Box, Image } from "native-base";

const Header = () => {
    return (
        <Box h="56px" w="100%" bg="#fff">
            <Image h="40px" w="40px" source={{uri: "https://github.com/wnewen/App-wk3-photoes/blob/main/btn_menu.png?raw=true"}}/>
        </Box>
    );
};

export default Header;