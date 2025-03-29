/**
 * Copyright (c) 2025 OryxForge Labs LLC
 * MoneyMasters - Financial Education Mobile App for Kids
 * All rights reserved.
 */

import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

/**
 * Custom button component with consistent styling across the app
 * 
 * @param {Object} props - Component props
 * @param {string} props.title - Button text
 * @param {function} props.onPress - Function to call when button is pressed
 * @param {string} props.type - Button type (primary, secondary, outline)
 * @param {Object} props.style - Additional style overrides
 * @param {Object} props.textStyle - Text style overrides
 */
const Button = ({ 
  title, 
  onPress, 
  type = 'primary', 
  style = {}, 
  textStyle = {},
  disabled = false
}) => {
  const buttonStyles = [
    styles.button,
    type === 'primary' && styles.primaryButton,
    type === 'secondary' && styles.secondaryButton,
    type === 'outline' && styles.outlineButton,
    disabled && styles.disabledButton,
    style
  ];

  const textStyles = [
    styles.text,
    type === 'primary' && styles.primaryText,
    type === 'secondary' && styles.secondaryText,
    type === 'outline' && styles.outlineText,
    disabled && styles.disabledText,
    textStyle
  ];

  return (
    <TouchableOpacity 
      style={buttonStyles} 
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={textStyles}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryButton: {
    backgroundColor: '#4caf50',
  },
  secondaryButton: {
    backgroundColor: '#f57c00',
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#4caf50',
  },
  disabledButton: {
    backgroundColor: '#e0e0e0',
    borderColor: '#e0e0e0',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  primaryText: {
    color: '#ffffff',
  },
  secondaryText: {
    color: '#ffffff',
  },
  outlineText: {
    color: '#4caf50',
  },
  disabledText: {
    color: '#9e9e9e',
  },
});

export default Button;
