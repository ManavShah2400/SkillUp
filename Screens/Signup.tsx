import { Text, Image, StyleSheet, View, StatusBar, SafeAreaView, TextInput, TouchableOpacity, ActivityIndicator, ScrollView,KeyboardAvoidingView, Dimensions} from 'react-native'
import React, { useState } from 'react'
import Animated, { FadeInDown, FadeInUp, FadeOut } from 'react-native-reanimated'
import { useNavigation } from '@react-navigation/native';
import { FIREBASE_AUTH } from '../FirebaseConfig';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

export default function SignUpScreen() {
    const { width, height } = Dimensions.get('window');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [loading, setloading] = useState(false);
    const auth = FIREBASE_AUTH;
    const navigation = useNavigation();
    const styles = StyleSheet.create({
        background: {
            flex: 1,
            backgroundColor: 'white'
        },
        image: {
            width: width,
            height: height * 0.9,
            position: 'absolute',
        },
        light: {
            flexDirection: 'row',
            position: 'absolute',
            width: width,
            height: height * 0.7,
            justifyContent: 'space-around',
        },
        lightimage1: {
            height: height * 0.25,
            width: width * 0.22,
        },
        lightimage2: {
            height: height * 0.20,
            width: width * 0.17,
        },
        titleandform: {
            marginTop: height * 0.28,
            alignItems: 'center',
            flex: 1,
            justifyContent: 'flex-end',
        },
        loginTitile: {
            // marginBottom: '20%'
        },
        logintext: {
            color: 'white',
            fontSize: 50,
            fontWeight: 'bold',
        },
        formstyle: {
            marginTop: height * 0.1,
            flex: 1,
            alignItems: 'center',
        },

        formInput: {
            width: width * 0.65,
            backgroundColor: 'rgba(0,0,0,0.1)',
            borderRadius: 10,
            paddingVertical: height * 0.01,
            paddingHorizontal: width * 0.008,
            marginVertical: height * 0.007,
            fontSize: 20,
            borderWidth: 1,
            borderColor: '#ccc',
        },
        buttonsection: {
            width: width,
            alignItems: 'center'
        },
        button: {
            backgroundColor: 'rgb(82,152,199)',
            padding: 12,
            marginVertical: height * 0.01,
            alignItems: 'center',
            borderRadius: 10,
            width: width * 0.65
        },
        buttontext: {
            fontSize: 20,
            color: 'white'
        },
        signuptextsection: {
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: height * 0.003
        },
        signup: {
            color: 'rgb(82,152,199)',
        },
        line: {
            width: width * 0.13, // Adjust the width of the line dynamically
            height: 1,
            backgroundColor: 'gray',
            marginHorizontal: width * 0.03,
        },
        othersigntext: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: height * 0.01,
        },
        socialButtons: {
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: height * 0.01,
        },
        socialButtonText: {
            fontSize: 16,
            color: 'rgb(82,152,199)',
        },
    });
    const Signin = async () => {
        setloading(true);
        try {
            // for sign in use createUserWithEmailAndPassword
            const response = await createUserWithEmailAndPassword(auth, email, password);
            const user = response.user;

            // Update the user's profile with first and last name
            await updateProfile(user, {
                displayName: `${firstname} ${lastname}`, // Firebase supports a single "displayName" field
            });
            console.log(response);
            alert('Check your email!')
            setEmail('')
            setPassword('')
            setFirstname('')
            setLastname('')
        } catch (error: any) {
            console.log(error);
            const errormessage = error.message
            if (errormessage.includes('invalid-email')) {
                alert('Login failed: ' + '\nCheck your Email')
            } else if (errormessage.includes('invalid-credential')) {
                alert('Login failed: ' + '\nCheck your Email or Password')
            }
            else {
                alert('Login failed: ' + error.message);
            }
        } finally {
            setloading(false);
        }
    }
    return (
        <View style={styles.background}>
            <StatusBar
                barStyle="light-content"
            />
            <Image style={styles.image} source={require("../Assests/Images/background.png")} />
            {/* light */}
            <View style={styles.light}>
                <Animated.Image entering={FadeInUp.delay(200).duration(1000).springify()} style={styles.lightimage1} source={require('../Assests/Images/light.png')} />
                <Animated.Image entering={FadeInUp.delay(400).duration(1000).springify()} style={styles.lightimage2} source={require('../Assests/Images/light.png')} />
            </View>
            {/* Title and form */}
            <View style={styles.titleandform}>
                {/* Title */}
                <View style={styles.loginTitile}>
                    <Animated.Text entering={FadeInUp.duration(1000).springify()} style={styles.logintext}>Sign In</Animated.Text>
                </View>
                {/* Form */}
                <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
                <ScrollView>
                    <View style={styles.formstyle}>
                        <Animated.View entering={FadeInDown.duration(1000).springify()} style={styles.formInput}>
                            <TextInput value={firstname} placeholder='First Name' placeholderTextColor={'gray'} onChangeText={(text) => setFirstname(text)} />
                        </Animated.View>
                        <Animated.View entering={FadeInDown.delay(100).duration(1000).springify()} style={styles.formInput}>
                            <TextInput value={lastname} placeholder='Last Name' placeholderTextColor={'gray'} onChangeText={(text) => setLastname(text)} />
                        </Animated.View>
                        <Animated.View entering={FadeInDown.delay(200).duration(1000).springify()} style={styles.formInput}>
                            <TextInput value={email} placeholder='Email' placeholderTextColor={'gray'} autoCapitalize='none' onChangeText={(text) => setEmail(text)} />
                        </Animated.View>
                        <Animated.View entering={FadeInDown.delay(300).duration(1000).springify()} style={styles.formInput}>
                            <TextInput value={password} placeholder='Password' placeholderTextColor={'gray'} secureTextEntry onChangeText={(text) => setPassword(text)} />
                        </Animated.View>
                        {loading ? <ActivityIndicator size={'large'} /> : <Animated.View entering={FadeInDown.delay(400).duration(1000).springify()} style={styles.buttonsection}>
                            <TouchableOpacity style={styles.button} onPress={() => Signin()}>
                                <Text style={styles.buttontext}>Sign In</Text>
                            </TouchableOpacity>
                        </Animated.View>}
                        <Animated.View entering={FadeInDown.delay(500).duration(1000).springify()} style={styles.signuptextsection}>
                            <Text>
                                Already have account?
                            </Text>
                            <TouchableOpacity onPress={() => navigation.push('Login')}><Text style={styles.signup}> Login</Text></TouchableOpacity>
                        </Animated.View>
                        <Animated.View entering={FadeInDown.delay(500).duration(1000).springify()}>
                            <View style={styles.othersigntext}>
                                <View style={styles.line} />
                                <Text>Other sign-in options</Text>
                                <View style={styles.line} />
                            </View>
                            <View style={styles.socialButtons}>
                                <TouchableOpacity>
                                    <Text style={styles.socialButtonText}>Google</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={styles.socialButtonText}>Facebook</Text>
                                </TouchableOpacity>
                            </View>
                        </Animated.View>
                    </View>
                </ScrollView>
                </KeyboardAvoidingView>
            </View>
        </View >
    )
}