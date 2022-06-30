import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import Mileage,{useEffect} from './Screens/Mileage'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Chart from './Screens/Chart.js'
import Home from './Screens/Home'
import ViewList from './Screens/ViewList.js'
import { showMessage, hideMessage } from "react-native-flash-message";

function LogoTitle() {
  return (
    <View style={styles.header}>
      <Image
      style={{ width: 50, height: 50,alignItems:'center' }}
      source={require('./images/service.png')}
    />
    </View>
    
  );
}
//test function
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <View style={styles.container}>
     <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}
           options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
         />
        <Stack.Screen name="Mileage" component={Mileage}/>
        <Stack.Screen name="Chart" component={Chart}/>
        <Stack.Screen name="All Records" component={ViewList}/>
      </Stack.Navigator>
    </NavigationContainer>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
    },
    header:{
      justifyContent:'center',
      alignItems:'center'
    }
})
