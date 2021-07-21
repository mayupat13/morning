// import React, { Component } from 'react';
// import { Text } from 'react-native';

// class App extends Component {
//   state = {
//     name: 'mayuresh',
//     gjh: [],
//     sdhkjsd: 0,
//     hdgjs: null,
//     ufyifer: undefined,
//     okok: false,
//     bank: {}
//   }

//   componentDidMount() {
//     console.log('aloy');
//     this.myFun();
//   }

//   myFun = () => {
//     console.log('mi aloy ka ithe?')
//   }

//   render() {
//     return (
//       <Text style={{ textAlign: 'center', fontSize: 40, fontWeight: 'bold', backgroundColor: 'powderblue' }}>{this.state.name}</Text>
//     );
//   }
// }

// export default App;



// const App = () => {
//   return (
//     <Text style={{ textAlign: 'center', fontSize: 40, fontWeight: 'bold', backgroundColor: 'powderblue' }}>Hello, I am your Teacher!</Text>
//   )
// }

// export default App;







// // state Example
// import React, { Component } from 'react';
// import { Text, View } from 'react-native';

// class Blink extends Component {

//   componentDidMount() {
//     // Toggle the state every second
//     setInterval(() => (
//       this.setState(previousState => (
//         { isShowingText: !previousState.isShowingText }
//       ))
//     ), 1000);
//   }

//   //state object
//   state = { isShowingText: true };

//   render() {
//     if (!this.state.isShowingText) {
//       return null;
//     }

//     return (
//       <Text>{this.props.text}</Text>
//     );
//   }
// }

// export default class App extends Component {
//   state = {
//     counter: 0,
//   }


//   componentDidMount() {
//     this.myFun();
//   }

//   myFun = () => {
//     var myNum = 40
//     this.setState({
//       counter: myNum
//     })

//   }


//   render() {
//     return (
//       <View>

//         <Text
//           style={{ fontSize: 50, textAlign: 'center' }}
//           onPress={() => this.myFun()}
//         >
//           {this.state.counter}
//         </Text>

//         {/* <Blink text='I love to blink' />
//         <Blink text='Yes blinking is so great' />
//         <Blink text='Why did they ever take this out of HTML' />
//         <Blink text='Look at me look at me look at me' /> */}
//       </View>
//     );
//   }
// }






//Prop Example:


// import React, { Component } from 'react';
// import { Text, View } from 'react-native';



// class Blink1 extends Component {


//   constructor(props) {
//     super(props);
//     this.state = {
//       myName: this.props.age,
//       counter: 10
//     }
//   }

//   componentDidMount() {
//     console.log('this.props------>', this.props)
//   }

//   render() {
//     return (
//       <View>
//         <Text>{this.props.text}</Text>
//         <Text>{this.props.mazeNav}</Text>
//         <Text>{this.state.myName}</Text>
//         <Text
//           style={{ fontSize: 50, textAlign: 'center' }}
//         >
//           {this.props.counter}
//         </Text>
//       </View>
//     );
//   }
// }




// export default class App extends Component {

//   constructor() {
//     super();
//     this.state = {
//       myName: 'mayuresh',
//       counter: 10,
//       bank: {
//         owner: '',
//         employee: []
//       }
//     }
//   }



//   incCounter = () => {
//     this.setState({
//       counter: this.state.counter + 1
//     })
//   }

//   componentWillUnmount = () => {
//     console.log('i am going')
//   }

//   render() {
//     return (
//       <View>
//         <Text
//           style={{ fontSize: 50, textAlign: 'center' }}
//           onPress={() => this.incCounter()}>{this.state.myName}</Text>

//         <Blink1
//           text='I love to blink'
//           mazeNav='mayu'
//           mazesirname='jdhkjsd'
//           age={78}
//           marred={false}
//           counter={this.state.counter}
//         />





//         {/* <Blink text='Yes blinking is so great' />
//         <Blink text='Why did they ever take this out of HTML' />
//         <Blink text='Look at me look at me look at me' /> */}
//       </View>
//     );
//   }
// }





// //Flexbox

// import React, { Component } from 'react';
// import {
//   View, Text, ActivityIndicator, Button,
//   TouchableHighlight,
//   TouchableNativeFeedback,
//   StyleSheet, TouchableWithoutFeedback
// } from 'react-native';

// export default class FlexDirectionBasics extends Component {

//   state = {
//     show: true
//   }

//   componentDidMount() {

//     setTimeout(() => {
//       this.setState({ show: false });
//     }, 500);
//   }



//   render() {
//     return (
//       // Try setting `flexDirection` to `column`.
//       <View style={{ flex: 1, }}>
//         {this.state.show ? <ActivityIndicator color="red" /> :
//           <>
//             <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} ></View>
//             <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }} />
//             <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }} />
//           </>
//         }

//         <Button
//           // onPress={() => alert('jsakh')}
//           title="Learn More"
//           color="powderblue"
//           disabled={false}
//         // accessibilityLabel="Learn more about this purple button"
//         />

//         <TouchableHighlight
//           style={styles.button}
//           onPress={this.onPress}
//         >
//           <Text> Touch Here </Text>
//         </TouchableHighlight>

//         <TouchableNativeFeedback
//           onPress={this._onPressButton}
//           // background={'red'}
//           useForeground={true}
//         >
//           <View style={{ width: 150, height: 100, backgroundColor: 'red' }}>
//             <Text style={{ margin: 30 }}>Button</Text>
//           </View>
//         </TouchableNativeFeedback>

//         <TouchableWithoutFeedback style={styles.button} onPress={() => alert('okok')}>
//           <Text>csiehcisuech</Text>
//         </TouchableWithoutFeedback>

//       </View>
//     );
//   }
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     paddingHorizontal: 10
//   },
//   button: {
//     alignItems: 'center',
//     backgroundColor: '#333',
//     padding: 10
//   },
//   countContainer: {
//     alignItems: 'center',
//     padding: 10
//   },
//   countText: {
//     color: '#FF00FF'
//   }
// })



import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//components
import FlatlistWithChildComponent from './src/screens/FlatlistWithChildComponent'

//screens
import MyFlatList from './src/screens/MyFlatListAsFunction'
import HomeScreen from './src/screens/HomeScreen'
import Settings from './src/screens/Settings'
import BottomTab from './src/screens/BottomTab'
import TopTab from './src/screens/TopTab'
import Drawer from './src/screens/Drawer'
import GetReq from './src/screens/GetReq'
import PostReq from './src/screens/PostReq'
import SplashScreen from './src/screens/SplashScreen'

function Screen2() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Screen2!</Text>
    </View>
  );
}

const myStack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <myStack.Navigator initialRouteName="SplashScreen">
        <myStack.Screen name="Home" component={HomeScreen} />
        <myStack.Screen name="Setting" component={Settings} options={{ headerShown: false }} />
        <myStack.Screen name="MaziList" component={MyFlatList} />
        <myStack.Screen name="MaziListWithChildComponent" component={FlatlistWithChildComponent} />
        <myStack.Screen name="BottomTab" component={BottomTab} />
        <myStack.Screen name="Screen2" component={Screen2} />
        <myStack.Screen name="TopTab" component={TopTab} />
        <myStack.Screen name="Drawer" component={Drawer} options={{ headerShown: false }} />
        <myStack.Screen name="GETREQ" component={GetReq} />
        <myStack.Screen name="POSTREQ" component={PostReq} />
        <myStack.Screen name="SplashScreen" component={SplashScreen} />
      </myStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
