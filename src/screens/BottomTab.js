// import * as React from 'react';
// import { Text, View } from 'react-native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// function FirstScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>I am Home!</Text>
//     </View>
//   );
// }

// function SecondScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Settings!</Text>
//     </View>
//   );
// }

// const Tab = createBottomTabNavigator();

// export default function BottomTab() {
//   return (

//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={FirstScreen} options={{ tabBarBadge: 3 }} />
//       <Tab.Screen name="Settings" component={SecondScreen} />
//     </Tab.Navigator>
//   );
// }




// <Tab.Navigator>
//   <Tab.Screen name="Maza Data" component={FirstScreen} />
//   <Tab.Screen name="Tuza Data" component={SecondScreen} />
// </Tab.Navigator>







import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



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

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Screen1" component={Screen1} />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Screen3" component={Screen3} />
    </SettingsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Screen1" component={HomeStackScreen} />
      <Tab.Screen name="Screen3" component={SettingsStackScreen} />
    </Tab.Navigator>
  );
}