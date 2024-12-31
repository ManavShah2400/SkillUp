import { View, Text, Image, Dimensions } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import coursestyles from '../Css/Coursescss';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../App';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';

type MycourseRouteProp = RouteProp<RootStackParamList, 'MyLearning'>;

type Props = {
    route: MycourseRouteProp;
}

const CoursesScreen: React.FC<Props> = ({ route }) => {
    const { user } = route.params;
    const { width, height } = Dimensions.get('window');
    return (
        <SafeAreaView>
            <View style={coursestyles.heading}>
                <Text style={coursestyles.headingText}>My Learning</Text>
                < MaterialIcons name = "filter-list" size={30}/>
                </View>
            <View style={coursestyles.card}>
                <View style={{ padding: '5%', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>React Native</Text>
                    <Text style={{ fontSize: 15 }}>For cross-platform mobile application</Text>
                    <Text style={{ fontSize: 12 }}>Presented by: Jordan Walke</Text>
                </View>
                <View style={{ justifyContent: 'space-around', flexDirection: 'column' }}>
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

export default CoursesScreen;