import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';


const HomeScreen = (props) => {
  console.log('myProps', props)
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button onPress={() => props.navigation.navigate('Setting', { item: '7406ydhuyr78364h88' })} title="My Butoon" />
      <Button onPress={() => props.navigation.navigate('MaziList')} title="Go To Flatlist" />
      <Button onPress={() => props.navigation.navigate('MaziListWithChildComponent')} title="Flatlist with child component" />
      <Button onPress={() => props.navigation.navigate('BottomTab')} title="Bottom Tab" />
      <Button onPress={() => props.navigation.navigate('TopTab')} title="Top Tab" />
      <Button onPress={() => props.navigation.navigate('Drawer')} title="Drawer Navigator" />
      <Button onPress={() => props.navigation.navigate('GETREQ')} title="GET Request" />
      <Button onPress={() => props.navigation.navigate('POSTREQ')} title="POST Request" />
    </View>
  );
}


export default HomeScreen