import React from "react";
import { Box, Text, ScrollView, Image, useColorMode,  } from "native-base";
import { ImageBackground } from "react-native";
import DocumentList from "../components/DocumentList";
import DocumentData from "../json/documents.json";
import { ColorMode } from "native-base";


const background = "../image/background.png";
const darkBackground = "../image/dark-background.png";

const HomeScreen = ({ navigation }) => {
  const { colorMode } = useColorMode();
  return (
    <Box _light={{backgroundColor: "#FFF9EB"}} _dark={{bg: "#414141"}} h="100%"> 
      {/* <Header /> */}
      <ImageBackground 
        _light={{source: require(background) }}
        _dark={{ source: require(darkBackground) }}
        resizeMode="cover" 
        style={{flex: 1}} alt="background">
        <Text fontSize={24} fontWeight="700" ml="20px" mt="50px" _light={{color: "#70552E"}} _dark={{color: "#FFF9EB"}}>記錄</Text>
        <Box height="0" width={100} _light={{borderColor: "#FFE08F"}} _dark={{borderColor: "#1F1F1F"}} borderBottomWidth="2px" ml="20px" mb="20px"></Box>
        <DocumentList 
          list={DocumentData.document}
          navigation={navigation}
          mt="16px"
        />
      </ImageBackground>
    </Box>
  );
};

export default HomeScreen;