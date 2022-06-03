import React, { useState } from "react";
import { Box, Text, ScrollView, Input,  Button, Pressable } from "native-base";
import {  Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';


const AddScreen = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [text, setText] = useState('Empty');


  const onChange = (event, selelctedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS == 'ios');
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
    let fTime = 'Hours: ' + tempDate.getHours() + ' | Minutes: ' + tempDate.getMinutes();
    setText(fDate + '\n' + fTime);

    console.log(fDate + '(' + fTime + ')');
  }

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  }


  return (
    <ScrollView >
    <Box backgroundColor="#FFF9EB" _dark={{bg: "#414141"}} h="650px"> 
      {/* <Header /> */}
      
      <Text fontSize="20px" fontWeight="700" mt="92px" ml="24px" _light={{color: "#2E3943"}}>時間</Text>
      <Box display="flex" flexDir="row" justifyContent="center" mt="16px">
        <Pressable>
          <Text>time picker</Text>
        </Pressable>

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