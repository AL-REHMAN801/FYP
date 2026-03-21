import React, {useState} from 'react';
import MapView from 'react-native-maps';
import {View ,StyleSheet} from 'react-native'
const GoogleMapsScreen =()=>{
return(


     <View style ={styles.container}>
     <MapView  style={styles.map}>
     </MapView>
     </View>


)


}
export default GoogleMapsScreen;
const styles =StyleSheet.create({
container:{
flex:1,
justifyContent:'center',
alignItems:'center'

},
map :{
    width :'100%',
    height :'100%' ,

}



})
