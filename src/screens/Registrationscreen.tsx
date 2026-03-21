import React, { useState } from 'react'
import { View, TextInput, Button, Text, TouchableOpacity, } from 'react-native'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
type Props = { navigation: any }
const RegistrationScreen = ({ navigation }: any) => {

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [phone, setphone] = useState('')
    const [Fullname, setFullname] = useState('')
    return (

        <View>
            <SafeAreaView>
                <View style={styles.container}>
                    <Text> Registration </Text>
                </View>

                <View>
                    <TouchableOpacity style={styles.inputContainer}>
                        <TextInput placeholder='Fullname' value={Fullname} onChangeText={(text) => setFullname(text)} />



                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={styles.inputContainer}>

                        <TextInput placeholder='phone' value={phone} onChangeText={(text) => setphone(text)} />
                    </TouchableOpacity>

                </View>

                <View>
                    <TouchableOpacity style={styles.inputContainer}>
                        <TextInput placeholder='Email' value={email} onChangeText={(text) => setemail(text)} />
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity style={styles.inputContainer}>
                        <TextInput placeholder='password' value={password} onChangeText={(text) => setpassword(text)} />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={{alignItems: 'center' , textShadowColor: 'black', marginLeft: 70}} onPress={() => navigation.navigate('LoginScreen')}> Already have an account? Login</Text>
                </View>
                <TouchableOpacity style={styles.ButtonContainer}>

                    <Button title='Register' onPress={() => { }}
                     />
                </TouchableOpacity>







            </SafeAreaView >
        </View >





    )
}







export default RegistrationScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        elevation: 20,
        borderRadius: 10,


    }, ButtonContainer: {
        backgroundColor: '#f0f0f0',
        padding: 10,
        marginBottom: 10,
        borderRadius: 20,
        width: '50%',
        alignSelf: 'center',



    },
    inputContainer: {
        backgroundColor: '#f0f0f0',
        padding: 10,
        marginBottom: 10,
        borderRadius: 20,
        elevation: 5,
        width: '95%',
        alignSelf: 'center',
    }

})