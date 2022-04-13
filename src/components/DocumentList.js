import { Box } from "native-base";
import React from "react";
import { FlatList,Text } from "react-native";
import DocumentCard from "./DocumentCard";

const DocumentList = ({ list, navigation }) => {
  const renderItem = ({ item }) => <DocumentCard document={item} navigation={navigation} />;
  return (
    <Box mb="90px">
        <FlatList
        data={list}
        renderItem={renderItem}
        keyExtractor={item => item.date}
        />    
    </Box>
  );  
}

export default DocumentList;