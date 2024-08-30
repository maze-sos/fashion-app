import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList, ActivityIndicator} from 'react-native';

const Dashboard = ({ navigation }) => {
  const [userInfo] = useState({
    username: 'dani_alberto',
    email: 'danalberto@gmail.com',
    fullName: 'Daniel Alberto',
    memberSince: 'January 2020',
  });

  const [recentActivities] = useState([
    'Logged in',
    'Updated profile',
    'Checked notifications',
  ]);

  const [favoriteItems] = useState([
    'T-Shirt',
    'Jeans',
    'Jacket',
  ]);

  const [notifications] = useState([
    'Your order has been shipped.',
    'New items added to the gallery.',
    'Your profile was updated successfully.',
  ]);

  const renderActivity = ({ item }) => <Text style={styles.item}>•{item}</Text>;
  const renderFavoriteItem = ({ item }) => <Text style={styles.item}>•{item}</Text>;
  const renderNotification = ({ item }) => <Text style={styles.item}>•{item}</Text>;
  const [loading, setLoading] = useState(false);

  const handleButton = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('Gallery');
    }, 2000);
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#4D0000" />
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.firstsection}>
        <View style={styles.firstsubsection1}>
        <Text>Full Name:</Text><Text style={styles.info}>{userInfo.fullName}</Text>
        <Text>Username:</Text><Text style={styles.info}>{userInfo.username}</Text>
        <Text>Email:</Text><Text style={styles.info}>{userInfo.email}</Text>
        <Text>Member Since: </Text><Text style={styles.info}>{userInfo.memberSince}</Text>
        </View>
        <View style={styles.firstsubsection2}>
        <Image source={require('../assets/profile.jpg')} style={styles.logo} />
        </View>
      </View>

      <View style={styles.secondsection}>
        <View style={styles.secondsubsection}>        
        <Text style={styles.subtitle}>Recent Activities</Text>
        <FlatList
          data={recentActivities}
          renderItem={renderActivity}
          keyExtractor={(item, index) => index.toString()}
          style={styles.list}
        />
        </View>

        <View style={styles.secondsubsection}>
        <Text style={styles.subtitle}>Favorite Items</Text>
        <FlatList
          data={favoriteItems}
          renderItem={renderFavoriteItem}
          keyExtractor={(item, index) => index.toString()}
          style={styles.list}
        />
        </View>
      </View>

      <View style={styles.thirdsection}>
        <Text style={styles.subtitle}>Notifications</Text>
        <FlatList
          data={notifications}
          renderItem={renderNotification}
          keyExtractor={(item, index) => index.toString()}
          style={styles.list}
        />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={handleButton}
      >
        <Text style={styles.buttonText}>Go to Product Gallery</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  logo: {
    width: 120,
    height: 120,
  },

  firstsection: {
    backgroundColor: '#BF6B62',
    borderRadius: 8,
    padding: 10,
    marginBottom: 16,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  firstsubsection1: {
    backgroundColor: '#BF6B62', 
  },

  firstsubsection2: {
    backgroundColor: '#BF6B62', 
    paddingTop: 10,
    paddingRight: 10,
  },

  secondsection: {
      padding: 20,
      borderRadius: 8,
      marginBottom: 16,
      justifyContent: 'space-between',
      display: 'flex',
      flexDirection: 'row'
  },

  thirdsection: {
    backgroundColor: '#BF6B62', 
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
 
  secondsubsection: {
    backgroundColor: '#BF6B62', 
    padding: 20,
    borderRadius: 8,
  },

  subtitle: {
    fontSize: 20,
    marginBottom: 8,
  },

  info: {
    fontSize: 18,
    marginBottom: 8,
    fontStyle: 'italic',
  },

  list: {
    marginBottom: 16,
    fontStyle: 'italic',
  },

  item: {
    fontSize: 16,
    marginBottom: 4,
    fontStyle: 'italic',
  },

  button: {
    backgroundColor: '#4D0000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 16,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    color: '#4D0000',
  },
});

export default Dashboard;
