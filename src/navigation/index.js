import React, {useState} from 'react';
import { NavigationContainer, useTheme} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AlbumScreen from '../screens/AlbumScreen';
import DetailScreen from '../screens/DetailScreen';
import albumData from "../json/albums.json";
import WishlistScreen from '../screens/WishlistScreen';
import MyBooksScreen from '../screens/MyBooksScreen';
import { Pressable, Box, Image } from "native-base";
import { TouchableOpacity, Text } from 'react-native';
import MyTheme from '../style/MyTheme';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

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
        tabBarActiveTintColor: '#ffb800',
        tabBarInactiveTintColor: '#B69C85',
        tabBarActiveBackgroundColor: '#FFEBB9',
        tabBarInactiveBackgroundColor: '#FFEBB9',
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
        name="Wishlist" 
        component={WishlistScreen} 
        options={{
          title: "分析",
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
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
        name="My books" 
        component={MyBooksScreen} 
        options={{
          title: "統計",
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
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
        name="My book" 
        component={MyBooksScreen} 
        options={{
          title: "設定",
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
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
            backgroundColor: '#FFEBB9',
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

export default Navigation;