import React from "react";
import { Box, HStack, VStack, AspectRatio, Text, Image, Pressable } from "native-base"

const StatusCard = ({ status, navigation }) => {
  return (
    <Box marginX={1} marginBottom={2} borderRadius={3} >
      
      <Box borderRadius="10px" w="252px" h="160px" marginTop="18px" ml="15px" pl="20px" pr="20px" _light={{bg: "#fff", shadowColor: '#aaa',  
          shadowOffset:{width:0,height:0},  
          shadowOpacity: 1.5,
          shadowRadius: 10,  
          elevation:30,}} _dark={{bg: "#313131", borderColor: "#5D5D5D", borderWidth: "1px"}} >
        
        <Text fontSize={16} mt="16px" _light={{color: "#2E3943"}} _dark={{color: "#CBB9FF"}}>{status.title}</Text>
        <Text fontSize={12} mt="4px" _light={{color: "#70552E"}} _dark={{color: "#FFFCF4"}}>{status.description}</Text>
        
      </Box>   
    </Box>
  )};

export default StatusCard;