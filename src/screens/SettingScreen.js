import React from "react";
import { ImageBackground, Image } from "react-native-web";
import { Box, Text, ScrollView , Switch } from "native-base";
import { useColorMode } from "native-base";

const SettingScreen = ({ navigation }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box backgroundColor="#FFF9EB" _dark={{bg: "#414141"}} height="100%"  > 
      
      <Text fontSize={24} fontWeight="700" ml="20px" mt="50px" _light={{color: "#70552E"}} _dark={{color: "#FFFCF4"}}>色彩模式</Text>
      <Box height="0" width={150} borderBottomWidth="2px" ml="20px" _light={{borderColor: "#ffe08f"}} _dark={{borderColor: "#1F1F1F"}} ></Box>
      <Box alignItems="center"mt="10px">
        
        <Text fontSize="lg">{colorMode == "light" ? "Light Mode" : "Dark Mode"}</Text>
        <Switch 
          name="light Mode"
          isChecked={colorMode === "light"}
          onToggle={toggleColorMode}
          accessibilityLabel="displa-mode"
          accessibilityHint="light or dark mode"
        />
      </Box>
    </Box>
  );
};

export default SettingScreen;