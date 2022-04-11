import React from "react";
import { Box, HStack, VStack, AspectRatio, Text, Image, Pressable } from "native-base"

const DocumentCard = ({ document, navigation }) => {
  return (
    <Box marginX={1} marginBottom={2} borderRadius={3} justifyContent="center" alignItems="center">
       
      <Box borderRadius="10px" w="355px" h="47px" display="flex" flexDirection="row" alignItems="center" justifyContent="space-around" marginBottom="20px" _light={{bg: "#FFFFFF", shadow: "4"}} _dark={{bg: "#313131"}} >
        
        <Text fontSize={16} textAlign="center" _light={{color: "#70552E"}} _dark={{color: "#FFF9EB"}}>{document.date}</Text>
        <Text fontSize={16} textAlign="center" _light={{color: "#70552E"}} _dark={{color: "#FFF9EB"}}>{document.shape}</Text>
        
      </Box>   
    </Box>
  )};

export default DocumentCard;