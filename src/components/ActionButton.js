import React, { useState } from 'react';
import { Button, Actionsheet, useDisclose, Box, Pressable, Text, Input, Image, ScrollView, HStack, VStack, NativeBaseProvider, center, Center } from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {  Platform, TextComponent } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { setDocument } from '../redux/documentSlice';
import { selectDocument } from '../redux/documentSlice';

const ActionButton = ({ list, navigation }) => {
  const { isOpen, onOpen, onClose } = useDisclose();

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [dateText, setDateText] = useState('...');
  const [timeText, setTimeText] = useState('...');
  const [poopDate, setPoopDate] = useState('');
  const [poopShape, setPoopShape] = useState('');
  const [poopColor, setPoopColor] = useState('');
  const [poopVolume, setPoopVolume] = useState('');
  const [shape1, setShape1] = useState(0);
  const [shape2, setShape2] = useState(0);
  const [shape3, setShape3] = useState(0);
  const [shape4, setShape4] = useState(0);
  const [shape5, setShape5] = useState(0);
  const [shape6, setShape6] = useState(0);
  const [shape7, setShape7] = useState(0);
  

  const doucument = useSelector(selectDocument);
  const { document } = useSelector((state) => state.document);
  const dispatch = useDispatch();
  const poopList = useSelector((state) => state.document.poopDocument);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    // setShow(Platform.OS === 'ios');
    setShow(false);
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate = tempDate.getFullYear() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getDate();

    //格式化時間
    let fTime = tempDate.getHours() + ':' + tempDate.getMinutes();
    
    if((tempDate.getHours() < 10) && (tempDate.getMinutes() < 10))
    {
        fTime = '0' + tempDate.getHours() + ':' + '0' + tempDate.getMinutes();
    }
    else if(tempDate.getMinutes() < 10)
    {
        fTime = tempDate.getHours() + ':0' + tempDate.getMinutes();
    }
    
    else if(tempDate.getHours() < 10)
    {
        fTime = '0' + tempDate.getHours() + ':' + tempDate.getMinutes();
    }

    let sDate = (tempDate.getMonth() + 1) + '/' + tempDate.getDate() + ' ' + fTime;

    setDateText(fDate);
    setTimeText(fTime);
    setPoopDate(sDate);
  }

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  }

  const shapeKeeper = (pShape) => {
    setPoopShape(pShape);
  }

  const colorKeeper = (pColor) => {
    setPoopColor(pColor);
  }

  const volumeKeeper = (pVolume) => {
    setPoopVolume(pVolume);
  }


  const sendDocument = () => {
    onClose();
    
    if(poopShape == "顆粒球") setShape1(shape1 + 1);
    else if(poopShape == "長凹凸") setShape2(shape2 + 1);
    else if(poopShape == "長微裂") setShape3(shape3 + 1);
    else if(poopShape == "長滑順") setShape4(shape4 + 1);
    else if(poopShape == "柔軟大") setShape5(shape5 + 1);
    else if(poopShape == "鬆軟小") setShape6(shape6 + 1);
    else if(poopShape == "液體") setShape7(shape7 + 1);
    dispatch(setDocument({id: poopList[poopList.length - 1].id + 1, date: poopDate, shape: poopShape, color: poopColor, volume: poopVolume, shape1: shape1, shape2: shape2, shape3: shape3, shape4: shape4, shape5: shape5, shape6: shape6, shape7: shape7}))
    setPoopShape('');
    setPoopColor('');
    setPoopVolume('');
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
            <Actionsheet.Content _light={{bg: "#FFFCF4"}} _dark={{bg: "#414141"}} >
                <ScrollView>
                <Actionsheet.Header></Actionsheet.Header>

                    <VStack>
                        <Text fontSize="20px" fontWeight="700" mt="20px" ml="8px" _light={{color: "#2E3943"}}>時間 :</Text>
                        
                        <HStack justifyContent="space-around" mt="16px" >
                            <Pressable display="flex" flexDir="column" onPress={() => showMode('date')}>
                                <Center h="44px" w="140px" borderRadius="20px" borderColor="#D8D3D3" _light={{bg: "#ffffff", color: "#2E3943", borderColor: "#D8D3D3", borderWidth: "2px"}} _dark={{bg: "#313131", color: "#FFFCF4"}}>
                                    <Text fontSize="20px" textAlign="center" letterSpacing="1.5px">{dateText}</Text>
                                </Center>
                            </Pressable>
                            <Pressable onPress={() => showMode('time')}>
                            <Center h="44px" w="140px" borderRadius="20px" justifyContent="center" _light={{bg: "#ffffff", color: "#2E3943", borderColor: "#D8D3D3", borderWidth: "2px"}} _dark={{bg: "#313131", color: "#FFFCF4"}}>
                                    <Text fontSize="20px" textAlign="center" letterSpacing="1.5px">{timeText}</Text>
                                </Center>
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
                <VStack mt="20px">
                    <HStack>
                        <Text fontSize="20px" fontWeight="700" mt="12px" ml="8px" _light={{color: "#2E3943"}}>形狀 : </Text>
                        <Text fontSize="20px" mt="12px" ml="8px" _light={{color: "#2E3943"}}>{poopShape}</Text>
                    </HStack>
                    
                    <HStack display="flex" flexDir="row" justifyContent="center" mt="16px">
                        <Pressable flexDir="column" alignItems="center" onPress={() => shapeKeeper('顆粒球')}>
                            <Image source={require('../image/poop1.jpg')} alt="shape1" borderRadius="300" width="45px" h="45px"/>
                            <Text fontSize="12px">顆粒球</Text>
                        </Pressable>
                        <Pressable flexDir="column" alignItems="center" onPress={() => shapeKeeper('長凹凸')}>
                            <Image source={require('../image/poop2.jpg')} alt="shape1" borderRadius="300" width="45px" h="45px"/>
                            <Text fontSize="12px">長凹凸</Text>
                        </Pressable>
                        <Pressable flexDir="column" alignItems="center" onPress={() => shapeKeeper('長微裂')}>
                            <Image source={require('../image/poop3.jpg')} alt="shape1" borderRadius="300" width="45px" h="45px"/>
                            <Text fontSize="12px">長微裂</Text>
                        </Pressable>
                        <Pressable flexDir="column" alignItems="center" onPress={() => shapeKeeper('長滑順')}>
                            <Image source={require('../image/poop4.jpg')} alt="shape1" borderRadius="300" width="45px" h="45px"/>
                            <Text fontSize="12px">長滑順</Text>
                        </Pressable>
                        <Pressable flexDir="column" alignItems="center" onPress={() => shapeKeeper('柔軟大')}>
                            <Image source={require('../image/poop5.jpg')} alt="shape1" borderRadius="300" width="45px" h="45px"/>
                            <Text fontSize="12px">柔軟大</Text>
                        </Pressable>
                        <Pressable flexDir="column" alignItems="center" onPress={() => shapeKeeper('鬆軟小')}>
                            <Image source={require('../image/poop6.jpg')} alt="shape1" borderRadius="300" width="45px" h="45px"/>
                            <Text fontSize="12px">鬆軟小</Text>
                        </Pressable>
                        <Pressable flexDir="column" alignItems="center" onPress={() => shapeKeeper('液體')}>
                            <Image source={require('../image/poop7.jpg')} alt="shape1" borderRadius="300" width="45px" h="45px"/>
                            <Text fontSize="12px">液體</Text>
                        </Pressable>
                    </HStack>
                </VStack>
                <VStack mt="20px">

                        {/* 除錯用 */}
                        {/* <Text>poopShape: {poopShape}</Text>
                        <Text>poopColor: {poopColor}</Text>
                        <Text>poopVolume: {poopVolume}</Text>
                        <Text>shape1: {poopList[poopList.length - 1].shape1} </Text>
                        <Text>shape2: {poopList[poopList.length - 1].shape2} </Text>
                        <Text>shape3: {poopList[poopList.length - 1].shape3} </Text>
                        <Text>shape1: {shape1} </Text>
                        <Text>shape2: {shape2} </Text>
                        <Text>shape3: {shape3} </Text> */}
                        
                    <HStack>
                        <Text fontSize="20px" fontWeight="700" mt="12px" ml="8px" _light={{color: "#2E3943"}}>顏色 : </Text>
                        <Text fontSize="20px" mt="12px" ml="8px" _light={{color: "#2E3943"}}>{poopColor}</Text>
                    </HStack>
                    
                    <HStack display="flex" flexDir="row" justifyContent="center" mt="16px">
                        <Pressable borderRadius="300" bg="#9B593C" width="45px" h="45px" alignItems="center" justifyContent="center" mr="4px"><Text color="white" onPress={() => colorKeeper('褐色')}>褐色</Text></Pressable>
                        <Pressable borderRadius="300" bg="#373131" width="45px" h="45px" alignItems="center" justifyContent="center" mr="4px"><Text color="white" onPress={() => colorKeeper('黑色')}>黑色</Text></Pressable>
                        <Pressable borderRadius="300" bg="#FFCD4D" width="45px" h="45px" alignItems="center" justifyContent="center" mr="4px"><Text color="white" onPress={() => colorKeeper('黃色')}>黃色</Text></Pressable>
                        <Pressable borderRadius="300" bg="#89C797" width="45px" h="45px" alignItems="center" justifyContent="center" mr="4px"><Text color="white" onPress={() => colorKeeper('綠色')}>綠色</Text></Pressable>
                        <Pressable borderRadius="300" bg="#D25656" width="45px" h="45px" alignItems="center" justifyContent="center" mr="4px"><Text color="white" onPress={() => colorKeeper('紅色')}>紅色</Text></Pressable>
                        <Pressable borderRadius="300" bg="#9F9595" width="45px" h="45px" alignItems="center" justifyContent="center" mr="4px"><Text color="white" onPress={() => colorKeeper('灰白色')}>灰白色</Text></Pressable>
                    </HStack>
                </VStack>
                <VStack mt="20px">
                    <HStack>
                        <Text fontSize="20px" fontWeight="700" mt="12px" ml="8px" _light={{color: "#2E3943"}}>排便量 : </Text>
                        <Text fontSize="20px" mt="12px" ml="8px" _light={{color: "#2E3943"}}>{poopVolume}</Text>
                    </HStack>
                    
                    <HStack display="flex" flexDir="row" justifyContent="space-between" mt="16px" ml="8px">
                        <Pressable onPress={() => volumeKeeper('量少')}>
                            <Center h="45px" w="80px" _light={{bg: "#fff", borderColor: "#D8D3D3", borderWidth: "2px"}} _dark={{bg: "#313131"}} borderRadius="20px">
                                <Text fontSize="16px"_light={{color: "#2E3943"}}>量少</Text>
                            </Center>
                        </Pressable>
                        <Pressable onPress={() => volumeKeeper('適中')}>
                            <Center h="45px" w="80px" _light={{bg: "#fff", borderColor: "#D8D3D3", borderWidth: "2px"}} _dark={{bg: "#313131"}} borderRadius="20px">
                                <Text fontSize="16px" _light={{color: "#2E3943"}}>適中</Text>
                            </Center>
                         </Pressable>
                        <Pressable onPress={() => volumeKeeper('量多')}>
                            <Center h="45px" w="80px" _light={{bg: "#fff", borderColor: "#D8D3D3", borderWidth: "2px"}} _dark={{bg: "#313131"}} borderRadius="20px">
                                <Text fontSize="16px" _light={{color: "#2E3943"}}>量多</Text>
                            </Center>
                        </Pressable>
                    </HStack>
                </VStack>

                <Actionsheet.Footer mt="20px" alignSelf="center" justifyContent="center"  _light={{bg: "#FFFCF4"}}>
                    <Pressable mb="20px" borderRadius="full" h="60px" w="320px" alignSelf="center" justifyContent="center" mt="24px" onPress={sendDocument} _light={{bg: "#FFE08F"}} _dark={{bg: "#1F1F1F"}} >
                        <Text fontSize="32px" fontWeight="700" alignSelf="center" _light={{ color: "#2E3943", shadow: "4"}} _dark={{color: "#FFFCF4"}}>完成
                        </Text>
                    </Pressable>
                </Actionsheet.Footer>
                </ScrollView>
            </Actionsheet.Content>
        </Actionsheet>
    </>
  );
}

export default ActionButton;