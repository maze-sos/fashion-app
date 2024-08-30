import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();
  const [progress] = useState(new Animated.Value(0)); 

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Home');
    }, 5000);

    Animated.timing(progress, {
      toValue: 100,
      duration: 5000,
      useNativeDriver: false,
    }).start();

    return () => clearTimeout(timer);
  }, [navigation]);

  const width = progress.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
  });

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Awotelo Fashion</Text>
      <View style={styles.progressBar}>
        <Animated.View style={[styles.progress, { width }]} />
      </View>
      <Text>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#BF6B62',
  },
  logo: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  progressBar: {
    width: '80%',
    height: 20,
    backgroundColor: '#ddd',
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 20,
  },
  progress: {
    height: '100%',
    backgroundColor: '#4D0000',
    borderRadius: 10,
  },
});

export default SplashScreen;
