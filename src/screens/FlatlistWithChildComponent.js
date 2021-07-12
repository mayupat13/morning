import React, { Component } from 'react';
import {
  View, Text, Image,
  StyleSheet, FlatList
} from 'react-native';
import { myData } from '../utility/peronalData'
import DataItem from '../components/DataItem'


class FlatlistWithChildComponent extends Component {

  componentDidMount() {
    console.log('datadatadatadata--->', myData);
  }

  state = {
    myData1: []
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
            renderItem={({ item, index }) =>
              <DataItem
                item={item}
              />
            }
            keyExtractor={(item, index) => item.isActive + item.company}
            // onEndReached={() => alert('i am here')}
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
})

export default FlatlistWithChildComponent