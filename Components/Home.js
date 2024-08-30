import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const LoginForm = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Login or Register an Account</Text>
      <View style={styles.buttonsection}>
      <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.secondaryButton]}
        onPress={() => navigation.navigate('Registration')}
      >
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    alignItems: 'center',
    backgroundColor: '#BF6B62',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
    buttonsection: {
        padding: 20,
        borderRadius: 8,
        marginBottom: 16,
        justifyContent: 'space-evenly',
        display: 'flex',
        flexDirection: 'row'
    },
  logo: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4D0000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 16,
    marginBottom: 16,
    // marginRight: 16,
    alignItems: 'center',
  },
  secondaryButton: {
    backgroundColor: '#4D0000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 16,
    marginBottom: 16,
    marginLeft: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
});

export default LoginForm;
