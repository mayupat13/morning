import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createDrawerNavigator, useIsDrawerOpen } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Entypo'
import DrawerMenu from './DrawerMenu'


function HomeScreen({ navigation }) {
  const isDrawerOpen = useIsDrawerOpen();
  console.log('isDrawerOpen', isDrawerOpen)
  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: 'white', padding: 10, elevation: 5, height: 60, flexDirection: 'row', alignItems: 'center' }}>
        <Icon onPress={() => navigation.openDrawer()} name='menu' size={25} />
        <Text style={{ fontSize: 18, marginLeft: 15 }}>My Drawer</Text>
      </View>

      <Button
        onPress={() => navigation.navigate('Screen2')}
        title="Go to Screen2"
      />

    </View>
  );
}



function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerStyle={{
        backgroundColor: '#c6cbef',
        width: 200,
      }}
      drawerType='front' openByDefault={false} drawerPosition='left' initialRouteName="Home" drawerContent={(props) => <DrawerMenu {...props} />}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
    </Drawer.Navigator>
  );
}