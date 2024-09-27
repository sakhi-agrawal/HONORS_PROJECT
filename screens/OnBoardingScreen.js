import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import CustomButton from '../components/CustomButton';

export default function OnboardingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.imageContainer}>
          {/* Replace with actual image */}
          <Image
            source={{ uri: 'your-image-url-here' }}
            style={styles.image}
          />
        </View>
        <Text style={styles.title}>Discover Your Dream Job here</Text>
        <Text style={styles.subtitle}>
          Explore all the existing job roles based on your interest and study major
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          title="Login"
          onPress={() => navigation.navigate('Login')}
          variant="primary"
        />
        <CustomButton
          title="Register"
          onPress={() => navigation.navigate('Register')}
          variant="secondary"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 50,
    overflow: 'hidden',
    maxWidth: 480,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  content: {
    flex: 1,
    paddingLeft: 56,
    paddingTop: 48,
    alignItems: 'flex-start',
  },
  imageContainer: {
    width: 371,
    aspectRatio: 1,
    borderRadius: 185.5,
    borderWidth: 3,
    borderColor: '#F8FAFC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 355,
    height: 446,
    borderRadius: 24,
  },
  title: {
    marginTop: 60,
    fontSize: 33,
    fontWeight: '600',
    textAlign: 'center',
    color: '#1E40AF',
    alignSelf: 'center',
  },
  subtitle: {
    marginTop: 20,
    fontSize: 14,
    textAlign: 'center',
    color: '#000000',
    alignSelf: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 52,
    marginBottom: 48,
  },
});
