import React from "react";
import { Box, Text, ScrollView, Input,  Button } from "native-base";

const AddScreen = ({ navigation }) => {
  return (
    <ScrollView >
    <Box backgroundColor="#FFF9EB" _dark={{bg: "#414141"}} h="650px"> 
      {/* <Header /> */}
      
      <Text fontSize="20px" fontWeight="700" mt="92px" ml="24px" _light={{color: "#2E3943"}}>時間</Text>
      <Box display="flex" flexDir="row" justifyContent="center" mt="16px">
        <Input variant="rounded" placeholder="04 / 15" fontSize="16px" alignItems="center" w="160px" mr={5} _light={{bg: "#fff"}}></Input>
        <Input variant="rounded" placeholder="15 : 03" fontSize="16px" w="160px" _light={{bg: "#fff"}}></Input>
      </Box>

      <Text fontSize="20px" fontWeight="700" mt="28px" ml="24px" _light={{color: "#2E3943"}}>形狀</Text>
      <Box display="flex" flexDir="row" justifyContent="center" mt="16px">
        <Input variant="rounded" w="40px" mr="15px" _light={{bg: "#fff"}}></Input>
        <Input variant="rounded" w="40px" mr="15px"  _light={{bg: "#fff"}}></Input>
        <Input variant="rounded" w="40px" mr="15px"  _light={{bg: "#fff"}}></Input>
        <Input variant="rounded" w="40px" mr="15px"  _light={{bg: "#fff"}}></Input>
        <Input variant="rounded" w="40px" mr="15px"  _light={{bg: "#fff"}}></Input>
        <Input variant="rounded" w="40px" ml="15px"  _light={{bg: "#fff"}}></Input>
      </Box>

      <Text fontSize="20px" fontWeight="700" mt="28px" ml="24px" _light={{color: "#2E3943"}}>顏色</Text>
      <Box display="flex" flexDir="row" justifyContent="center" mt="16px">
        <Input variant="rounded" w="40px" mr="15px" _light={{bg: "#fff"}}></Input>
        <Input variant="rounded" w="40px" mr="15px"  _light={{bg: "#fff"}}></Input>
        <Input variant="rounded" w="40px" mr="15px"  _light={{bg: "#fff"}}></Input>
        <Input variant="rounded" w="40px" mr="15px"  _light={{bg: "#fff"}}></Input>
        <Input variant="rounded" w="40px" mr="15px"  _light={{bg: "#fff"}}></Input>
        <Input variant="rounded" w="40px" ml="15px"  _light={{bg: "#fff"}}></Input>
      </Box>

      <Text fontSize="20px" fontWeight="700" mt="28px" ml="24px" _light={{color: "#2E3943"}}>排便量</Text>
      <Box display="flex" flexDir="row" justifyContent="center" mt="16px">
        <Input variant="rounded" w="40px" mr="15px" _light={{bg: "#fff"}}></Input>
        <Input variant="rounded" w="40px" mr="15px"  _light={{bg: "#fff"}}></Input>
        <Input variant="rounded" w="40px" mr="15px"  _light={{bg: "#fff"}}></Input>
      </Box>
   
    <Button borderRadius="full" h="60px" w="320px" alignSelf="center" justifyContent="center" mt="24px" _light={{bg: "#FFE08F"}} _dark={{bg: "#1F1F1F"}}>
        <Text fontSize="32px" fontWeight="700" _light={{color: "#2E3943"}} _dark={{color: "#FFFCF4"}}>完成</Text>
    </Button>
      
    </Box>
    </ScrollView>
  );
};

export default AddScreen;