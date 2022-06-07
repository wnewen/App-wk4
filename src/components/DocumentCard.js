import React from "react";
import { Box, HStack, VStack, AspectRatio, Text, Image, Pressable } from "native-base";
import { useDispatch, useSelector } from "react-redux";
import { setDocument } from "../redux/documentSlice";
import { selectDocument } from "../redux/documentSlice";

const DocumentCard = ({ documents, navigation }) => {

  const document = useSelector(selectDocument);
  const dispatch = useDispatch();

  return (
    <Box marginX={1} marginBottom={2} borderRadius={3} justifyContent="center" alignItems="center">
       
       <Pressable 
          onPress={() => navigation.navigate('Detail', documents)}
        >
        <Box borderRadius="10px" w="320px" h="72px" display="flex" flexDirection="row" alignItems="center" justifyContent="space-around" marginTop="20px" _light={{bg: "#FFFFFF", shadow: "4"}} _dark={{bg: "#313131", borderColor: "#5D5D5D", borderWidth: "1px"}}>
          <Box flexDir="column">
            <Text fontSize={12} textAlign="center" _light={{color: "#70552E"}} _dark={{color: "#FFF9EB"}}>時間</Text>
            <Text fontSize={16} textAlign="center" _light={{color: "#70552E"}} _dark={{color: "#FFF9EB"}}>{documents.date}</Text>
          </Box>
          <Box flexDir="column">
            <Text fontSize={12} textAlign="center" _light={{color: "#70552E"}} _dark={{color: "#FFF9EB"}}>形狀</Text>
            <Text fontSize={16} textAlign="center" _light={{color: "#70552E"}} _dark={{color: "#FFF9EB"}}>{documents.shape}</Text>
          </Box>
          <Box flexDir="column">
            <Text fontSize={12} textAlign="center" _light={{color: "#70552E"}} _dark={{color: "#FFF9EB"}}>顏色</Text>
            <Text fontSize={16} textAlign="center" _light={{color: "#70552E"}} _dark={{color: "#FFF9EB"}}>{documents.color}</Text>
          </Box>
          <Box flexDir="column">
            <Text fontSize={12} textAlign="center" _light={{color: "#70552E"}} _dark={{color: "#FFF9EB"}}>數量</Text>
            <Text fontSize={16} textAlign="center" _light={{color: "#70552E"}} _dark={{color: "#FFF9EB"}}>{documents.volume}</Text>
          </Box>
        </Box>
      </Pressable>
    </Box>
  )};

export default DocumentCard;