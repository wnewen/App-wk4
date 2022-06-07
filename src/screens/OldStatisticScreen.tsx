import React from "react";
import { Dimensions, ImageBackground } from "react-native";
import { Box, Text, ScrollView, Image, View, Hidden  } from "native-base";
import DocumentList from "../components/DocumentList";
import DocumentData from "../json/documents.json";
import { VictoryChart, VictoryGroup, VictoryBar, VictoryLegend,VictoryAxis } from "victory-native";
import useWindowDimensions from "react-native/Libraries/Utilities/useWindowDimensions";
import { style } from "dom-helpers";

const data = {
    actual:[
        {x:'Mon',y:5},
        {x:'Tue',y:4},
        {x:'Wed',y:3},
        {x:'Thur',y:2},
        {x:'Fri',y:2},
        {x:'Sat',y:2},
        {x:'Sun',y:2},
    ]
}
const StatisticScreen=()=>{
    return (
        <Box _light={{backgroundColor: "#FFF9EB"}} _dark={{bg: "#414141"}}>
            <Text fontSize={24} fontWeight="700" ml="20px" mt="36px" _light={{color: "#70552E"}} _dark={{color: "#FFF9EB"}}>週統計</Text>
            <Box height="0" width={100} _light={{borderColor: "#FFE08F"}} _dark={{borderColor: "#ffb800"}} borderBottomWidth="2px" ml="20px"></Box>
            <Box _light={{backgroundColor: "#FFF9EB"}} _dark={{bg: "#414141"}} h="100%" alignItems="center">
                <Box borderRadius="10px" _light={{bg: "#FFFFFF", shadow:4 }} _dark={{bg: "#313131", borderColor: "#5D5D5D", borderWidth: "1px"}} h="320px" w="352px" mt="20px">
                    <VictoryChart >
                        <VictoryGroup offset={20}>
                            
                            <VictoryBar data={data.actual} 
                            style={{
                                data:{
                                fill:'#4A72AD',
                                }
                            }}/>
                            
                        </VictoryGroup>
                        <VictoryLegend 
                            x={Dimensions.get('screen').width/2-100}
                            orientation="horizontal"
                            data={[
                            {
                                name:'times',
                                symbol:{
                                    fill:'#4A72AD',
                                }
                            },
                        ]}/>
                    </VictoryChart>
                </Box>
            </Box>

        </Box>
    );
    
}

export default StatisticScreen;