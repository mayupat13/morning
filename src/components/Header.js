import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'

const Header = (props) => {
  console.log('Headerprops', props)
  return (
    <View style={{ backgroundColor: 'white', padding: 10, elevation: 5, height: 60, flexDirection: 'row', alignItems: 'center' }}>
      <Icon onPress={() => props.allProps.navigation.goBack()} name='chevron-thin-left' size={20} />
      <Text style={{ fontSize: 18, marginLeft: 15 }}>{props.title}</Text>
    </View>
  )
}

export default Header;