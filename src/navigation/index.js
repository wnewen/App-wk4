import React, {useState} from 'react';
import { NavigationContainer, useTheme} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DetailScreen from '../screens/DetailScreen';
import MyBooksScreen from '../screens/MyBooksScreen';
import { Pressable, Box, Image } from "native-base";
import { TouchableOpacity, Text, StyleSheet ,View} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import AdviseScreen from '../screens/AdviseScreen';
import SettingScreen from '../screens/SettingScreen';
import AddScreen from '../screens/AddScreen';
import { useColorMode } from "native-base";
import NullScreen from '../screens/NullScreen';
import ActionButton from '../components/ActionButton';
import StatisticScreen from '../screens/StatisticScreen';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children,onPress})=>(
  <TouchableOpacity
    style={{
      top:-20,
      alignItems:'center',
      justifyContent:'center',
      ...style.shadow,
    }}
    onPress={onPress}
    activeOpacity='0.6'
    
  >
  
    <View style={{
      width:70,
      height:70,
      borderradious:35,
      
    }}
    
    >
      {children}
    </View>
  </TouchableOpacity>
);


function Header() {
  const { colorMode } = useColorMode();
  return (
    <Box  w="100%" bg="#ffb800" display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" >
        <Text fontSize={32} color={colorMode == "light" ? "#70552E" : "#FFFCF4"}>首頁</Text>
    </Box>
  );
};

const darkblue = "#2E3943";
const black = "#242323";

const Navigation = () => {
  return (
    <NavigationContainer >
      <MyTabs />
    </NavigationContainer>
  );
}

const MyTabs = () => {
  const { colors } = useTheme();
  const { colorMode } = useColorMode();

  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        tabBarActiveTintColor: '#FFB800',
        tabBarInactiveTintColor: '#FFEBB9',
        tabBarActiveBackgroundColor: colorMode == "light" ? "#2E3943" : "#242323" ,
        tabBarInactiveBackgroundColor: colorMode == "light" ? "#2E3943" : "#242323" ,
        // headerShown: false
      }}
    >
      <Tab.Screen 
        name="HomeStack" 
        component={HomeStack}
        options={{
          headerShown: false,
          title: "首頁",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
          tabBarIconStyle: {
            marginTop: 5,
          },
          tabBarLabelStyle: {
            marginBottom: 5 
          }
        }}
      />
      <Tab.Screen 
        name="Advise" 
        component={AdviseScreen} 
        options={{
          title: "分析",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: colorMode == "light" ? "#ffb800" : "#242323",
          },
          headerTintColor: colorMode == "light" ? "#705521" :"#FFFCF4",
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 32,
            fontWeight: '700'
          },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="clipboard-text" color={color} size={26} />
          ),
          tabBarIconStyle: {
            marginTop: 5,
          },
          tabBarLabelStyle: {
            marginBottom: 5 
          }
        }}
      />
      <Tab.Screen 
        name="AddScreen" 
        
        component={AddScreen} 
        options={{
          title: "",
          // tabBarIcon: ({ focused }) => (
          //   <Image 
          //   source={require('../image/add.png')}
          //   resizeMode="contain"
          //   style={{
          //     width:100,
          //     height:100,
          //   }}
          //   alt="ic_add"
          //   />
          // ),
          // tabBarButton:(props)=>(
          //   <CustomTabBarButton {...props}/>
          // ),
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bookmark" color="#2E3943" size={26} />
          ),
        }}
      />
      <Tab.Screen 
        name="ActionButton" 
        component={NullScreen} 
        options={{
          tabBarButton: () => <ActionButton />
        }}
      />
      <Tab.Screen 
        name="Ststistic" 
        component={StatisticScreen} 
        options={{
          title: "統計",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: colorMode == "light" ? "#ffb800" : "#242323",
          },
          headerTintColor: colorMode == "light" ? "#705521" :"#FFFCF4",
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 32,
            fontWeight: '700'
          },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="chart-bar" color={color} size={26} />
          ),
          tabBarIconStyle: {
            marginTop: 5,
          },
          tabBarLabelStyle: {
            marginBottom: 5 
          }
        }}
      />
      <Tab.Screen 
        name="Setting" 
        component={SettingScreen} 
        options={{
          title: "設定",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: colorMode == "light" ? "#ffb800" : "#242323",
          },
          headerTintColor: colorMode == "light" ? "#705521" :"#FFFCF4",
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 32,
            fontWeight: '700'
          },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cog" color={color} size={26} />
          ),
          tabBarIconStyle: {
            marginTop: 5,
          },
          tabBarLabelStyle: {
            marginBottom: 5 
          }
        }}
      />
    </Tab.Navigator>
  );
}

const HomeStack = () => {
  const [toggle, setToggle] = useState(true);
  const toggleFunction = () => {
      setToggle(!toggle);
  };
  const { colorMode } = useColorMode();

  return (
    <Stack.Navigator
      // screenOptions={{
      //   headerShown: false
      // }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        
        options={{
          // headerTitle: (props) => <Header {...props} />,
          headerShadowVisible: false,
          title: "poopairy",
          headerStyle: {
            backgroundColor: colorMode == "light" ? "#ffb800" : "#242323",
          },
          headerTintColor: colorMode == "light" ? "#705521" :"#FFFCF4",
          headerTitleAlign: 'center',
          headerTitleStyle: {
            marginTop: "20px",
            fontSize: 32,
            fontWeight: '700',
          }
        }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={({ navigation }) => ({
          title: "",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: '#fff',
            backImage: "https://github.com/wnewen/App-wk3-photoes/blob/main/btn_back.png?raw=true"
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20,
            color: "#fff"
          },

          headerLeft: () => (
            <Pressable>
                <MaterialCommunityIcons 
                name={'chevron-left'} 
                color={'black'} 
                size={30}
                onPress={ () => {navigation.goBack();}}
            />
            </Pressable>
          ),

          headerRight: () => (
              <TouchableOpacity onPress={() => toggleFunction()}>
                  <Text>{toggle ? <MaterialCommunityIcons name="bookmark-outline" color="black" size={25} />:
                                  <MaterialCommunityIcons name="bookmark" color="#6200EE" size={25} />}
                  </Text>
              </TouchableOpacity>
          ),

        })}
      />
    </Stack.Navigator>
  );
}

const style = StyleSheet.create({
  shadow:{
    shadowColor:'#000',
    shadowOffset:{
    height:8,
    width:0,
    },
    shadowOpacity:0.3,
    shadowRadius:2,
    elevation:10
  }
});

export default Navigation;