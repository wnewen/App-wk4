import React from "react";
import { Box, HStack, VStack, AspectRatio, Text, Image, Pressable } from "native-base"

const Document = ({ document, navigation }) => {
  return (
    <Box marginX={1} marginBottom={2} borderRadius={3} justifyContent="center" alignItems="center">
      
      <Box borderRadius="10px" w="355px" h="47px" display="flex" flexDirection="row" alignItems="center" justifyContent="space-around" bgColor="#CBB9FF" marginTop="20px" shadow={4}>
        
        <Text fontSize={16} textAlign="center" color="#70552E">{document.date}</Text>
        <Text fontSize={16} textAlign="center" color="#70552E">{document.shape}</Text>
        
      </Box>   
    </Box>
  )};

export default Document;