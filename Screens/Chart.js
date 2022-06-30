import { StyleSheet, Text, View,TextInput,TouchableOpacity,ScrollView } from 'react-native'
import React,{useState} from 'react'
import { getAllRecords,addRecord,filterRecord,deleteOne } from '../Services/Database'
import { DataTable } from 'react-native-paper';


export default function Chart() {
const [search,setSearch]=useState([])
const [num1,setnum1]=useState("1")
const onPress=()=>{
 let result=filterRecord(num1);
 setSearch(result)
 if(result.length<=0){
  console.log("No record")
 }else{
  console.log(JSON.stringify(result))
  console.log(search)
 }
}
  return (
    <View style={styles.container}>
     <TextInput 
      style={styles.textInput}
      value={num1} onChangeText={(newValueX)=>{setnum1(newValueX)}}
      placeholder="search by start Mileage"
      />
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.text}>Search</Text>
        </TouchableOpacity>
      <DataTable>
      <DataTable.Header>
        <DataTable.Title>CarNumber</DataTable.Title>
        <DataTable.Title>Route</DataTable.Title>
        <DataTable.Title>                KM</DataTable.Title>
      </DataTable.Header>

  {search.map((item)=>{
    return(
    <ScrollView>
      <DataTable.Row>
      <DataTable.Cell>{item.carNumber}</DataTable.Cell>
      <DataTable.Cell>{item.route}</DataTable.Cell>
      <DataTable.Cell numeric>{item.endM-item.startM}</DataTable.Cell>
    </DataTable.Row>
    </ScrollView>
    
    )
  })}
        
    
      </DataTable>
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