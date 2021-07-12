import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


function Screen1({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen1</Text>
      <Button
        title="Go to Screen2"
        onPress={() => navigation.navigate('Screen2')}
      />
    </View>
  );
}

function Screen3({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings Screen3</Text>
      <Button
        title="Go to Screen2"
        onPress={() => navigation.navigate('Screen2')}
      />
    </View>
  );
}


const Tab = createMaterialTopTabNavigator();

export default function TopTab() {
  return (
    <Tab.Navigator
      initialRouteName="Settings"
      tabBarPosition="top"
      swipeEnabled={true}

      tabBarOptions={{
        activeTintColor: '#e91e63',
        inactiveTintColor: 'white',
        labelStyle: { fontSize: 20 },
        style: { backgroundColor: 'black' },
        showIcon: true,
        showLabel: true,
        pressColor: 'white',
        scrollEnabled: true,
        indicatorStyle: { backgroundColor: 'red', height: 5 }
      }}
    >
      <Tab.Screen name="Home" component={Screen1}
        options={{
          title: 'My profile',

          tabBarIcon: ({ color }) => (
            <Ionicons name="basket" color={color} size={26} />
          ),

        }} />
      <Tab.Screen name="Settings" component={Screen3} />
    </Tab.Navigator >
  );
}


