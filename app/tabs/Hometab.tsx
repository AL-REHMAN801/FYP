import {View , Text}  from 'react-native'
import React from 'react'
import Animated , {FadeIn  ,FadeOut} from 'react-native-reanimated'
import { Ionicons } from '@expo/vector-icons';
const  Home = ()=>{
return(
 <Animated.View
   entering ={FadeIn.duration(500)}
   exiting ={FadeOut.duration(500)}
    style={{flex:1, justifyContent:'center', alignItems:'center'}}
 
 
 >
    <Ionicons name="information-circle" size={50} color="black" />
    <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 16 }}>Home</Text>
    






 </Animated.View>

)


}
export default Home;

