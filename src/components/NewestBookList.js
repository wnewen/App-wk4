import { Box } from "native-base";
import React from "react";
import { FlatList,Text } from "react-native";
import AlbumDetail from "./AlbumDetail";
import NewestBooks from "./NewestBook";
import NewestBook from "./NewestBook";
import PopularBook from "./PopularBook";

const NewestBookList = ({ list, navigation }) => {
  const renderItem = ({ item }) => <NewestBook album={item} navigation={navigation} />;
  return (
    <Box  paddingLeft="12px" paddingRight="12px">
        {/* <Text fontSize={24}>Newest Books</Text> */}
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

export default NewestBookList;