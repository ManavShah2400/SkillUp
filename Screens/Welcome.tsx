import { View, Text, Button } from 'react-native'
import React from 'react'
import { NavigationProp, Route } from '@react-navigation/native'
import { FIREBASE_AUTH } from '../FirebaseConfig';

interface Routerprops {
navigation: NavigationProp<any,any>;
}

export default function Welcome ({navigation} : Routerprops) {
  return (
    <View>
      <Button onPress={()=> FIREBASE_AUTH.signOut()} title='Logout'/>
    </View>
  )
}