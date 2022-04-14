import React from "react";
import { ImageBackground } from "react-native";
import { Box, Text, ScrollView, Hidden } from "native-base";
import DocumentData from "../json/documents.json"
import StatusList from "../components/StatusList";
import GuidelineList from "../components/GuidelineList";

const background = "../image/background.png";
const darkBackground = "../image/dark-background.png";

const AdviseScreen = ({ navigation }) => {
  return (
    <Box>
      <Hidden colorMode="dark">
        <Box h="100%"> 
        <ImageBackground source={require('../image/background.png')} resizeMode="cover" style=
          {{flex: 1,}} alt="background">
          {/* <Header /> */}
        
          <Text fontSize={24} fontWeight="700" ml="20px" mt="50px" _light={{color: "#70552E"}} _dark={{color: "#FFF9EB"}}>我的狀態</Text>
          <Box height="0" width={120} borderBottomWidth="2px" ml="20px" _light={{borderColor: "#ffe08f"}} _dark={{borderColor: "#1F1F1F"}}></Box>
          <StatusList 
            list={DocumentData.myStatus}
            navigation={navigation}
            mt="16px"
          />

          <Text fontSize={24} fontWeight="700" ml="20px" mt="40px" _light={{color: "#70552E"}} _dark={{color: "#FFF9EB"}}>飲食指南</Text>
          <Box height="0" width={120} borderColor="#ffe08f" borderBottomWidth="2px" ml="20px" _dark={{borderColor: "#1F1F1F"}}></Box>
          <GuidelineList 
            list={DocumentData.dietaryGuidlines}
            navigation={navigation}
            mt="16px"
          />
          </ImageBackground>
        </Box>
      </Hidden>
      <Hidden colorMode="light">
        <Box backgroundColor="#FFF9EB" _dark={{bg: "#414141"}} h="100%"> 
        <ImageBackground source={require('../image/dark-background.png')} resizeMode="cover" style=
          {{flex: 1,}} alt="background">
          {/* <Header /> */}
        
          <Text fontSize={24} fontWeight="700" ml="20px" mt="50px" _light={{color: "#70552E"}} _dark={{color: "#FFF9EB"}}>我的狀態</Text>
          <Box height="0" width={120} borderBottomWidth="2px" ml="20px" _light={{borderColor: "#ffe08f"}} _dark={{borderColor: "#ffb800"}}></Box>
          <StatusList 
            list={DocumentData.myStatus}
            navigation={navigation}
            mt="16px"
          />

          <Text fontSize={24} fontWeight="700" ml="20px" mt="40px" _light={{color: "#70552E"}} _dark={{color: "#FFF9EB"}}>飲食指南</Text>
          <Box height="0" width={120} borderColor="#ffe08f" borderBottomWidth="2px" ml="20px" _dark={{borderColor: "#ffb800"}}></Box>
          <GuidelineList 
            list={DocumentData.dietaryGuidlines}
            navigation={navigation}
            mt="16px"
          /></ImageBackground>
        </Box>
      </Hidden>
    </Box>
  );
};

export default AdviseScreen;