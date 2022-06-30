import { StyleSheet, Text, View,FlatList,ScrollView } from 'react-native'
import React,{useState,useEffect} from 'react'
import { DataTable } from 'react-native-paper';
import { getAllRecords,addRecord,filterRecord } from '../Services/Database'
export default function ViewList() {
  const[data,setData]=useState([])
  useEffect(()=>{
    setData(getAllRecords())
    console.log(JSON.stringify(data))
  },[])
  return (
    <ScrollView>
      <Text>ViewList</Text>
      <DataTable>
      <DataTable.Header>
        <DataTable.Title>CarNumber</DataTable.Title>
        <DataTable.Title>Route</DataTable.Title>
        <DataTable.Title numeric>start</DataTable.Title>
        <DataTable.Title numeric>end</DataTable.Title>
      </DataTable.Header>
     {data.map((item)=>{
      return(
        <DataTable.Row>
        <DataTable.Cell>{item.carNumber}</DataTable.Cell>
        <DataTable.Cell>{item.route}</DataTable.Cell>
        <DataTable.Cell numeric>{item.startM}</DataTable.Cell>
        <DataTable.Cell numeric>{item.endM}</DataTable.Cell>
      </DataTable.Row>
      )
     })}
      </DataTable>
    </ScrollView>
  )
}

const styles = StyleSheet.create({})