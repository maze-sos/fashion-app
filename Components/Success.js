import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Success = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/check.png')} style={styles.logo} />
      <Text style={styles.title}>Success</Text>
      <Text style={styles.message}>Your Purchase was Successful!</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Dashboard')}
      >
        <Text style={styles.buttonText}>Go to Dashboard</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#BF6B62',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  message: {
    fontSize: 18,
    marginBottom: 16,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#4D0000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Success;
