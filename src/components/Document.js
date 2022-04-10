import React from "react";
import { Box, HStack, VStack, AspectRatio, Text, Image, Pressable } from "native-base"

const Document = ({ album, navigation }) => {
  return (
    <Box marginX={1} marginBottom={2} borderRadius={3} justifyContent="center" alignItems="center">
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
      <Box borderRadius="10px" w="355px" h="47px" display="flex" flexDirection="row" alignItems="center" justifyContent="space-around" bgColor="#CBB9FF" marginTop="20px" shadow={4}>
        {/* <Pressable 
          onPress={() => navigation.navigate('Detail', album)}
        >
          <AspectRatio w={140} h={200} ratio={0.7}>
            <Image 
              source={{ uri: album.image }}
              alt="album"
            />
          </AspectRatio>
        </Pressable> */}
        <Text fontSize={16} textAlign="center" color="#70552E">{album.date}</Text>
        <Text fontSize={16 } textAlign="center" color="#70552E">{album.shape}</Text>
        
      </Box>   
    </Box>
  )};

export default Document;