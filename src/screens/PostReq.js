import React, { useState } from 'react'
import { View, Text, TouchableOpacity, TextInput, FlatList, Alert } from 'react-native'

const PostReq = () => {

  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [apiResponse, setApiResponse] = useState('');
  const [apiResponseObj, setApiResponseObj] = useState({});
  const [responseError, setResponseError] = useState([]);


  const PostData = () => {

    // Alert.alert(username, `hello ${password}`)

    // return;

    var myForm = new FormData();

    myForm.append('username', username);
    myForm.append('password', password);
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
      .then((response) => {
        console.log('response', response)
        // setApiResponse(JSON.stringify(json))
        setApiResponseObj(response)
        setResponseError(response.errors.non_field_errors)

      })
  }

  return (
    <View style={{ flex: 1 }}>
      <TextInput
        placeholder="Enter Username"
        value={username}
        onChangeText={(value) => setUsername(value)}
        style={{ borderWidth: 1, margin: 10 }}
      />
      {/* {apiResponseObj.status == 400 ?
        <Text style={{ color: 'red' }}>
          {apiResponseObj.errors.non_field_errors[0]}
        </Text>
        : null
      } */}

      {responseError.length == 0 ? null :
        <Text style={{ color: 'red' }}>
          {responseError[0]}
        </Text>
      }

      <TextInput
        placeholder="Enter Password"
        value={password}
        onChangeText={(value) => setPassword(value)}
        style={{ borderWidth: 1, margin: 10 }}
        secureTextEntry={true}
      />
      {apiResponseObj.status == 400 ?
        <Text style={{ color: 'red' }}>
          {apiResponseObj.errors.non_field_errors[0]}
        </Text>
        : null
      }

      <TouchableOpacity
        onPress={() => PostData()}
        style={{ alignSelf: 'center', backgroundColor: 'powderblue', padding: 10, borderRadius: 10, borderWidth: 1 }}>
        <Text>Submit</Text>
      </TouchableOpacity>


      <View>
        <Text>Username: {username}</Text>
        <Text>Password: {password}</Text>
        <Text>
          {apiResponse}
        </Text>
      </View>

    </View>
  )
}

export default PostReq;