import { Box } from "native-base";
import React from "react";
import { FlatList,Text } from "react-native";
import AlbumDetail from "./AlbumDetail";
import PopularBook from "./PopularBook";

const PopularBookList = ({ list, navigation }) => {
  const renderItem = ({ item }) => <PopularBook album={item} navigation={navigation} />;
  return (
      <Box paddingLeft="12px" paddingRight="12px">
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

export default PopularBookList;