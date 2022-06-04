import React, { useState } from 'react';
import { Button, Actionsheet, useDisclose, Box, Pressable, Text, Input, Image, ScrollView, HStack, VStack } from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {  Platform, TextComponent } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const ActionButton = ({ list, navigation }) => {
  const { isOpen, onOpen, onClose } = useDisclose();

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [dateText, setDateText] = useState('select date');
  const [timeText, setTimeText] = useState('select time');
  const [testNumber, setTestNumber] = useState(0);

//   const { poopairy } = useSelector((state) => state.poopairy);


  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    // setShow(Platform.OS === 'ios');
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate = tempDate.getFullYear() + '/' + tempDate.getMonth() + '/' + (tempDate.getDate() + 1);

    //格式化時間
    let fTime = tempDate.getHours() + ' : ' + tempDate.getMinutes();
    if(tempDate.getHours() < 10)
    {
        fTime = '0' + tempDate.getHours() + ' : ' + tempDate.getMinutes();
    }
    else if(tempDate.getMinutes() < 10)
    {
        fTime = tempDate.getHours() + ' : 0' + tempDate.getMinutes();
    }
    else if((tempDate.getHours() < 10) && (tempDate.getMinutes() < 10))
    {
        fTime = '0' + tempDate.getHours() + ' : 0' + tempDate.getMinutes();
    }

    setDateText(fDate);
    setTimeText(fTime);
    setShow(false);
  }

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  }



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

                    <VStack>
                        <Text fontSize="20px" fontWeight="700" mt="20px" ml="8px" _light={{color: "#2E3943"}}>時間</Text>
                        
                        <HStack justifyContent="space-around" mt="16px" >
                            <Pressable onPress={() => showMode('date')}>
                                <Text>日期: {dateText}</Text>
                            </Pressable>
                            <Pressable onPress={() => showMode('time')}>
                                <Text>時間: {timeText}</Text>
                            </Pressable>
                        </HStack>
                    </VStack>

                    {show && (<DateTimePicker
                            testID='dateTimePicker'
                            value={date}
                            mode={mode}
                            is24Hour={true}
                            display='default'
                            onChange={onChange}
                            accentColor="#FFF9EB"
                    />)}
                <Actionsheet.Item>
                    <Text fontSize="20px" fontWeight="700" mt="12px" ml="8px" _light={{color: "#2E3943"}}>形狀</Text>
                    <Box display="flex" flexDir="row" justifyContent="center" mt="16px">
                        <Box flexDir="column" alignItems="center">
                            <Image source={require('../image/poop1.jpg')} alt="shape1" borderRadius="300" width="45px" h="45px"/>
                            <Text fontSize="12px">顆粒球</Text>
                        </Box>
                        <Box flexDir="column" alignItems="center">
                            <Image source={require('../image/poop2.jpg')} alt="shape1" borderRadius="300" width="45px" h="45px"/>
                            <Text fontSize="12px">長凹凸</Text>
                        </Box>
                        <Box flexDir="column" alignItems="center">
                            <Image source={require('../image/poop3.jpg')} alt="shape1" borderRadius="300" width="45px" h="45px"/>
                            <Text fontSize="12px">長微裂</Text>
                        </Box>
                        <Box flexDir="column" alignItems="center">
                            <Image source={require('../image/poop4.jpg')} alt="shape1" borderRadius="300" width="45px" h="45px"/>
                            <Text fontSize="12px">長滑順</Text>
                        </Box>
                        <Box flexDir="column" alignItems="center">
                            <Image source={require('../image/poop5.jpg')} alt="shape1" borderRadius="300" width="45px" h="45px"/>
                            <Text fontSize="12px">柔軟大</Text>
                        </Box>
                        <Box flexDir="column" alignItems="center">
                            <Image source={require('../image/poop6.jpg')} alt="shape1" borderRadius="300" width="45px" h="45px"/>
                            <Text fontSize="12px">鬆軟小</Text>
                        </Box>
                        <Box flexDir="column" alignItems="center">
                            <Image source={require('../image/poop7.jpg')} alt="shape1" borderRadius="300" width="45px" h="45px"/>
                            <Text fontSize="12px">液體</Text>
                        </Box>

                    </Box>
                </Actionsheet.Item>
                <Actionsheet.Item>
                    <Text fontSize="20px" fontWeight="700" mt="12px" ml="8px" _light={{color: "#2E3943"}}>顏色</Text>
                    <Box display="flex" flexDir="row" justifyContent="center" mt="16px">
                        <Box borderRadius="300" bg="#8A4122" width="45px" h="45px" alignItems="center" justifyContent="center" mr="4px"><Text color="white">褐色</Text></Box>
                        <Box borderRadius="300" bg="black" width="45px" h="45px" alignItems="center" justifyContent="center" mr="4px"><Text color="white">黑色</Text></Box>
                        <Box borderRadius="300" bg="#F5B205" width="45px" h="45px" alignItems="center" justifyContent="center" mr="4px"><Text color="white">黃色</Text></Box>
                        <Box borderRadius="300" bg="green.800" width="45px" h="45px" alignItems="center" justifyContent="center" mr="4px"><Text color="white">綠色</Text></Box>
                        <Box borderRadius="300" bg="red.600" width="45px" h="45px" alignItems="center" justifyContent="center" mr="4px"><Text color="white">紅色</Text></Box>
                        <Box borderRadius="300" bg="#9F9595" width="45px" h="45px" alignItems="center" justifyContent="center" mr="4px"><Text color="white">灰白色</Text></Box>
                    </Box>
                </Actionsheet.Item>
                <Actionsheet.Item>
                    <Text fontSize="20px" fontWeight="700" mt="12px" ml="8px" _light={{color: "#2E3943"}}>排便量</Text>
                    <Box display="flex" flexDir="row" justifyContent="center" mt="16px" ml="8px">
                        <Button _light={{bg: "#FFFCF4"}} _dark={{bg: "#414141"}}><Text fontSize="16px" _light={{color: "#2E3943"}}>量少</Text></Button>
                        <Button _light={{bg: "#FFFCF4"}} _dark={{bg: "#414141"}}><Text fontSize="16px" _light={{color: "#2E3943"}}>適中</Text></Button>
                        <Button _light={{bg: "#FFFCF4"}} _dark={{bg: "#414141"}}><Text fontSize="16px" _light={{color: "#2E3943"}}>量多</Text></Button>
                    </Box>
                </Actionsheet.Item>

                <Actionsheet.Footer alignSelf="center" justifyContent="center"  _light={{bg: "#FFFCF4"}}>
                    <Button borderRadius="full" h="60px" w="320px" alignSelf="center" justifyContent="center" mt="24px" onPress={onClose} _light={{bg: "#FFE08F"}} _dark={{bg: "#1F1F1F"}} >
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