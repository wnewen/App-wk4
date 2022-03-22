import React from "react";
import { Box, Text, ScrollView } from "native-base";
import AlbumList from "../components/AlbumList";
import albumData from "../json/albums.json";
import PopularBookList from "../components/PopularBookList";
import NewestBookList from "../components/NewestBookList";
import Header from "../components/Header";

const AlbumScreen = ({ navigation }) => {
  return (
    <ScrollView backgroundColor="#fff">
    <Box backgroundColor="#fff"> 
      <Header />
      <Text fontSize={24}>Popular Book</Text>
      <PopularBookList 
        list={albumData.popularBook}
        navigation={navigation}
      />
      <Text fontSize={24}>Newest Book</Text>
      <NewestBookList 
        list={albumData.newestBook}
        navigation={navigation}
      />
    </Box>
    </ScrollView>
  );
};

export default AlbumScreen;