import { Box } from "native-base";
import React from "react";
import { FlatList,Text } from "react-native";
import AlbumDetail from "./AlbumDetail";
import Document from "./Document";

const DocumentList = ({ list, navigation }) => {
  const renderItem = ({ item }) => <Document album={item} navigation={navigation} />;
  return (
    <Box>
        <FlatList
        data={list}
        renderItem={renderItem}
        keyExtractor={item => item.date}
        />    
    </Box>
  );  
}

export default DocumentList;