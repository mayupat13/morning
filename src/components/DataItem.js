

import React from 'react';
import {
  View, Text, Image,
  StyleSheet, FlatList
} from 'react-native';

const DataItem = (props) => {
  console.log('DataItemProps---->', props)
  let { item } = props.item;
  return (

    <View style={styles.__myItem}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image
          style={{ height: 45, width: 45, borderRadius: 25 }}
          source={{ uri: props.item.picture }}
        />
        <View style={{ marginLeft: 10, padding: 5 }}>
          <Text>{props.item.name}</Text>
          <Text>{props.item.gender}</Text>
        </View>
      </View>
      <View style={{ borderWidth: 0.4, borderColor: 'blue', marginVertical: 10 }} />
      <View>
        <Text style={{ borderBottomWidth: 1, borderBottomColor: '#666', width: 120, fontWeight: 'bold' }}>Personal Details:</Text>
        <View style={{}}>
          <Text>Comapany: {props.item.company}</Text>
          <Text>Age: {props.item.age}</Text>
          <Text>Email: {props.item.email}</Text>
          <Text>Active Status: {props.item.isActive}</Text>
          <Text>Conatct: {props.item.phone}</Text>
          <Text>Address: {props.item.address}</Text>
        </View>
      </View>
    </View>

  )
}

export default DataItem


const styles = StyleSheet.create({
  __myItem: {
    padding: 10,
    margin: 5,
    backgroundColor: 'white',
    borderRadius: 6
  },
  __title: { fontSize: 20, alignSelf: 'center', color: '#ff6600', fontWeight: 'bold' }
})
