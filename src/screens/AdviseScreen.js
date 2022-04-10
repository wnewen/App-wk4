import React from "react";
import { ImageBackground, Image } from "react-native-web";
import { Box, Text, ScrollView } from "native-base";
import DocumentList from "../components/DocumentList";
import DocumentData from "../json/documents.json"
import StatusList from "../components/StatusList";

const AdviseScreen = ({ navigation }) => {
  return (
    <ScrollView >
    <Box backgroundColor="#FFF9EB"> 
      {/* <Header /> */}
    
      <Text fontSize={24} fontWeight="700" ml="20px" mt="50px" color="#70552E" >我的狀態</Text>
      <Box height="0" width={120} borderColor="#ffe08f" borderBottomWidth="2px" ml="20px"></Box>
      <StatusList 
        list={DocumentData.myStatus}
        navigation={navigation}
        mt="16px"
      />

      <Text fontSize={24} fontWeight="700" ml="20px" mt="40px" color="#70552E" >飲食指南</Text>
      <Box height="0" width={120} borderColor="#ffe08f" borderBottomWidth="2px" ml="20px"></Box>
      <DocumentList 
        list={DocumentData.document}
        navigation={navigation}
        mt="16px"
      />
    </Box>
    </ScrollView>
  );
};

export default AdviseScreen;