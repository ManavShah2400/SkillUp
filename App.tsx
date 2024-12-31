// In App.js in a new project

import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './Screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import SignUpScreen from './Screens/Signup';
import { useEffect, useState } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { FIREBASE_AUTH } from './FirebaseConfig';
import ProfileScreen from './Screens/Profile';
import SearchScreen from './Screens/Search';
import CoursesScreen from './Screens/Courses';
import HomeScreen from './Screens/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

export type RootStackParamList = {
  Login: undefined;
  Inside: {
    screen: string;
    params: {
      user: any;
    };
  };
  SignUp: undefined;
  WishList: { user: any };
  Features: { user: any };
  MyLearning: { user: any };
  Search: { user: any };
  Profile: { user: any };
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootStackParamList>();

function InsideLayout({ route }) {
  const { user } = route.params || {};

  return (
    <Tab.Navigator id={undefined}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name == 'Features') {
            iconName = focused ? 'star' : 'star-outline';
          } else if (route.name === 'WishList') {
            iconName = focused ? 'heart' : 'heart-outline';
          } else if (route.name === 'MyLearning') {
            iconName = focused ? 'book' : 'book-outline';
          } else if (route.name === 'Search') {
            iconName = focused ? 'search' : 'search-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'rgb(82,152,199)',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    >
      <Tab.Screen name='Features' component={HomeScreen} />
      <Tab.Screen name="WishList" component={HomeScreen} initialParams={{ user }} />
      <Tab.Screen name="MyLearning" component={CoursesScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log('user', user);
      setUser(user);
    });
  }, [])
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" id={undefined}>
        <Stack.Screen name="Inside" component={InsideLayout} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}