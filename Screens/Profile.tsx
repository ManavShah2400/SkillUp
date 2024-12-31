import { View, Text, Image, Dimensions, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { SafeAreaView } from 'react-native-safe-area-context'
import Profiletyles from '../Css/Profilecss';
import Profilestyles from '../Css/Profilecss';
import { FIREBASE_AUTH } from '../FirebaseConfig';
import { RootStackParamList } from '../App';
import { StackNavigationProp } from '@react-navigation/stack';

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Profile'>;

type Props = {
    navigation: ProfileScreenNavigationProp;
};

const ProfileScreen: React.FC<Props> = ({ navigation }) => {
  const { width, height } = Dimensions.get('window')
  const signout = () => {
    Alert.alert(
      'Sign Out',
      'Are you sure you want to sign out?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Sign Out',
          onPress: () => {
            navigation.navigate('Login')
          },
        },
      ]
    );
  };
  return (
    <SafeAreaView>
      <View style={Profiletyles.background}>
        <Text style={Profiletyles.profiletext}>Profile</Text>
        <Image source={require('../Assests/Images/React.png')} style={{ height: height * 0.09, width: width * 0.22 }} />
        <Text style={Profilestyles.nametext}>Shah Manav</Text>
        <Text style={{ fontSize: 15 }}>shahmanav633@gmail.com</Text>
      </View>
      <View style={Profilestyles.videosection}>
        <Text style={{ fontSize: 18, paddingVertical: height * 0.02 }}>Video preferences</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 15 }}>Download options</Text>
          <FontAwesome name="angle-right" size={24} color="black" />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 15 }}>Downloded courses</Text>
          <FontAwesome name="angle-right" size={24} color="black" />
        </View>
      </View>
      <View style={Profilestyles.accountview}>
        <Text style={{ fontSize: 18, paddingVertical: height * 0.02 }}>Account settings</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 15 }}>Email notificaction</Text>
          <FontAwesome name="angle-right" size={24} color="black" />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 15 }}>Push Notification</Text>
          <FontAwesome name="angle-right" size={24} color="black" />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 15 }}>Password reset</Text>
          <FontAwesome name="angle-right" size={24} color="black" />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 15 }}>Two-Step Varification</Text>
          <FontAwesome name="angle-right" size={24} color="black" />
        </View>
        <TouchableOpacity onPress={() => signout()}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 15 }} >Sign out</Text>
            <FontAwesome name="angle-right" size={24} color="black" />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default ProfileScreen;