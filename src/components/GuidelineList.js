import { Box } from "native-base";
import React from "react";
import { FlatList,Text } from "react-native";
import GuidelineCard from "./GuidelineCard";

const GuidelineList = ({ list, navigation }) => {
  const renderItem = ({ item }) => <GuidelineCard guideline={item} navigation={navigation} />;
  return (
    <Box>
        <FlatList
        data={list}
        renderItem={renderItem}
        keyExtractor={item => item.title}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        />    
    </Box>
  );  
}

export default GuidelineList;