import {View , Text}  from 'react-native'
import React from 'react'
import Animated , {FadeIn  ,FadeOut} from 'react-native-reanimated'
import { Ionicons } from '@expo/vector-icons';
const  About = ()=>{
return(
 <Animated.View
   entering ={FadeIn.duration(500)}
   exiting ={FadeOut.duration(500)}
    style={{flex:1, justifyContent:'center', alignItems:'center'}}
 
 
 >
    <Ionicons name="home" size={50} color="black" />
    






 </Animated.View>

)


}
export default About;

