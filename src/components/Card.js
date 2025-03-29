/**
 * Copyright (c) 2025 OryxForge Labs LLC
 * MoneyMasters - Financial Education Mobile App for Kids
 * All rights reserved.
 */

import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

/**
 * Card component for displaying content in a consistent card format
 * 
 * @param {Object} props - Component props
 * @param {string} props.title - Card title
 * @param {string} props.subtitle - Optional subtitle
 * @param {React.ReactNode} props.children - Card content
 * @param {Object} props.style - Additional style overrides
 */
const Card = ({ 
  title, 
  subtitle,
  children,
  style = {},
}) => {
  return (
    <View style={[styles.card, style]}>
      {title && <Text style={styles.title}>{title}</Text>}
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      <View style={styles.content}>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#212121',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#757575',
    marginBottom: 12,
  },
  content: {
    marginTop: 8,
  },
});

export default Card;
