import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, View, Button, Alert, Image, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { useFonts } from 'expo-font';

import { HomeScreen, TestNavigation } from './HomeTab.js';


const Stack = createStackNavigator();

function HomeTab() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="TestNavigation" component={TestNavigation} options={{ title: 'Test' }} />
    </Stack.Navigator>
  );
}

function QueuesTab() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 30 }}>This is the Queue tab!</Text>
    </View>
  );
}

function RankingsTab() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 30 }}>This is the Rankings tab!</Text>
    </View>
  );
}

function SettingsTab() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 30 }}>This is the Settings tab!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  
  const [fontsLoaded] = useFonts({
    'NotoSans': require('./assets/fonts/NotoSans-Regular.ttf'),
  });
  
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="HomeTab"
          component={HomeTab}
          options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ focused, color }) => (<MaterialCommunityIcons name={focused ? "home" : "home-outline"} size={26} color={color} />),
            tabBarShowLabel: false,
          }}
        />
        <Tab.Screen
          name="Queues"
          component={QueuesTab}
          options={{
            tabBarIcon: ({ focused, color }) => (<MaterialCommunityIcons name={focused ? "gamepad-variant" : "gamepad-variant-outline"} size={26} color={color} />),
            tabBarShowLabel: false,
          }}
        />
        <Tab.Screen
          name="Rankings"
          component={RankingsTab}
          options={{
            tabBarIcon: ({ focused, color }) => (<MaterialCommunityIcons name={focused ? "medal" : "medal-outline"} size={26} color={color} />),
            tabBarShowLabel: false,
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsTab}
          options={{
            tabBarIcon: ({ focused, color }) => (<MaterialCommunityIcons name={focused ? "account-cog" : "account-cog-outline"} size={26} color={color} />),
            tabBarShowLabel: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}