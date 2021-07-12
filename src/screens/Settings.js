import React, { Component } from 'react';
import { View, Text, Button, ImageBackground, StyleSheet } from 'react-native';
import Header from '../components/Header'

// const image = ;

const Settings = (props) => {
  console.log('SettingScreenProps', props.route.params)
  return (
    <View style={{ flex: 1 }}>
      <Header
        allProps={props}
        title={'Setting'}
      />


      <ImageBackground source={{ uri: "https://reactjs.org/logo-og.png" }} resizeMode="cover" style={styles.image}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={styles.text}>Inside</Text>
          <Text>Setting Screen</Text>
          <Text>Setting Screen</Text>
          <Text>MY Person ID: {props.route.params.personId}</Text>
        </View>
      </ImageBackground>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  }
});

export default Settings;