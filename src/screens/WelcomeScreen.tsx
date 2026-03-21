import {useEffect } from 'react'
import {View, Text, }from 'react-native'
import {StyleSheet} from 'react-native'
const WelcomeScreen =({navigation}:any)=>{
    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('RegistrationScreen')

        },3000)
    },[])
        return(
             <View style={styles.container}>
                <Text style={{fontSize:24, fontWeight:'bold'}}>Welcome to Rapid Assist</Text>
             </View>

             


        )
    }
    
    export default WelcomeScreen;

    const styles = StyleSheet.create({
        container:{
            flex:1,
            justifyContent:'center',
            alignItems:'center', 
            elevation:10



        },
       
    })