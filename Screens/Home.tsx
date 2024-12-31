import { View, Text, Image, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import coursestyles from '../Css/Coursescss';
import axios from 'axios';
import { FlatList } from 'react-native-gesture-handler';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';

export default function HomeScreen() {
  const { width, height } = Dimensions.get('window');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the backend
    axios.get('http://127.0.0.1:3000/api/data')
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Text>Loading...</Text>
      </View>
    );
  }
  return (
    <GestureHandlerRootView>
      <SafeAreaView>
        <FlatList style={{ height: height }}
          data={data}
          keyExtractor={item => item.course_id.toString()} // Replace 'id' with your primary key
          renderItem={({ item }) => (
            <View style={coursestyles.card}>
              <View style={coursestyles.cardHeader}>
                <Text style={coursestyles.title}>{item.course_title}</Text>
                {item.price == 0 ? <Text style={coursestyles.price}>Free</Text> : <Text style={coursestyles.price}>${item.price}</Text>}
              </View>

              <View>
                <View style={coursestyles.row}>
                  <MaterialIcons name="subscriptions" size={20} color="#4CAF50" />
                  <Text style={coursestyles.text}>{item.num_subscribers}</Text>
                </View>
                <View style={coursestyles.row}>
                  <FontAwesome name="star" size={20} color="#FFC107" />
                  {item.rating <= 0.2 ?
                    <Text style={coursestyles.text}>1</Text>
                    : item.rating <= 0.4 ?
                      <Text style={coursestyles.text}>2</Text>
                      : item.rating <= 0.6 ?
                        <Text style={coursestyles.text}>3</Text>
                        : item.rating <= 0.8 ?
                          <Text style={coursestyles.text}>4</Text> :
                          <Text style={coursestyles.text}>5</Text>}
                </View>
                <View style={coursestyles.row}>
                  <MaterialIcons name="ondemand-video" size={20} color="#2196F3" />
                  <Text style={coursestyles.text}>{item.num_lectures} Lectures</Text>
                </View>
                <View style={coursestyles.row}>
                  <MaterialIcons name="timer" size={20} color="#FF5722" />
                  <Text style={coursestyles.text}>{item.content_duration} hrs</Text>
                </View>
                <View style={coursestyles.row}>
                  <FontAwesome name="signal" size={20} color="#9C27B0" />
                  <Text style={coursestyles.text}>{item.level}</Text>
                </View>
              </View>
            </View>
          )}
        />
      </SafeAreaView>
    </GestureHandlerRootView>
  )
}