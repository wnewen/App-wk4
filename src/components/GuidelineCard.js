import React from "react";
import { Box, HStack, VStack, AspectRatio, Text, Image, Pressable, ScrollView } from "native-base"

const GuidelineCard = ({ guideline, navigation }) => {
  return (
    <Box marginX={1} marginBottom={2} borderRadius={3} >
      
      <ScrollView borderRadius="10px" w="160px" h="160px"  marginTop="18px" ml="15px" pl="20px" pr="20px" showsVerticalScrollIndicator={false} _light={{bgColor: "#fff", shadow: "4"}}  _dark={{bg: "#313131", borderColor: "#5D5D5D", borderWidth: "1px"}}>
        
        <Text fontSize={16} mt="16px" _light={{color: "#2E3943", shadow: 4}} _dark={{color: "#CBB9FF"}}>{guideline.title}</Text>
        <Text fontSize={12} mt="4px" _light={{color: "#70552E"}} _dark={{color: "#FFFCF4"}}>{guideline.description}</Text>
        
      </ScrollView>   
    </Box>
  )};

export default GuidelineCard;             