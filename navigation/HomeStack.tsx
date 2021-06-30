import * as React from 'react';
import { View, Text, Image, SafeAreaView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Homescreen from '../screens/HomeScreen';
import { TabOneParamList } from '../types';
import { Feather, AntDesign, FontAwesome } from '@expo/vector-icons';
const logo =  require('../assets/images/logo.png');
const Homestack = createStackNavigator<TabOneParamList>();
function CustomHeader(){
    return(
        <SafeAreaView style={{backgroundColor: '#141414'}}>
    <View
      style={{
        margin: 10,
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <Image resizeMode="contain" style={{width:100, height: 25}} source={logo} />

        <View style={{flexDirection: 'row', width: 150,  justifyContent: 'space-between'}}>
          <Feather name="cast" size={28} color="white" />
          <AntDesign name="bells" size={28} color="white" />
          <AntDesign name="search1" size={28} color="white" />
          <FontAwesome name="user-circle-o" size={28} color="white" />
        </View>
    </View>
  </SafeAreaView>
    )
}
function HomestackComponent() {
    return (
      <Homestack.Navigator
      screenOptions={{
          header:()=> <CustomHeader/>
      }}>
        <Homestack.Screen
          name="TabOneScreen"
          component={Homescreen}
          options={{ headerTitle: 'Tab One Title' }}
        />
      </Homestack.Navigator>
    );
  }
  
  export default HomestackComponent;