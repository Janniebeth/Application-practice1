// WelcomeScreen.js
import React from 'react';
import { SafeAreaView, Text, Button, StyleSheet, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function WelcomeScreen({ navigation, setIsLoggedIn }) {
  const handleLogout = async () => {
    await AsyncStorage.removeItem('token');
    setIsLoggedIn(false);
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };

  const navigateToProfileScreen = () => {
    navigation.navigate('ProfileScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>Welcome!</Text>
      <View style={styles.buttonContainer}>
        <Button style={styles.button} title="Profile Screen" onPress={navigateToProfileScreen} />
        <Button style={styles.button} title="Logout" onPress={handleLogout} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 16,
      },
      headerText: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: "center",
      },
      buttonContainer: {
        marginVertical: 10,
        alignSelf: 'center',
        width: '50%',
        display: 'flex',
        justifyContent: 'space-between',
        height: 80,
      },
});