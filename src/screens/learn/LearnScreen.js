/**
 * Copyright (c) 2025 OryxForge Labs LLC
 * MoneyMasters - Financial Education Mobile App for Kids
 * All rights reserved.
 */

import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const LearnScreen = () => {
  const navigation = useNavigation();

  const modules = [
    {
      id: '1',
      title: 'Money Basics',
      ageGroup: '5-7',
      description: 'Learn what money is and how it works',
      lessons: ['What is Money?', 'Earning Money', 'Saving Money']
    },
    {
      id: '2',
      title: 'Saving & Spending',
      ageGroup: '8-10',
      description: 'Discover how to save money and spend wisely',
      lessons: ['Setting Goals', 'Smart Spending', 'Tracking Savings']
    },
    {
      id: '3',
      title: 'Banking & Interest',
      ageGroup: '11-13',
      description: 'Understand how banks work and what interest is',
      lessons: ['Banking Basics', 'Interest Explained', 'Compound Growth']
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Learn</Text>
      <Text style={styles.subheader}>Educational modules organized by age group and topic</Text>
      
      <ScrollView style={styles.moduleList}>
        {modules.map(module => (
          <TouchableOpacity 
            key={module.id} 
            style={styles.moduleCard}
            onPress={() => {
              // Navigate to module details screen (to be implemented)
              console.log(`Selected module: ${module.title}`);
            }}
          >
            <View style={styles.moduleHeader}>
              <Text style={styles.moduleTitle}>{module.title}</Text>
              <Text style={styles.moduleAge}>Ages {module.ageGroup}</Text>
            </View>
            <Text style={styles.moduleDescription}>{module.description}</Text>
            <View style={styles.lessonList}>
              {module.lessons.map((lesson, index) => (
                <Text key={index} style={styles.lessonItem}>• {lesson}</Text>
              ))}
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#2e7d32',
  },
  subheader: {
    fontSize: 16,
    color: '#757575',
    marginBottom: 24,
  },
  moduleList: {
    flex: 1,
  },
  moduleCard: {
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
  moduleHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  moduleTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2e7d32',
  },
  moduleAge: {
    fontSize: 14,
    color: '#757575',
    backgroundColor: '#e8f5e9',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  moduleDescription: {
    fontSize: 16,
    color: '#424242',
    marginBottom: 12,
  },
  lessonList: {
    marginTop: 8,
  },
  lessonItem: {
    fontSize: 14,
    color: '#616161',
    marginBottom: 4,
  },
});

export default LearnScreen;
