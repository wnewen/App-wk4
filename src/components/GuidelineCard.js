import React from "react";
import { Box, HStack, VStack, AspectRatio, Text, Image, Pressable, ScrollView } from "native-base"

const GuidelineCard = ({ guideline, navigation }) => {
  return (
    <Box marginX={1} marginBottom={2} borderRadius={3} >
      
      <ScrollView borderRadius="10px" w="160px" h="160px" bgColor="#fff" marginTop="18px" shadow={4} ml="15px" pl="20px" pr="20px" showsVerticalScrollIndicator={false}>
        
        <Text fontSize={16} color="#9284B9" mt="16px">{guideline.title}</Text>
        <Text fontSize={12} color="#70552E" mt="4px">{guideline.description}</Text>
        
      </ScrollView>   
    </Box>
  )};

export default GuidelineCard;