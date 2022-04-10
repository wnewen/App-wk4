import React from "react";
import { ImageBackground, Image } from "react-native-web";
import { Box, Text, ScrollView } from "native-base";
import DocumentList from "../components/DocumentList";
import DocumentData from "../json/documents.json"

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView >
    <Box _light={{backgroundColor: "#FFF9EB"}} _dark={{bg: "#414141"}} h="650px"> 
      {/* <Header /> */}
    
      <Text fontSize={24} fontWeight="700" ml="20px" mt="50px" _light={{color: "#70552E"}} _dark={{color: "#FFF9EB"}}>記錄</Text>
      <Box height="0" width={100} _light={{borderColor: "#ffe08f"}} _dark={{borderColor: "#1F1F1F"}} borderBottomWidth="2px" ml="20px" mb="20px"></Box>
      <DocumentList 
        list={DocumentData.document}
        navigation={navigation}
        mt="16px"
      />
      {/* <Text fontSize={24} fontWeight="500" ml="20px" mt="16px">Newest Book</Text>
      <NewestBookList 
        list={albumData.newestBook}
        navigation={navigation}
        mt="16px"
      /> */}
    </Box>
    </ScrollView>
  );
};

export default HomeScreen;