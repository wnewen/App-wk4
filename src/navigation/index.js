import React, {useState} from 'react';
import { NavigationContainer, useTheme} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DetailScreen from '../screens/DetailScreen';
import MyBooksScreen from '../screens/MyBooksScreen';
import { Pressable, Box, Image } from "native-base";
import { TouchableOpacity, Text, StyleSheet ,View} from 'react-native';
import MyTheme from '../style/MyTheme';
import HomeScreen from '../screens/HomeScreen';
import AdviseScreen from '../screens/AdviseScreen';
import SettingScreen from '../screens/SettingScreen';
import AddScreen from '../screens/AddScreen';


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
  return (
    <Box h="24px" w="100%" bg="#fff" display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" >
        <Text fontSize="32px">首頁</Text>
    </Box>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer >
      <MyTabs />
    </NavigationContainer>
  );
}

const MyTabs = () => {
  const { colors } = useTheme();

  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        tabBarActiveTintColor: '#FFB800',
        tabBarInactiveTintColor: '#FFEBB9',
        tabBarActiveBackgroundColor: '#2E3943',
        tabBarInactiveBackgroundColor: '#2E3943',
        // headerShown: false
      }}
      _dark={{
        screenOptions: {
          tabBarActiveBackgroundColor: "#000"
        }
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
        name="Wishlist" 
        component={AdviseScreen} 
        options={{
          title: "分析",
          headerStyle: {
            backgroundColor: '#FFB800',
          },
          headerTintColor: '#70552E',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 32,
            fontWeight: '700'
          },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bookmark" color={color} size={26} />
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
        name="." 
        
        component={AddScreen} 
        options={{
          
          tabBarIcon: ({ focused }) => (
           
            <Image 
            source={require('../image/add.png')}
            resizeMode="contain"
            style={{
              width:100,
              height:100,
              //tintColor:"#000"
            }}
                  />
            //<MaterialCommunityIcons name="plus-circle" color={color} size={26} />
          ),
          tabBarButton:(props)=>(
            <CustomTabBarButton {...props}/>
          ),
        }}
      />
      <Tab.Screen 
        name="My books" 
        component={MyBooksScreen} 
        options={{
          title: "統計",
          headerStyle: {
            backgroundColor: '#FFB800',
          },
          headerTintColor: '#70552E',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 32,
            fontWeight: '700'
          },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="book-open" color={color} size={26} />
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
          headerStyle: {
            backgroundColor: '#FFB800',
          },
          headerTintColor: '#70552E',
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
          title: "首頁",
          headerStyle: {
            backgroundColor: '#FFB800',
          },
          headerTintColor: '#70552E',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 32,
            fontWeight: '700'
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