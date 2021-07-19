import React, { useState } from 'react'
import { View, Text, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native'
import DataItem from '../components/DataItem';

const GetReq = () => {

  const [myJsonData, setMyJsondata] = useState([]);
  const [loading, setLoading] = useState(false);

  const GetData = () => {
    setLoading(true)
    fetch('https://jsonkeeper.com/b/O52I', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Content-Type': 'multipart/form-data'
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log('response', json)
        setMyJsondata(json)
        setLoading(false)
      })
  }


  const PostData = () => {
    var myForm = new FormData();

    myForm.append('username', 'mayu');
    myForm.append('password', 'mayu');
    myForm.append('playerid', 'jsdcie iefhc kjefn ');


    console.log('myForm', myForm);


    fetch('http://onlineshala.shopcontechnologies.com/sapi/login/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        // 'Content-Type': 'application/json',
        'Content-Type': 'multipart/form-data'
      },
      // body: JSON.stringify({
      //   username: 'mayu',
      //   password: 'mayu',
      //   playerid: 'kskjdbc sjdhc ksjadhc'
      // })
      body: myForm
    })
      .then((response) => response.json())
      .then((json) => {
        console.log('response', json)
      })
  }

  return (

    <View style={{ flex: 1 }}>

      {loading == true ?
        <View>
          <ActivityIndicator size={'small'} color={'red'} />
        </View>
        :
        <View style={{ flex: 1 }}>
          <TouchableOpacity onPress={() => GetData()}>
            <Text>My button</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => PostData()}>
            <Text>POST DATA</Text>
          </TouchableOpacity>
          {/* <Text>{JSON.stringify(myJsonData)}</Text> */}

          <FlatList
            data={myJsonData}
            renderItem={({ item, index }) =>
              <DataItem
                item={item}
              />
            }
            keyExtractor={(item, index) => item.isActive + item.company}
          />

        </View>
      }
    </View>
  )
}

export default GetReq;