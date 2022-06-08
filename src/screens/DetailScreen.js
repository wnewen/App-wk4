import React from 'react';
import { Linking } from 'react-native';
import { Center, ScrollView, Box, AspectRatio, Text, Heading, Image, Button, Pressable, HStack, VStack } from "native-base";
import { setDocument, deleteDocument } from '../redux/documentSlice';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { selectDocument } from '../redux/documentSlice';



const DetailScreen = ({ route }) => {
  const { 
    id,
    date,
    shape,
    color,
    volume
  } = route.params;

  const doucument = useSelector(selectDocument);
  const { document } = useSelector((state) => state.document);
  const dispatch = useDispatch();
  const poopList = useSelector((state) => state.document.poopDocument);


  return (
    <Center bgColor="#FFFCF4" h="100%">

      <Center bgColor="#FFF" h="224px" w="360px" borderRadius="20px" borderColor="#D8D3D3" borderWidth="2px">

        <HStack w="308px" paddingBottom="8px" paddingLeft="8px" paddingRight="8px" justifyContent="space-between" borderBottomColor="#D8D3D3" borderBottomWidth="2px" >
          <Text fontSize="20px" color="#2E3943">時間</Text>
          <Text fontSize="20px" color="#2E3943">{date}</Text>
        </HStack>
        <HStack w="308px" marginTop="8px" paddingBottom="8px" paddingLeft="8px" paddingRight="8px" justifyContent="space-between" borderBottomColor="#D8D3D3" borderBottomWidth="2px" >
          <Text fontSize="20px" color="#2E3943">形狀</Text>
          <Text fontSize="20px" color="#2E3943">{shape}</Text>
        </HStack>
        <HStack w="308px" marginTop="8px" paddingBottom="8px" paddingLeft="8px" paddingRight="8px" justifyContent="space-between" borderBottomColor="#D8D3D3" borderBottomWidth="2px" >
          <Text fontSize="20px" color="#2E3943">顏色</Text>
          <Text fontSize="20px" color="#2E3943">{color}</Text>
        </HStack>
        <HStack w="308px" marginTop="8px" paddingBottom="8px" paddingLeft="8px" paddingRight="8px" justifyContent="space-between" borderBottomColor="#D8D3D3" borderBottomWidth="2px" >
          <Text fontSize="20px" color="#2E3943">排便量</Text>
          <Text fontSize="20px" color="#2E3943">{volume}</Text>
        </HStack>

        

      </Center>
      <Pressable borderRadius="full" h="60px" w="280px" alignSelf="center" justifyContent="center" mt="24px"  marginBottom="35%" onPress={() => dispatch(deleteDocument({ id: id }))} _light={{bg: "#FFE08F"}} _dark={{bg: "#1F1F1F"}} >
        <Text fontSize="28px" fontWeight="700" alignSelf="center" _light={{ color: "#2E3943"}} _dark={{bg: "#313131", color: "#FFFCF4"}}>刪除紀錄
        </Text>
      </Pressable>

      {/* <Pressable bg="amber.100" onPress={() => dispatch(deleteDocument({ id: id }))}>
        <Text>Delete Document !</Text>
      </Pressable> */}
    </Center>
  );
}

export default DetailScreen;