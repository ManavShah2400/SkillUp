import { Text, Image, View, StatusBar, TextInput, TouchableOpacity, ActivityIndicator, KeyboardAvoidingView, Alert } from 'react-native'
import React, { useState } from 'react'
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated'
import { FIREBASE_AUTH } from '../FirebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import Loginstyles from '../Css/Logincss';
import axios from 'axios';
import { RootStackParamList } from '../App';
import { StackNavigationProp } from '@react-navigation/stack';

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

type Props = {
    navigation: LoginScreenNavigationProp;
};

const LoginScreen: React.FC<Props> = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setloading] = useState(false);
    const auth = FIREBASE_AUTH;
    const userlogin = async () => {
        setloading(true);
        if (!email || !password) {
            console.log('In if statement' + email, password)
            Alert.alert('Email and password is required')
            setloading(false)
        }
        try {
            console.log('In try statement ' + email, password)
            const response = await axios.post('http://127.0.0.1:3000/api/login', {
                email: 'shahmanaviant@gmail.com',
                password: 'Manav123',
            });
            console.log(response.data.user)
            setloading(false)
            // Alert.alert('Success', 'User added successfully!');
            if (response.data.user) {
                navigation.navigate('Inside', {
                    screen: 'MyLearning',
                    params: {
                        user: response.data.user,
                    },
                });
            }
        } catch (error) {
            console.error(error);
            Alert.alert('Error', error.response?.data?.error || 'Something went wrong');
        };
    }
    const Login = async () => {
        setloading(true);
        try {
            // for sign in use createUserWithEmailAndPassword
            const response = await signInWithEmailAndPassword(auth, 'shahmanav@gmail.com', 'Manav@atul2417');
            console.log(response);
            alert('Check your email!')
            setEmail('')
            setPassword('')

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
        <View style={Loginstyles.background}>
            <StatusBar
                barStyle="light-content"
            />
            <Image style={Loginstyles.image} source={require("../Assests/Images/background.png")} />
            {/* light */}
            <View style={Loginstyles.light}>
                <Animated.Image entering={FadeInUp.delay(200).duration(1000).springify()} style={Loginstyles.lightimage1} source={require('../Assests/Images/light.png')} />
                <Animated.Image entering={FadeInUp.delay(400).duration(1000).springify()} style={Loginstyles.lightimage2} source={require('../Assests/Images/light.png')} />
            </View>
            {/* Title and form */}
            <View style={Loginstyles.titleandform}>
                {/* Title */}
                <View style={Loginstyles.loginTitile}>
                    <Animated.Text entering={FadeInUp.duration(1000).springify()} style={Loginstyles.logintext}>Login</Animated.Text>
                </View>
                {/* Form */}
                <KeyboardAvoidingView behavior='padding'>
                    <View style={Loginstyles.formstyle}>
                        <Animated.View entering={FadeInDown.duration(1000).springify()} style={Loginstyles.formInput}>
                            <TextInput value={email} placeholder='Email' placeholderTextColor={'gray'} autoCapitalize='none' onChangeText={(text) => setEmail(text)} />
                        </Animated.View>
                        <Animated.View entering={FadeInDown.delay(200).duration(1000).springify()} style={Loginstyles.formInput}>
                            <TextInput value={password} placeholder='Password' placeholderTextColor={'gray'} autoCapitalize='none' onChangeText={(pas) => setPassword(pas)} secureTextEntry />
                        </Animated.View>
                        {loading ? <ActivityIndicator size={'large'} /> : <Animated.View entering={FadeInDown.delay(400).duration(1000).springify()} style={Loginstyles.buttonsection}>
                            <TouchableOpacity style={Loginstyles.button} onPress={() => userlogin()}>
                                <Text style={Loginstyles.buttontext}>Login</Text>
                            </TouchableOpacity>
                        </Animated.View>}
                        <Animated.View entering={FadeInDown.delay(600).duration(1000).springify()} style={Loginstyles.signuptextsection}>
                            <Text>
                                Don't have account?
                            </Text>
                            <TouchableOpacity onPress={() => navigation.push('SignUp')}><Text style={Loginstyles.signup}> Sign Up</Text></TouchableOpacity>
                        </Animated.View>
                        <Animated.View entering={FadeInDown.delay(600).duration(1000).springify()}>
                            <View style={Loginstyles.othersigntext}>
                                <View style={Loginstyles.line} />
                                <Text>Other login options</Text>
                                <View style={Loginstyles.line} />
                            </View>
                            <View style={Loginstyles.socialButtons}>
                                <TouchableOpacity>
                                    <Text style={Loginstyles.socialButtonText}>Google</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={Loginstyles.socialButtonText}>Facebook</Text>
                                </TouchableOpacity>
                            </View>
                        </Animated.View>
                    </View>
                </KeyboardAvoidingView>
            </View>
        </View>
    )
}

export default LoginScreen;