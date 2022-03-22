import { Box } from "native-base";
import React from "react";
import { FlatList,Text } from "react-native";
import AlbumDetail from "./AlbumDetail";

const AlbumList = ({ list, navigation }) => {
  const renderItem = ({ item }) => <AlbumDetail album={item} navigation={navigation} />;
  return (
    <Box>
        <FlatList
        data={list}
        renderItem={renderItem}
        keyExtractor={item => item.title}
        horizontal={ true }
        showsHorizontalScrollIndicator={ false }
        />    
    </Box>
  );  
}

export default AlbumList;