import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';

const clothes = [
  { id: '1', name: 'T-Shirt', price: 2000, image: require('../assets/tshirt.png') },
  { id: '2', name: 'Jeans', price: 4000, image: require('../assets/jeans.png') },
  { id: '3', name: 'Jacket', price: 6000, image: require('../assets/jacket.png') },
  { id: '4', name: 'Polo', price: 5500, image: require('../assets/polo.png') },
  { id: '5', name: 'Skirt', price: 6000, image: require('../assets/skirt.png') },
  { id: '6', name: 'Shirt', price: 6600, image: require('../assets/shirt.png') },
  { id: '7', name: 'Hoodie', price: 7200, image: require('../assets/hoodie.jpg') },
  { id: '8', name: 'Tracksuit', price: 10500, image: require('../assets/tracksuit.png') },
];

const ProductGallery = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>₦{item.price}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Checkout', { item })}
      >
        <Text style={styles.buttonText}>Buy</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={clothes}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#BF6B62',
    flex: 1,
    padding: 16,
  },
  item: {
    marginBottom: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'row'
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 8,
  },
  name: {
    fontSize: 18,
    marginBottom: 4,
  },
  price: {
    fontSize: 16,
    marginBottom: 8,
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

export default ProductGallery;
