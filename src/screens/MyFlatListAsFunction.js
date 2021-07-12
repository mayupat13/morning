

import React, { Component } from 'react';
import {
  View, Text, Image,
  StyleSheet, FlatList
} from 'react-native';
import { myData } from '../utility/peronalData'

class MyFlatList extends Component {

  componentDidMount() {
    console.log('datadatadatadata--->', myData);
  }

  state = {
    myData1: []
  }

  maziList = (item, index) => {
    return (
      <View style={styles.__myItem}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image
            style={{ height: 45, width: 45, borderRadius: 25 }}
            source={{ uri: item.picture }}
          />
          <View style={{ marginLeft: 10, padding: 5 }}>
            <Text>{item.name}</Text>
            <Text>{item.gender}</Text>
          </View>
        </View>
        <View style={{ borderWidth: 0.4, borderColor: 'blue', marginVertical: 10 }} />
        <View>
          <Text style={{ borderBottomWidth: 1, borderBottomColor: '#666', width: 120, fontWeight: 'bold' }}>Personal Details:</Text>
          <View style={{}}>
            <Text>Comapany: {item.company}</Text>
            <Text>Age: {item.age}</Text>
            <Text>Email: {item.email}</Text>
            <Text>Active Status: {item.isActive}</Text>
            <Text>Conatct: {item.phone}</Text>
            <Text>Address: {item.address}</Text>
          </View>
        </View>
      </View>
    )
  }

  render() {
    let { myData1 } = this.state;
    return (
      <View style={styles.__container}>
        <Text style={styles.__title}>Personal Information</Text>
        {myData.length === 0 ?
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>No data</Text>
          </View>
          :
          <FlatList
            data={myData}
            renderItem={({ item, index }) => this.maziList(item, index)}
            keyExtractor={(item, index) => item.isActive + item.company}
            onEndReached={() => alert('i am here')}
            onEndReachedThreshold={0.5}
          />
        }

      </View>
    )
  }
}

const styles = StyleSheet.create({
  __container: {
    flex: 1,
    backgroundColor: '#ddd'
  },
  __myItem: {
    padding: 10,
    margin: 5,
    backgroundColor: 'white',
    borderRadius: 6
  },
  __title: { fontSize: 20, alignSelf: 'center', color: '#ff6600', fontWeight: 'bold' }
})

export default MyFlatList