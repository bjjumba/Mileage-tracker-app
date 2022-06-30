import { View, Text,StyleSheet,Image,TouchableOpacity,Dimensions, Pressable } from 'react-native'
import React from 'react'
import chart from '../images/charts.png'
import insert from '../images/insert.png'
import mileage from '../images/mileage.png'
import service from '../images/service.png'
import { Card, Title, Paragraph } from 'react-native-paper'

const Home=({navigation})=> {
    const onPressA=()=>{
        navigation.navigate("Mileage")
    }
    const onPressB=()=>{
        navigation.navigate("Chart")
    }
  return (
    <View style={styles.page}>
      <Pressable onPress={onPressA}>

              <Image style={styles.image} source={mileage}/>
          
     </Pressable>
       <TouchableOpacity onPress={onPressB}><Image style={styles.image} source={mileage}/></TouchableOpacity>
    </View>
  )
}
const styles=StyleSheet.create({
    page:{
        flex: 1,
        justifyContent:'center',
        alignItems: 'center'
    },
    text:{
        textAlign: 'center',
        fontSize:22,
        color:'black',
    },
    image:{
        resizeMode:'center',
        borderRadius:10,
        margin:10
    }
})
export default Home;
//app
/*
import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import Mileage,{useEffect} from './Screens/Mileage'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Chart from './Screens/Chart.js'
import Home from './Screens/Home'
import ViewList from './Screens/ViewList.js'

import SplashScreen from 'react-native-splash-screen'

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

*/