import React from "react";
import { ImageBackground } from "react-native";
import { Box, Text, ScrollView , Switch, Hidden } from "native-base";
import { useColorMode } from "native-base";


const background = "../image/background.png";
const darkBackground = "../image/dark-background.png";

const SettingScreen = ({ navigation }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box>
    <Hidden colorMode="dark">
    <Box backgroundColor="#FFF9EB" _dark={{bg: "#414141"}} height="100%"  > 
      <ImageBackground 
        source={require('../image/background.png')}
        resizeMode="cover" 
        style={{flex: 1,}} 
        alt="background">
      <Text fontSize={24} fontWeight="700" ml="20px" mt="50px" _light={{color: "#70552E"}} _dark={{color: "#FFFCF4"}}>色彩模式</Text>
      <Box height="0" width={150} borderBottomWidth="2px" ml="20px" _light={{borderColor: "#ffe08f"}} _dark={{borderColor: "#1F1F1F"}} ></Box>
      <Box alignItems="center"mt="10px">
        
      <Box alignItems="center" justifyContent="space-around" flexDirection="row" mt="20px" >
        <Text fontSize="16px" _light={{color: "#70552E"}} _dark={{color: "#fff"}}>{colorMode == "light" ? "淺色模式" : "深色模式"}</Text>
        <Switch 
          name="light Mode"
          isChecked={colorMode === "light"}
          onToggle={toggleColorMode}
          accessibilityLabel="displa-mode"
          accessibilityHint="light or dark mode"
        />
      </Box>
      </Box></ImageBackground>
    </Box>
    </Hidden>
    <Hidden colorMode="light">
    <Box backgroundColor="#FFF9EB" _dark={{bg: "#414141"}} height="100%"  > 
      <ImageBackground 
        source={require('../image/dark-background.png')}
        resizeMode="cover" 
        style={{flex: 1,}} 
        alt="background">
      <Text fontSize={24} fontWeight="700" ml="20px" mt="50px" _light={{color: "#70552E"}} _dark={{color: "#FFFCF4"}}>色彩模式</Text>
      <Box height="0" width={150} borderBottomWidth="2px" ml="20px" _light={{borderColor: "#ffe08f"}} _dark={{borderColor: "#1F1F1F"}} ></Box>
      <Box alignItems="center"mt="10px">
        
      <Box alignItems="center" justifyContent="space-around" flexDirection="row" mt="20px" >
        <Text fontSize="16px" _light={{color: "#70552E"}} _dark={{color: "#fff"}}>{colorMode == "light" ? "淺色模式" : "深色模式"}</Text>
        <Switch 
          name="light Mode"
          isChecked={colorMode === "light"}
          onToggle={toggleColorMode}
          accessibilityLabel="displa-mode"
          accessibilityHint="light or dark mode"
        />
      </Box>
      </Box></ImageBackground>
    </Box>
    </Hidden>
    </Box>
  );
};

export default SettingScreen;