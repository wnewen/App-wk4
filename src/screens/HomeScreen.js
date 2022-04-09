import React from "react";
import { Box, Text, ScrollView } from "native-base";
import AlbumList from "../components/AlbumList";
import albumData from "../json/albums.json";
import PopularBookList from "../components/PopularBookList";
import NewestBookList from "../components/NewestBookList";
import Header from "../components/Header";

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView >
    <Box backgroundColor="#FFF9EB"> 
      {/* <Header /> */}
      <Text fontSize={24} fontWeight="500" ml="20px" mt="8px">Popular Book</Text>
      <PopularBookList 
        list={albumData.popularBook}
        navigation={navigation}
        mt="16px"
      />
      <Text fontSize={24} fontWeight="500" ml="20px" mt="16px">Newest Book</Text>
      <NewestBookList 
        list={albumData.newestBook}
        navigation={navigation}
        mt="16px"
      />
    </Box>
    </ScrollView>
  );
};

export default HomeScreen;