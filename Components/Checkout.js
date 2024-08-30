import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native';

const Checkout = ({ route, navigation }) => {
  const { item } = route.params;
  const [quantity, setQuantity] = useState('');
  const [address, setAddress] = useState('');

  const handleQuantityChange = (value) => {
    const parsedValue = parseInt(value);
    if (!isNaN(parsedValue) && parsedValue > 0) {
      setQuantity(parsedValue);
    } else {
      setQuantity(1); 
    }
  };

  const handleCheckout = () => {

    if (!quantity.toString()) {
        alert('Please enter a Valid Quantity');
        return;
      }

    if (address.trim() === '') {
        alert('Please enter a Delivery Address.');
        return;
      }

    navigation.navigate('Success');
  };

  const totalPrice = (item.price * quantity).toFixed(2);


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Checkout</Text>
      <Image source={item.image} style={styles.logo} />
      <Text style={styles.info}>Item: {item.name}</Text>
      <Text style={styles.info}>Price: ₦{item.price}</Text>
      <View style={styles.quantityContainer}>
        <Text style={styles.quantityLabel}>Quantity:</Text>
        <TextInput
          style={styles.quantityInput}
          keyboardType="numeric"
          value={quantity.toString()}
          onChangeText={handleQuantityChange}
        />
      </View>
      <TextInput
        style={styles.addressInput}
        placeholder="Enter delivery address"
        value={address}
        onChangeText={setAddress}
      />
      <Text style={styles.totalPrice}>Total Price: ₦{totalPrice}</Text>
      <TouchableOpacity style={styles.button} onPress={handleCheckout}>
        <Text style={styles.buttonText}>Confirm Purchase</Text>
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
    padding: 16,
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
  info: {
    fontSize: 18,
    marginBottom: 8,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  quantityLabel: {
    fontSize: 16,
    marginRight: 8,
  },
  quantityInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    width: 50,
    padding: 8,
    textAlign: 'center',
  },
  addressInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    width: '80%',
    padding: 8,
    marginBottom: 16,
  },
  totalPrice: {
    fontSize: 18,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#4D0000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Checkout;

