import { StyleSheet, Text, View,TextInput,TouchableOpacity,Alert } from 'react-native'
import React,{useState} from 'react'
import { getAllRecords,addRecord,filterRecord } from '../Services/Database'

import Realm from 'realm'


export default function Mileage({navigation}) {
const[data,setData]=useState([])
const[carPlate,setCarPlate]=useState("")
const[route,setRoute]=useState("")
const[mile1,setMile1]=useState("")
const[mile2,setMile2]=useState("")
//creating an sync function to handle opening realms
let y=123
let mileQ=filterRecord((y.toString()))
//add new record
const onPress=()=>{
    const MILE1=parseInt(mile1)
    const MILE2=parseInt(mile2)
    addRecord(carPlate,route,MILE1,MILE2)
    setData(getAllRecords())
    console.log(JSON.stringify(data))
}
//tes

//view all records
const onPressView=()=>{
  navigation.navigate("All Records")
}
  return (
     <View style={styles.container}>
      <Text style={styles.text}>Car NumberPlate:</Text>
      <TextInput 
      style={styles.textInput}
      value={carPlate} onChangeText={(newValue)=>{setCarPlate(newValue)}}/>
      <Text style={styles.text}>Route:</Text>
      <TextInput
      style={styles.textInput} 
      value={route} onChangeText={(newValue1)=>{setRoute(newValue1)}}/>
      <Text style={styles.text}>Start Mileage:</Text>
      <TextInput 
      keyboardType='numeric'
      style={styles.textInput}
      type="number" value={mile1} onChangeText={(newValue2)=>{setMile1(newValue2)}}/>
      <Text style={styles.text}>End Mileage:</Text>
      <TextInput 
       keyboardType='numeric'
      style={styles.textInput}
      type="number" value={mile2} onChangeText={(newValue3)=>{setMile2(newValue3)}}/>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text>Add New</Text>
       </TouchableOpacity>

       <TouchableOpacity style={styles.button} onPress={onPressView}>
        <Text>ViewAll</Text>
       </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    margin:10,
    justifyContent:"space-between"
  },
  text:{
    color:"black",
    fontSize:22,
    fontFamily:"Helvetica",
  },
  textInput:{
    backgroundColor:"grey",
    borderRadius:10,
  },
  button:{
    backgroundColor:'green',
    borderRadius:10,
    margin:10,
    padding:10,
    alignItems: 'center',
  }
})