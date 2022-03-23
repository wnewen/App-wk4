import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
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

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Header() {
  return (
    <Box h="24px" w="100%" bg="#fff" display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" >
        <Image h="40px" w="40px" source={{uri: "https://github.com/wnewen/App-wk3-photoes/blob/main/btn_menu.png?raw=true"}} alt="btn_menu"/>
        <Image h="40px" w="40px" mr="28px" source={{ uri: "https://github.com/wnewen/App-wk3-photoes/blob/main/btn_search.png?raw=true" }} alt="btn_search"/>
    </Box>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        tabBarActiveTintColor: '#6200EE',
        // headerShown: false
      }}
    >
      <Tab.Screen 
        name="HomeStack" 
        component={HomeStack}
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen 
        name="Wishlist" 
        component={WishlistScreen} 
        options={{
          title: "Wishlist",
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bookmark" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen 
        name="My books" 
        component={MyBooksScreen} 
        options={{
          title: "My books",
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="book-open" color={color} size={26} />
          ),
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
        component={AlbumScreen}
        
        options={{
          headerTitle: (props) => <Header {...props} />,
          headerShadowVisible: false,
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