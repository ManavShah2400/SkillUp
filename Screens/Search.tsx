import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, TextInput, Dimensions, FlatList } from 'react-native';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import axios from 'axios';
import searchStyle from '../Css/SearchCss';
import coursestyles from '../Css/Coursescss';

export default function Search() {
  const { width, height } = Dimensions.get('window');
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch initial data
  useEffect(() => {
    axios
      .get('http://127.0.0.1:3000/api/data')
      .then((response) => {
        setData(response.data);
        setFilteredData(response.data); // Initialize filtered data
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  // Handle search input
  const handleSearch = (text) => {
    setSearch(text);

    if (text.trim() === '') {
      // Reset to full data if search is empty
      setFilteredData(data);
    } else {
      // Filter data locally
      const filtered = data.filter((item) =>
        item.course_title.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredData(filtered);
    }
  };

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView>
      <View style={searchStyle.heading}>
        <View style={searchStyle.seacrhbar}>
          <MaterialIcons name="search" size={30} />
          <TextInput
            placeholder="Search"
            placeholderTextColor="gray"
            onChangeText={handleSearch} // Trigger search on text change
            value={search}
            style={searchStyle.searchtext}
          />
        </View>
        <MaterialIcons name="filter-list" size={30} />
      </View>
      <FlatList
        style={{ height: height }}
        data={filteredData} // Use filtered data
        keyExtractor={(item) => item.course_id.toString()}
        renderItem={({ item }) => (
          <View style={coursestyles.card}>
            <View style={coursestyles.cardHeader}>
              <Text style={coursestyles.title}>{item.course_title}</Text>
              {item.price === 0 ? (
                <Text style={coursestyles.price}>Free</Text>
              ) : (
                <Text style={coursestyles.price}>${item.price}</Text>
              )}
            </View>
            <View>
              <View style={coursestyles.row}>
                <MaterialIcons name="subscriptions" size={20} color="#4CAF50" />
                <Text style={coursestyles.text}>{item.num_subscribers}</Text>
              </View>
              <View style={coursestyles.row}>
                <FontAwesome name="star" size={20} color="#FFC107" />
                <Text style={coursestyles.text}>{Math.round(item.rating * 5)}</Text>
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
  );
}
