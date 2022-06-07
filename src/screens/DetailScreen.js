import React from 'react';
import { Linking } from 'react-native';
import { Center, ScrollView, Box, AspectRatio, Text, Heading, Image, Button, Pressable } from "native-base";


const DetailScreen = ({ route }) => {
  const { title, 
    artist,
    price,
    url,
    image,
    description,
    star1,
    star2,
    star3,
    star4,
    star5,
    score,
    five
  } = route.params;
  return (
    <Center bgColor="#fff" h="100%">
      <Pressable bg="amber.100">
        <Text>Delete Document !</Text>
      </Pressable>
    </Center>
  );
}

export default DetailScreen;