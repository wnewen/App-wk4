import React from 'react';
import { Button, Actionsheet, useDisclose, Box, Pressable, Text, Input, Image, ScrollView } from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ActionButton = ({ list, navigation }) => {
  const { isOpen, onOpen, onClose } = useDisclose();
  return(
    <>
        <Pressable
            onPress={onOpen}
            position="absolute" left={"50%"} right={"50%"} bottom={"20%"} width={50}  height={50} ml={-25} borderRadius={300}
            justifyContent="center" alignItems="center" 
            bg="#FFB800" shadow={2}
            >
            <Box>
                <MaterialCommunityIcons name="plus" color="#FFEBB9" size={40} ></MaterialCommunityIcons>
            </Box>
         </Pressable>
         
        {/* <Button onPress={onOpen}>Actionsheet</Button> */}

        <Actionsheet isOpen={isOpen} onClose={onClose}>
            <Actionsheet.Content _light={{bg: "#FFFCF4"}} >
                <ScrollView>
                <Actionsheet.Header></Actionsheet.Header>

                <Actionsheet.Item>
                    <Box>
                        <Text fontSize="20px" fontWeight="700" mt="20px" ml="8px" _light={{color: "#2E3943"}}>時間</Text>
                        <Box display="flex" flexDir="row" justifyContent="center" mt="16px" >
                            <Input variant="rounded" placeholder="04 / 15" fontSize="16px" alignItems="center" w="150px" mr={5} _light={{bg: "#fff"}}></Input>
                            <Input variant="rounded" placeholder="15 : 03" fontSize="16px" w="150px" _light={{bg: "#fff"}}></Input>
                        </Box>
                    </Box>
                </Actionsheet.Item>
                <Actionsheet.Item>
                    <Text fontSize="20px" fontWeight="700" mt="12px" ml="8px" _light={{color: "#2E3943"}}>形狀</Text>
                    <Box display="flex" flexDir="row" justifyContent="center" mt="16px">
                        <Image source={require('../image/add.png')} alt="shape1" borderRadius="300" width="40px" h="40px"/>
                        <Image source={require('../image/add.png')} alt="shape1" borderRadius="300" width="40px" h="40px"/>
                        <Image source={require('../image/add.png')} alt="shape1" borderRadius="300" width="40px" h="40px"/>
                        <Image source={require('../image/add.png')} alt="shape1" borderRadius="300" width="40px" h="40px"/>
                        <Image source={require('../image/add.png')} alt="shape1" borderRadius="300" width="40px" h="40px"/>
                        <Image source={require('../image/add.png')} alt="shape1" borderRadius="300" width="40px" h="40px"/>
                        <Image source={require('../image/add.png')} alt="shape1" borderRadius="300" width="40px" h="40px"/>
                    </Box>
                </Actionsheet.Item>
                <Actionsheet.Item>
                    <Text fontSize="20px" fontWeight="700" mt="12px" ml="8px" _light={{color: "#2E3943"}}>顏色</Text>
                    <Box display="flex" flexDir="row" justifyContent="center" mt="16px">
                        <Image source={require('../image/add.png')} alt="shape1" borderRadius="300" width="40px" h="40px"/>
                        <Image source={require('../image/add.png')} alt="shape1" borderRadius="300" width="40px" h="40px"/>
                        <Image source={require('../image/add.png')} alt="shape1" borderRadius="300" width="40px" h="40px"/>
                    </Box>
                </Actionsheet.Item>
                <Actionsheet.Item>
                    <Text fontSize="20px" fontWeight="700" mt="12px" ml="8px" _light={{color: "#2E3943"}}>排便量</Text>
                    <Box display="flex" flexDir="row" justifyContent="center" mt="16px">
                        <Image source={require('../image/add.png')} alt="shape1" borderRadius="300" width="40px" h="40px"/>
                        <Image source={require('../image/add.png')} alt="shape1" borderRadius="300" width="40px" h="40px"/>
                        <Image source={require('../image/add.png')} alt="shape1" borderRadius="300" width="40px" h="40px"/>
                    </Box>
                </Actionsheet.Item>

                <Actionsheet.Footer>
                    <Button borderRadius="full" h="60px" w="320px" alignSelf="center" justifyContent="center" mt="24px" _light={{bg: "#FFE08F"}} _dark={{bg: "#1F1F1F"}}>
                        <Text fontSize="32px" fontWeight="700" _light={{color: "#2E3943"}} _dark={{color: "#FFFCF4"}}>完成
                        </Text>
                    </Button>
                </Actionsheet.Footer>
                </ScrollView>
            </Actionsheet.Content>
        </Actionsheet>
    </>
  );
}

export default ActionButton;