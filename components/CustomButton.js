import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomButton = ({ title, onPress, variant }) => {
  return (
    <TouchableOpacity
      style={[styles.button, styles[variant]]}
      onPress={onPress}
      accessibilityRole="button"
    >
      <Text style={[styles.buttonText, styles[`${variant}Text`]]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 12,
    width: 160,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
  },
  primary: {
    backgroundColor: '#1E40AF',
    shadowColor: '#CBD6FF',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 5,
  },
  primaryText: {
    color: '#FFFFFF',
  },
  secondary: {
    backgroundColor: '#FFFFFF',
  },
  secondaryText: {
    color: '#0A0A0A',
  },
});

export default CustomButton;