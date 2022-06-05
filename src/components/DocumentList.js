import { Box } from "native-base";
import React from "react";
import { FlatList,Text } from "react-native";
import DocumentCard from "./DocumentCard";
import { useDispatch, useSelector } from "react-redux";
import { setDocument } from "../redux/documentSlice";
import { selectDocument } from "../redux/documentSlice";


const DocumentList = ({ list, navigation }) => {
  const renderItem = ({ item }) => <DocumentCard documents={item} navigation={navigation} />;

  const document = useSelector(selectDocument);
  const dispatch = useDispatch();

  return (
    <Box mb="90px">
        <FlatList
        data={list}
        renderItem={renderItem}
        keyExtractor={item => item.date}
        />    
    </Box>
  );  
}

export default DocumentList;