/**
 * Copyright (c) 2025 OryxForge Labs LLC
 * MoneyMasters - Financial Education Mobile App for Kids
 * All rights reserved.
 */

import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const PlayScreen = () => {
  const navigation = useNavigation();

  const games = [
    {
      id: '1',
      title: 'Stock Market Game',
      description: 'Learn how the stock market works by investing virtual money',
      difficulty: 'Medium',
      ageGroup: '10-13'
    },
    {
      id: '2',
      title: 'Budget Challenge',
      description: 'Create and manage a budget to achieve financial goals',
      difficulty: 'Easy',
      ageGroup: '8-13'
    },
    {
      id: '3',
      title: 'Entrepreneur Simulator',
      description: 'Start and grow your own business',
      difficulty: 'Hard',
      ageGroup: '11-13'
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Play</Text>
      <Text style={styles.subheader}>Fun games and simulations to practice financial skills</Text>
      
      <ScrollView style={styles.gameList}>
        {games.map(game => (
          <TouchableOpacity 
            key={game.id} 
            style={styles.gameCard}
            onPress={() => {
              // Navigate to game screen (to be implemented)
              console.log(`Selected game: ${game.title}`);
            }}
          >
            <View style={styles.gameHeader}>
              <Text style={styles.gameTitle}>{game.title}</Text>
              <View style={styles.gameBadges}>
                <Text style={styles.difficultyBadge}>{game.difficulty}</Text>
                <Text style={styles.ageBadge}>Ages {game.ageGroup}</Text>
              </View>
            </View>
            <Text style={styles.gameDescription}>{game.description}</Text>
            <View style={styles.gameFooter}>
              <TouchableOpacity style={styles.playButton}>
                <Text style={styles.playButtonText}>Play Now</Text>
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
    color: '#1976d2',
  },
  subheader: {
    fontSize: 16,
    color: '#757575',
    marginBottom: 24,
  },
  gameList: {
    flex: 1,
  },
  gameCard: {
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
  gameHeader: {
    marginBottom: 12,
  },
  gameTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1976d2',
    marginBottom: 8,
  },
  gameBadges: {
    flexDirection: 'row',
  },
  difficultyBadge: {
    fontSize: 14,
    color: '#ffffff',
    backgroundColor: '#1976d2',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 8,
  },
  ageBadge: {
    fontSize: 14,
    color: '#757575',
    backgroundColor: '#e3f2fd',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  gameDescription: {
    fontSize: 16,
    color: '#424242',
    marginBottom: 16,
  },
  gameFooter: {
    alignItems: 'flex-end',
  },
  playButton: {
    backgroundColor: '#1976d2',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  playButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});

export default PlayScreen;
