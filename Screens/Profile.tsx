import { View, Text, Image, Dimensions} from 'react-native'
import React from 'react'

export default function ProfileScreen() {
  const {width, height} = Dimensions.get('window')
  return (
    <View style={{justifyContent:'center', width:width, height: height * 0.4}}>
      <Text>Profile</Text>
      <Image source={require('../Assests/Images/React.png')} style={{height: height * 0.1247, width: width * 0.28}}/>
      <Text>Shah Manav</Text>
      <Text>shahmanav633@gmail.com</Text>
    </View>
  )
}