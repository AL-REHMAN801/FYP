import React, { useState } from 'react';
import { View, TextInput, Button, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import { StyleSheet } from 'react-native'
const LoginScreen = ( { navigation}: any ) => {
    const [Email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    return (
        <View style={styles.container}>


            <TouchableOpacity style={styles.inputContainer}>
                <TextInput placeholder='Email' value={Email} onChangeText={(text) => setEmail(text)} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.inputContainer}>
                <TextInput placeholder='Password' value={password} onChangeText={(text) => setPassword(text)} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.ButtonContainer}>

                <Button title='Login' onPress={() =>{navigation.navigate('HomeScreen') }}
                 />
            </TouchableOpacity>


        </View>

    )
}
export default LoginScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'


    },
    ButtonContainer: {
        marginTop: 40,
        width: 80,
        height: 40,
        alignContent: 'center',
        alignItems: 'center',


    },
    inputContainer: {

        backgroundColor: '#f0f0f0',
        padding: 10,
        borderRadius: 20,
        elevation: 5,
        width: '95%',
        marginBottom: 10,


    }

})