import React from 'react';
import { Linking } from 'react-native';
import { Center, ScrollView, Box, AspectRatio, Text, Heading, Image, Button } from "native-base";


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
    <Center bgColor="#fff">
      <ScrollView>
        <AspectRatio w="210px" ratio={0.7} mt="8px" alignSelf="center">
          <Image
            source={{uri: image }}
            alt='albumImage'
          />
        </AspectRatio>
        <Box bg="#fff" padding="2" marginLeft="2" marginRight="2" alignItems="center">
            <Text fontSize="24px" fontWeight="500" marginTop="28px" >{title}</Text>
            <Text fontSize="14px" color="#666666" marginTop="8px" >{artist}</Text>
            <Box display="flex" flexDir="row" alignItems="center" mt="8px">
              <Image h="13px" w="14px" ml="4px" source={{uri:star1}} alt="star"/>
              <Image h="13px" w="14px" ml="4px" source={{uri:star2}} alt="star"/>
              <Image h="13px" w="14px" ml="4px" source={{uri:star3}} alt="star"/>
              <Image h="13px" w="14px" ml="4px" source={{uri:star4}} alt="star"/>
              <Image h="13px" w="14px" ml="4px" source={{uri:star5}} alt="star"/>
              <Text ml="8px" fontSize="14px" letterSpacing="1px">{score}</Text>
              <Text color="#666666" fontSize="14px" letterSpacing="1px">{five}</Text>
            </Box>
            <Text marginTop="16px" fontSize="14px" textAlign="center">{'\t'}{description}</Text>
        </Box>
        <Box bg="#fff" margin="28px" alignItems="center">
          {/* <Center>
            <Heading pt={1} fontSize="2xl" color='#6099E4'>Discount Now!</Heading>
            <Heading fontSize="4xl">Price: ${price}</Heading>
          </Center> */}
          <Button 
            w="190px"
            h="36px"
            mt="0"
            onPress={() => Linking.openURL(url)}
            fontWeight="500"
            fontSize="14px"
            bgColor="#6200ee"
          >
            BUY NOW FOR $46.99
          </Button>   
        </Box>
        
      </ScrollView>      
    </Center>

  );
}

export default DetailScreen;