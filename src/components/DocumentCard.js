import React from "react";
import { Box, HStack, VStack, AspectRatio, Text, Image, Pressable } from "native-base"

const DocumentCard = ({ document, navigation }) => {
  return (
    <Box marginX={1} marginBottom={2} borderRadius={3} justifyContent="center" alignItems="center">
       
       <Pressable 
          onPress={() => navigation.navigate('Detail', document)}
        >
        <Box borderRadius="10px" w="320px" h="72px" display="flex" flexDirection="row" alignItems="center" justifyContent="space-around" marginTop="20px" _light={{bg: "#FFFFFF", shadow: "4"}} _dark={{bg: "#313131", borderColor: "#5D5D5D", borderWidth: "1px"}}>
          <Box flexDir="column">
            <Text fontSize={12} textAlign="center" _light={{color: "#70552E"}} _dark={{color: "#FFF9EB"}}>{document.title1}</Text>
            <Text fontSize={16} textAlign="center" _light={{color: "#70552E"}} _dark={{color: "#FFF9EB"}}>{document.date}</Text>
          </Box>
          <Box flexDir="column">
            <Text fontSize={12} textAlign="center" _light={{color: "#70552E"}} _dark={{color: "#FFF9EB"}}>{document.title2}</Text>
            <Text fontSize={16} textAlign="center" _light={{color: "#70552E"}} _dark={{color: "#FFF9EB"}}>{document.shape}</Text>
          </Box>
          <Box flexDir="column">
            <Text fontSize={12} textAlign="center" _light={{color: "#70552E"}} _dark={{color: "#FFF9EB"}}>{document.title3}</Text>
            <Text fontSize={16} textAlign="center" _light={{color: "#70552E"}} _dark={{color: "#FFF9EB"}}>{document.color}</Text>
          </Box>
          <Box flexDir="column">
            <Text fontSize={12} textAlign="center" _light={{color: "#70552E"}} _dark={{color: "#FFF9EB"}}>{document.title4}</Text>
            <Text fontSize={16} textAlign="center" _light={{color: "#70552E"}} _dark={{color: "#FFF9EB"}}>{document.volume}</Text>
          </Box>
        </Box>
      </Pressable>
    </Box>
  )};

export default DocumentCard;