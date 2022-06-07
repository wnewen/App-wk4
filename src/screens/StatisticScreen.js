import React, { useState, useEffect } from 'react';
import { Center, Text, Box, ScrollView, Hidden  } from "native-base";
import { View, ImageBackground } from "react-native";
import { VictoryPie,VictoryChart,VictoryTheme,VictoryLine,VictoryBar} from "victory-native";
import { Provider, useDispatch, useSelector } from 'react-redux';
import { setDocument } from '../redux/documentSlice';
import { selectDocument } from '../redux/documentSlice';
const doucument = useSelector(selectDocument);
  const { document } = useSelector((state) => state.document);
  const dispatch = useDispatch();
  const poopList = useSelector((state) => state.document.poopDocument);

const defaultData = [
  { x: "無", y: 0 },
  { x: "資", y: 0 },
  { x: "料", y: 0 },
];

const sampleData = [
  { x: "顆粒球", y: 35 },
  { x: "長凹凸", y: 40 },
  { x: "長微裂", y: 55 },
  { x: "長滑順", y: 35 },
  { x: "柔軟大", y: 40 },
  { x: "鬆軟小", y: 55 },
  { x: "液體", y: 55 },
];

const light_dataColor = [ "#2E3943" ];
const dark_dataColor = [ "#CBB9FF" ];

const StatisticScreen=()=>{
  const [graphicData, setGraphicData] = useState(defaultData);

  useEffect(() => {
    setGraphicData(sampleData);
  }, []);

  return (

    <>
    <Hidden colorMode="dark">
    <ScrollView >
      <Box backgroundColor="#FFF9EB" _dark={{bg: "#414141"}} h="100%"> 
        <ImageBackground source={require('../image/background.png')} resizeMode="cover" style=
          {{flex: 1,}} alt="background">
       <Box style={{ alignItems: "center" }} >
       <VictoryPie
        animate={{duration:2000 }}
        data={graphicData}
        width={300}
        colorScale={light_dataColor}
        style={{
          data: {
            fillOpacity: 1, stroke: "#FFF9EB", strokeWidth: 1
          },
          labels: {
            fontSize: 14, fill: "#49328C",
            padding: 10,

          }
        }}
        innerRadius={50}
        // labelRadius={60}
      />
      </Box> 
        
      <VictoryChart
       domainPadding={20}
      >
        
      <VictoryBar
         animate={{
          duration: 2000,
          onLoad: { duration: 1000 }
        }}
        data={graphicData}
        barRatio={1}
        style={{ 
          data: { fill: "#2E3943" },
          labels: {
            fontSize: 14, fill: "#49328C",
            padding: 10,

          }
         }}
      />
      </VictoryChart>
          </ImageBackground>
        </Box>
      
    </ScrollView>
    </Hidden>

    <Hidden colorMode="light">
    <ScrollView >
    <Box backgroundColor="#FFF9EB" _dark={{bg: "#414141"}} h="100%"> 
        <ImageBackground source={require('../image/dark-background.png')} resizeMode="cover" style=
        {{flex: 1,}} alt="background">
    <Box style={{ alignItems: "center" }} >
    <VictoryPie
        animate={{duration:2000 }}
        data={graphicData}
        width={300}
        colorScale={dark_dataColor}
        style={{
        data: {
            fillOpacity: 0.9, stroke: "#FFF9EB", strokeWidth: 1
        },
        labels: {
            fontSize: 14, fill: "#FFF9EB",
            padding: 10,

        }
        }}
        innerRadius={50}
        // labelRadius={60}
    />
    </Box> 
        
    <VictoryChart
    domainPadding={20}
    >
        
    <VictoryBar
        animate={{
        duration: 2000,
        onLoad: { duration: 1000 }
        }}
        data={graphicData}
        barRatio={1}
        style={{ 
        data: { fill: "#CBB9FF" },
        labels: {
            fontSize: 14, fill: "#CBB9FF",
            padding: 10,

        }
        }}
    />
    </VictoryChart>
        </ImageBackground>
        </Box>
    
    </ScrollView>
    </Hidden>

    </>
  );
};

   


export default StatisticScreen;