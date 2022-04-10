import React from "react";
import { Box, HStack, VStack, AspectRatio, Text, Image, Pressable } from "native-base"

const StatusCard = ({ status, navigation }) => {
  return (
    <Box marginX={1} marginBottom={2} borderRadius={3} >
      
      <Box borderRadius="10px" w="252px" h="160px" bgColor="#fff" marginTop="18px" shadow={4} ml="15px" pl="20px" pr="20px">
        
        <Text fontSize={16} color="#9284B9" mt="16px">{status.title}</Text>
        <Text fontSize={12} color="#70552E" mt="4px">{status.description}</Text>
        
      </Box>   
    </Box>
  )};

export default StatusCard;