import { View, Text, Image, Dimensions } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Progress from 'react-native-progress';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import coursestyles from '../Css/Coursescss';

export default function CoursesScreen() {
    const { width, height } = Dimensions.get('window');
    return (
        <SafeAreaView>
            <View style={coursestyles.background}>
                <Text style={{fontSize: 20,}}>My Learning</Text>
                <View style={coursestyles.filter}>
                    <Icon name="search" size={30} color="rgb(82,152,199)" />
                    <Icon name="filter" size={30} color="rgb(82,152,199)" />
                </View>
            </View>
            <View style={coursestyles.cardview}>
                <View style={{ padding: '5%', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>React Native</Text>
                    <Text style={{ fontSize: 15 }}>For cross-platform mobile application</Text>
                    <Text style={{ fontSize: 12 }}>Presented by: Jordan Walke</Text>
                </View>
                <View style={{ justifyContent: 'space-around', flexDirection: 'column' }}>
                    <Image source={require('../Assests/Images/React.png')} style={coursestyles.cardimage} />
                    {/* <Progress.Circle progress={0.7} style={{ height: height * 0.06 }} showsText = {true} color="rgb(82,152,199)" /> */}
                    <AnimatedCircularProgress
                        size={height * 0.05}
                        width={4.5}
                        fill={97} // Progress value between 0 and 100
                        tintColor="blue"
                        backgroundColor="lightgray"
                        lineCap="butt"
                    >
                        {(fill) => (
                            <Text style={{fontSize:11, alignItems:'center'}}>
                                97%
                            </Text>
                        )}
                    </AnimatedCircularProgress>
                </View>
            </View>
        </SafeAreaView>
    )
}