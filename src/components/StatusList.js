import { Box } from "native-base";
import React from "react";
import { FlatList,Text } from "react-native";
import AlbumDetail from "./AlbumDetail";
import Document from "./Document";
import StatusCard from "./StatusCard";

const StatusList = ({ list, navigation }) => {
  const renderItem = ({ item }) => <StatusCard status={item} navigation={navigation} />;
  return (
    <Box>
        <FlatList
        data={list}
        renderItem={renderItem}
        keyExtractor={item => item.date}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        />    
    </Box>
  );  
}

export default StatusList;