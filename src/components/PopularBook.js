import React from "react";
import { Box, HStack, VStack, AspectRatio, Text, Image, Pressable } from "native-base"

const PopularBook = ({ album, navigation }) => {
  return (
    <Box marginX="8px" marginBottom={2} borderRadius={3} >
      {/* <HStack bg='#fff'>
        <AspectRatio w="50" ratio={1}>
          <Image
            margin="1"
            source={{ uri: album.thumbnail_image }}
            alt="artist"
          />
        </AspectRatio>
        <VStack paddingLeft={2} justifyContent="space-around">
          <Text>{album.title}</Text>
          <Text>{album.artist}</Text>
        </VStack>
      </HStack> */}
      <Box>
        <Pressable 
          onPress={() => navigation.navigate('Detail', album)}
        >
          <AspectRatio w={140} h={200} ratio={0.7} mt="8px">
            <Image 
              source={{ uri: album.image }}
              alt="book"
            />
          </AspectRatio>
        </Pressable>
        <Text fontSize={16} mt="16px" fontWeight="500">{album.title}</Text>
        <Text fontSize={12} opacity={0.5} mt="8px">{album.artist}</Text>
      </Box>   
    </Box>
  )};

export default PopularBook;