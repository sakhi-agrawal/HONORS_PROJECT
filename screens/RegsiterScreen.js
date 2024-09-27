import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    if (!email || !password || !confirmPassword) {
      Alert.alert('Error', 'All fields are required.');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }

    Alert.alert('Success', 'You have registered successfully!');
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Create Account</Text>
        <Text style={styles.subtitle}>
          Create an account so you can explore all the existing jobs
        </Text>
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={true}
        />

        <TouchableOpacity style={styles.signUpButton} onPress={handleRegister}>
          <Text style={styles.signUpButtonText}>Sign up</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginText}>Already have an account</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.socialLogin}>
        <Text style={styles.socialLoginText}>Or continue with</Text>
        <View style={styles.socialIcons}>
          <TouchableOpacity style={styles.socialIcon}>
            <Image
              source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/c637d7fef51fcee3635f3182aae019b488585703196a563f8a9cdcb6ec2b9d21?placeholderIfAbsent=true&apiKey=b508c9964f48451f827e1a3bdf151ff4' }}
              style={styles.iconImage}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialIcon}>
            <Image
              source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/86d20e42dc106b10fd0b2192ce69cc8630ed7d89178fbff45146e89f9abc888f?placeholderIfAbsent=true&apiKey=b508c9964f48451f827e1a3bdf151ff4' }}
              style={styles.iconImage}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialIcon}>
            <Image
              source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b04c18ddeee3e90460e96528f39738e456e64fd197f92c7a8dc22da58c928855?placeholderIfAbsent=true&apiKey=b508c9964f48451f827e1a3bdf151ff4' }}
              style={styles.iconImage}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 50,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    maxWidth: 480,
    alignSelf: 'center',
  },
  header: {
    paddingLeft: 24,
    paddingRight: 56,
    paddingTop: 96,
    paddingBottom: 48,
    backgroundColor: '#F8FAFC',
    borderBottomLeftRadius: 200,
    borderBottomRightRadius: 200,
    borderWidth: 3,
    borderColor: '#F1F5F9',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#1E40AF',
  },
  subtitle: {
    marginTop: 6,
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
  },
  form: {
    paddingHorizontal: 24,
    paddingTop: 40,
  },
  input: {
    backgroundColor: '#EFF6FF',
    borderRadius: 12,
    padding: 20,
    marginBottom: 28,
    fontSize: 16,
    fontWeight: '500',
    color: '#52525B',
  },
  signUpButton: {
    backgroundColor: '#1E40AF',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    shadowColor: '#CBD6FF',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 5,
  },
  signUpButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
  },
  loginText: {
    marginTop: 32,
    textAlign: 'center',
    color: '#52525B',
    fontSize: 14,
    fontWeight: '600',
  },
  socialLogin: {
    alignItems: 'center',
    marginTop: 40,
  },
  socialLoginText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1E40AF',
  },
  socialIcons: {
    flexDirection: 'row',
    marginTop: 20,
  },
  socialIcon: {
    backgroundColor: '#E5E7EB',
    borderRadius: 12,
    padding: 10,
    marginHorizontal: 5,
  },
  iconImage: {
    width: 24,
    height: 24,
  },
});
