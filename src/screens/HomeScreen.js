import React from "react";
import { Box, Text, ScrollView, Image, useColorMode, Hidden } from "native-base";
import { ImageBackground } from "react-native";
import DocumentList from "../components/DocumentList";
import DocumentData from "../json/documents.json";
import { ColorMode } from "native-base";
import { useDispatch, useSelector } from "react-redux";
import { setDocument } from "../redux/documentSlice";
import { selectDocument } from "../redux/documentSlice";

const background = "../image/background.png";
const darkBackground = "../image/dark-background.png";

const HomeScreen = ({ navigation }) => {
  const { colorMode } = useColorMode();

  const poopList = useSelector((state) => state.document.poopDocument);
  const document = useSelector(selectDocument);
  const dispatch = useDispatch();

  return (
    <Box>
    <Hidden colorMode="dark">
    <Box _light={{backgroundColor: "#FFF9EB"}} _dark={{bg: "#414141"}} h="100%"> 
      {/* <Header /> */}
      <ImageBackground
        source={require('../image/background.png')}
        resizeMode="cover" 
        style={{flex: 1}} alt="background">
        <Text fontSize={24} fontWeight="700" ml="20px" mt="36px" _light={{color: "#70552E"}} _dark={{color: "#FFF9EB"}}>記錄</Text>
        <Box height="0" width={100} _light={{borderColor: "#FFE08F"}} _dark={{borderColor: "#ffb800"}} borderBottomWidth="2px" ml="20px"></Box>
        <DocumentList 
          list={poopList}
          navigation={navigation}
        />
      </ImageBackground>
    </Box>
    </Hidden>
    <Hidden colorMode="light">
    <Box _light={{backgroundColor: "#FFF9EB"}} _dark={{bg: "#414141"}} h="100%"> 
      {/* <Header /> */}
      <ImageBackground
        source={require('../image/dark-background.png')}
        resizeMode="cover" 
        style={{flex: 1}} alt="background">
        <Text fontSize={24} fontWeight="700" ml="20px" mt="36px" _light={{color: "#70552E"}} _dark={{color: "#FFF9EB"}}>記錄</Text>
        <Box height="0" width={100} _light={{borderColor: "#FFE08F"}} _dark={{borderColor: "#ffb800"}} borderBottomWidth="2px" ml="20px"></Box>
        <DocumentList 
          list={poopList}
          navigation={navigation}
        />
      </ImageBackground>
    </Box>
    </Hidden>
    </Box>
  );
};

export default HomeScreen;