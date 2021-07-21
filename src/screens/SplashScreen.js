import React, { useEffect } from 'react'
import { View, Text } from 'react-native'

const SplashScreen = (props) => {

  useEffect(() => {
    setTimeout(() => {
      // props.navigation.navigate('Home');

      props.navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      });

    }, 3000);
  }, [])

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>SplashScreen</Text>
    </View>
  )
}

export default SplashScreen;
