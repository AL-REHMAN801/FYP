
import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import UserStacknavigator from './src/navigation/UserStackNavigator';
import TabLayout from './app/tabs/_layout';

 const  App =()=>{  
  return(


  <NavigationContainer>
    <UserStacknavigator/>
   
<TabLayout />

  </NavigationContainer>



  )




}
export default App;