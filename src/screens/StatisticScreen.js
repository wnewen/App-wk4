import React, { useState, useEffect } from 'react';
import { Center, Text, Box, ScrollView, Hidden  } from "native-base";
import { View, ImageBackground } from "react-native";
import { VictoryPie,VictoryChart,VictoryTheme,VictoryLine,VictoryBar, VictoryAxis} from "victory-native";
import { Provider, useDispatch, useSelector } from 'react-redux';
import { setDocument } from '../redux/documentSlice';
import { selectDocument } from '../redux/documentSlice';



const StatisticScreen=()=>{
  const [graphicData, setGraphicData] = useState(defaultData);

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
    { x: "顆粒球", y: poopList[poopList.length - 1].shape1 },
    { x: "長凹凸", y: poopList[poopList.length - 1].shape2 },
    { x: "長微裂", y: poopList[poopList.length - 1].shape3 },
    { x: "長滑順", y: poopList[poopList.length - 1].shape4 },
    { x: "柔軟大", y: poopList[poopList.length - 1].shape5 },
    { x: "鬆軟小", y: poopList[poopList.length - 1].shape6 },
    { x: "液體", y: poopList[poopList.length - 1].shape7 },
  ];
  
  const light_dataColor = [ "#2E3943" ];
  const dark_dataColor = [ "#CBB9FF" ];

  useEffect(() => {
    setGraphicData(sampleData);
  }, []);

  return (

    <>
    <Hidden colorMode="dark">
        <ScrollView>
            <ImageBackground source={require('../image/background.png')} resizeMode="cover" style=
            {{flex: 1,}} alt="background">
                <Center>
                    <Box h="360px" w="320px" mt="20px" mb="28px" bg="#fff" borderRadius="20px" _light={{shadowColor: '#aaa',  
                    shadowOffset:{width:0,height:0},  
                    shadowOpacity: 1.5,
                    shadowRadius: 10,  
                    elevation:30,}} style={{ alignItems: "center" }} >
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
                    <Box h="360px" w="320px" mb="28px" bg="#fff" borderRadius="20px" _light={{shadowColor: '#aaa',  
                    shadowOffset:{width:0,height:0},  
                    shadowOpacity: 1.5,
                    shadowRadius: 10,  
                    elevation:30,}}>
                        <VictoryChart domainPadding={20}>
                            <VictoryAxis dependentAxis 
                            animate={{
                                duration: 2000,
                                easing: "bounce"
                            }}
                            style={{
                                axis: {stroke: "#49328C"},
                                tickLabels: {fontSize: 13, padding: 5,fill: "#49328C"}
                            }}/>
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

                                },
                                axis: {stroke: "#49328C"},
                                }}
                            />
                            <VictoryAxis 
                            animate={{
                                duration: 2000,
                                easing: "bounce"
                            }}
                            style={{
                                axis: {stroke: "#49328C"},
                                tickLabels: {fontSize: 13, padding: 5,fill: "#49328C"}
                            }}
                            />
                        </VictoryChart>
                    </Box>
                </Center>
        </ImageBackground>
      </ScrollView>
    </Hidden>

    <Hidden colorMode="light">
        <ScrollView >
                <ImageBackground source={require('../image/dark-background.png')} resizeMode="cover" style=
                    {{flex: 1,}} alt="background">
                    <Center>
                        <Box bg="#313131" h="360px" w="320px" mt="20px"  mb="20px" borderRadius="20px" _light={{shadowColor: '#aaa',  
                    shadowOffset:{width:0,height:0},  
                    shadowOpacity: 1.5,
                    shadowRadius: 10,  
                    elevation:30,}} style={{ alignItems: "center" }} >
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
                            
                        <Box bg="#313131" h="360px" w="320px" mt="20px"  mb="20px" borderRadius="20px" _light={{shadowColor: '#aaa',  
                        shadowOffset:{width:0,height:0},  
                        shadowOpacity: 1.5,
                        shadowRadius: 10,  
                        elevation:30,}}>
                            <VictoryChart domainPadding={20}>
                                <VictoryAxis dependentAxis 
                                animate={{
                                    duration: 2000,
                                    easing: "bounce"
                                }}
                                style={{
                                    axis: {stroke: "#ffffff"},
                                    tickLabels: {fontSize: 13, padding: 5,fill: "#FFF9EB"}
                                }}/>
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

                                    },
                                    axis: {stroke: "#756f6a"},
                                    }}
                                />
                                <VictoryAxis 
                                animate={{
                                    duration: 2000,
                                    easing: "bounce"
                                }}
                                style={{
                                    axis: {stroke: "#ffffff"},
                                    tickLabels: {fontSize: 13, padding: 5,fill: "#FFF9EB"}
                                }}
                                />
                            </VictoryChart>
                        </Box>    
                    </Center>
                </ImageBackground>
        </ScrollView>
    </Hidden>

    </>
  );
};

   


export default StatisticScreen;