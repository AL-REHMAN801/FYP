import React from 'react'
import { View, Image, TouchableOpacity, Text } from 'react-native'
import { StyleSheet } from 'react-native'

const HomeScreen = ({ navigation}:any) => {
  return (
    
    <View style={styles.container}>

      <View style={ styles.card }>
        <TouchableOpacity style={styles.cardContent}
        onPress ={()=>navigation.navigate('GoogleMapsScreen')}>
          <Image style={styles.cardImage} source={require('../assets/images/mechnic pic.jpg')} />

          <Text style={styles.cardText}>
            Mechanic
          </Text>
        </TouchableOpacity>
      </View>


      <View style={ styles.card }>
        <TouchableOpacity style={styles.cardContent}
        onPress ={()=>navigation.navigate('GoogleMapsScreen')}>
          <Image style={styles.cardImage} source={require('../assets/images/car  towing.webp')} />

          <Text style={styles.cardText}>
            Car Towing
          </Text>
        </TouchableOpacity>
      </View>

      <View style={ styles.card }>
        <TouchableOpacity style={styles.cardContent}
        onPress ={()=>navigation.navigate('GoogleMapsScreen')}>
          <Image style={styles.cardImage} source={require('../assets/images/fuel dilevey.webp')}

          />
          <Text style={styles.cardText}>
            Fuel Delivery
          </Text>


        </TouchableOpacity>

      </View>

    </View>







  )
}

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    padding: 10,
    width: '100%',
    height: '100%',
    marginTop: 200,
    alignItems: 'center',

    
   






  },
  card: {
    width: '100%',
    height: 70,
    borderRadius: 10,
    flexDirection: 'row',
    borderBlockColor: 'black',
    borderWidth: 1,
    marginBottom: 10,
    alignItems: 'center',
  },
  cardContent: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardImage: {
    width: 54,
    height: 54,
    borderRadius: 10,
    resizeMode: 'cover',
    marginLeft: 10,

  },
  cardText: {
    marginLeft: 12,
    fontSize: 16,
    fontWeight: '600',
  },
 


})