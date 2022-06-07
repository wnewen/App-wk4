import React from 'react';
import { Linking } from 'react-native';
import { Center, ScrollView, Box, AspectRatio, Text, Heading, Image, Button, Pressable } from "native-base";
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
    <Center bgColor="#fff" h="100%">

      <Text>{id}</Text>
      <Text>{date}</Text>
      <Text>{shape}</Text>
      <Text>{color}</Text>
      <Text>{volume}</Text>


      <Pressable bg="amber.100" onPress={() => dispatch(deleteDocument({ id: id }))}>
        <Text>Delete Document !</Text>
      </Pressable>
    </Center>
  );
}

export default DetailScreen;