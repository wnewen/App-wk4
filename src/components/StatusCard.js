import React from "react";
import { Box, HStack, VStack, AspectRatio, Text, Image, Pressable } from "native-base"

const StatusCard = ({ status, navigation }) => {
  return (
    <Box marginX={1} marginBottom={2} borderRadius={3} >
      
      <Box borderRadius="10px" w="252px" h="160px" marginTop="18px" ml="15px" pl="20px" pr="20px" _light={{bg: "#fff", shadow: "4px"}} _dark={{bg: "#313131"}} >
        
        <Text fontSize={16} mt="16px" _light={{color: "#9284B9"}} _dark={{color: "#9284B9"}}>{status.title}</Text>
        <Text fontSize={12} mt="4px" _light={{color: "#70552E"}} _dark={{color: "#FFFCF4"}}>{status.description}</Text>
        
      </Box>   
    </Box>
  )};

export default StatusCard;