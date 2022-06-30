import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Mileage from '../Screens/Mileage'
import ViewList from '../Screens/ViewList'
import Chart from '../Screens/Chart'

const HomeStack = () => {
    const Tab=createBottomTabNavigator()
  return (
   <Tab.Navigator
   
   screenOptions={({route})=>({
    tabBarIcon: ({focused,color,size})=>{
        let iconName;

        if(route.name==='Mileage'){
            iconName = focused?'home':'home-outline';
        }else if(route.name==='All Records'){
            iconName = focused?'search':'search-outline'; 
        }
        else if(route.name==='Search'){
            iconName = focused?'search':'search-outline'; 
        }

        //returning icons
        return <Ionicons name={iconName} size={size} color={color}/>
    },
    headerShown:false
})}>
{/*creating screens of tab navigator */}
<Tab.Screen name="Mileage" component={Mileage}/>
<Tab.Screen name="All Records" component={ViewList}/>
<Tab.Screen name="Search" component={Chart}/>
   </Tab.Navigator>
  )
}

export default HomeStack

const styles = StyleSheet.create({})