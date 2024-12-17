import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

const App = () => {
  return (
    <View style={styles.container}>
      <AnimatedCircularProgress
        size={120}
        width={15}
        fill={97} // Progress value between 0 and 100
        tintColor="blue"
        backgroundColor="lightgray"
        lineCap="round"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default App;
