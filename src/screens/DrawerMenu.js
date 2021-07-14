import * as React from 'react';
import { Button, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo'

const DrawerMenu = (props) => {
  console.log('DrawerMenu', props);
  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: 'white', padding: 10, elevation: 5, height: 60, flexDirection: 'row', alignItems: 'center' }}>
        <Icon onPress={() => props.navigation.closeDrawer()} name='menu' size={25} />
        <Text style={{ fontSize: 18, marginLeft: 15 }}>My Drawer</Text>
      </View>
      <Button
        onPress={() => props.navigation.navigate('Notifications')}
        title="Go to notifications"
      />
      <Button
        onPress={() => navigation.toggleDrawer()}
        title="Go to notifications"
      />
      <Button
        onPress={() => navigation.toggleDrawer()}
        title="Go to notifications"
      />
      <Button
        onPress={() => navigation.toggleDrawer()}
        title="Go to notifications"
      />
      <Button
        onPress={() => navigation.toggleDrawer()}
        title="Go to notifications"
      />
      <Button
        onPress={() => navigation.toggleDrawer()}
        title="Go to notifications"
      />
      <Button
        onPress={() => navigation.toggleDrawer()}
        title="Go to notifications"
      />

    </View>
  );
}

export default DrawerMenu