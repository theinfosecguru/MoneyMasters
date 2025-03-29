/**
 * Copyright (c) 2025 OryxForge Labs LLC
 * MoneyMasters - Financial Education Mobile App for Kids
 * All rights reserved.
 */

import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const TeamUpScreen = () => {
  const navigation = useNavigation();

  const challenges = [
    {
      id: '1',
      title: 'Budget Battle',
      description: 'Compete with friends to create the most effective budget',
      participants: '2-4 players',
      difficulty: 'Medium'
    },
    {
      id: '2',
      title: 'Investment League',
      description: 'Form teams and compete to build the best investment portfolio',
      participants: '4-8 players',
      difficulty: 'Hard'
    },
    {
      id: '3',
      title: 'Savings Race',
      description: 'Race against friends to reach savings goals first',
      participants: '2-6 players',
      difficulty: 'Easy'
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Team Up</Text>
      <Text style={styles.subheader}>Collaborative challenges and competitions</Text>
      
      <ScrollView style={styles.challengeList}>
        {challenges.map(challenge => (
          <TouchableOpacity 
            key={challenge.id} 
            style={styles.challengeCard}
            onPress={() => {
              // Navigate to challenge details screen (to be implemented)
              console.log(`Selected challenge: ${challenge.title}`);
            }}
          >
            <View style={styles.challengeHeader}>
              <Text style={styles.challengeTitle}>{challenge.title}</Text>
              <View style={styles.challengeBadges}>
                <Text style={styles.participantsBadge}>{challenge.participants}</Text>
                <Text style={styles.difficultyBadge}>{challenge.difficulty}</Text>
              </View>
            </View>
            <Text style={styles.challengeDescription}>{challenge.description}</Text>
            <View style={styles.challengeFooter}>
              <TouchableOpacity style={styles.joinButton}>
                <Text style={styles.joinButtonText}>Join Challenge</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.createButton}>
                <Text style={styles.createButtonText}>Create New</Text>
              </TouchableOpacity>
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
    color: '#9c27b0',
  },
  subheader: {
    fontSize: 16,
    color: '#757575',
    marginBottom: 24,
  },
  challengeList: {
    flex: 1,
  },
  challengeCard: {
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
  challengeHeader: {
    marginBottom: 12,
  },
  challengeTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#9c27b0',
    marginBottom: 8,
  },
  challengeBadges: {
    flexDirection: 'row',
  },
  participantsBadge: {
    fontSize: 14,
    color: '#ffffff',
    backgroundColor: '#9c27b0',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 8,
  },
  difficultyBadge: {
    fontSize: 14,
    color: '#757575',
    backgroundColor: '#f3e5f5',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  challengeDescription: {
    fontSize: 16,
    color: '#424242',
    marginBottom: 16,
  },
  challengeFooter: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  joinButton: {
    backgroundColor: '#9c27b0',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
  },
  joinButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  createButton: {
    backgroundColor: '#f3e5f5',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  createButtonText: {
    color: '#9c27b0',
    fontWeight: 'bold',
  },
});

export default TeamUpScreen;
