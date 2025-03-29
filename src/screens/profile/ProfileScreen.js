/**
 * Copyright (c) 2025 OryxForge Labs LLC
 * MoneyMasters - Financial Education Mobile App for Kids
 * All rights reserved.
 */

import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuth } from '../../contexts/AuthContext';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const { user, signOut } = useAuth();
  
  // Mock user data (would come from auth context in a real app)
  const [userData, setUserData] = useState({
    name: 'Alex Johnson',
    age: 10,
    avatar: 'default',
    level: 12,
    points: 2450,
    badges: [
      { id: '1', name: 'Savings Expert', description: 'Saved $100 in your virtual bank' },
      { id: '2', name: 'Quiz Master', description: 'Completed 10 financial quizzes' },
      { id: '3', name: 'Stock Trader', description: 'Made 5 successful trades in the stock market game' }
    ],
    achievements: [
      { id: '1', name: 'Budget Planner', progress: 100, total: 100 },
      { id: '2', name: 'Investment Guru', progress: 75, total: 100 },
      { id: '3', name: 'Financial Vocabulary', progress: 40, total: 100 }
    ]
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.profileHeader}>
          <View style={styles.avatarContainer}>
            {/* Placeholder for avatar image */}
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>{userData.name.charAt(0)}</Text>
            </View>
            <TouchableOpacity style={styles.editAvatarButton}>
              <Text style={styles.editAvatarText}>Edit</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.userInfo}>
            <Text style={styles.userName}>{userData.name}</Text>
            <Text style={styles.userAge}>Age: {userData.age}</Text>
            <View style={styles.levelContainer}>
              <Text style={styles.levelText}>Level {userData.level}</Text>
              <View style={styles.pointsContainer}>
                <Text style={styles.pointsText}>{userData.points} points</Text>
              </View>
            </View>
          </View>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>My Badges</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.badgesContainer}>
            {userData.badges.map(badge => (
              <View key={badge.id} style={styles.badgeItem}>
                <View style={styles.badgeIcon}>
                  <Text style={styles.badgeIconText}>{badge.name.charAt(0)}</Text>
                </View>
                <Text style={styles.badgeName}>{badge.name}</Text>
                <Text style={styles.badgeDescription}>{badge.description}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Achievements</Text>
          {userData.achievements.map(achievement => (
            <View key={achievement.id} style={styles.achievementItem}>
              <View style={styles.achievementHeader}>
                <Text style={styles.achievementName}>{achievement.name}</Text>
                <Text style={styles.achievementProgress}>
                  {achievement.progress}/{achievement.total}
                </Text>
              </View>
              <View style={styles.progressBarContainer}>
                <View 
                  style={[
                    styles.progressBar, 
                    { width: `${(achievement.progress/achievement.total) * 100}%` }
                  ]} 
                />
              </View>
            </View>
          ))}
        </View>
        
        <View style={styles.actionsContainer}>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionButtonText}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.actionButton, styles.signOutButton]}
            onPress={() => signOut()}
          >
            <Text style={[styles.actionButtonText, styles.signOutButtonText]}>Sign Out</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  profileHeader: {
    flexDirection: 'row',
    padding: 20,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#eeeeee',
  },
  avatarContainer: {
    marginRight: 20,
    alignItems: 'center',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#673ab7',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  avatarText: {
    fontSize: 32,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  editAvatarButton: {
    backgroundColor: '#ede7f6',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  editAvatarText: {
    color: '#673ab7',
    fontWeight: 'bold',
    fontSize: 12,
  },
  userInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#212121',
    marginBottom: 4,
  },
  userAge: {
    fontSize: 16,
    color: '#757575',
    marginBottom: 8,
  },
  levelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  levelText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#673ab7',
    marginRight: 8,
  },
  pointsContainer: {
    backgroundColor: '#ede7f6',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  pointsText: {
    color: '#673ab7',
    fontWeight: 'bold',
    fontSize: 12,
  },
  section: {
    padding: 20,
    backgroundColor: '#ffffff',
    marginTop: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#212121',
    marginBottom: 16,
  },
  badgesContainer: {
    flexDirection: 'row',
  },
  badgeItem: {
    width: 120,
    marginRight: 16,
    alignItems: 'center',
  },
  badgeIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#673ab7',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  badgeIconText: {
    fontSize: 24,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  badgeName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#212121',
    textAlign: 'center',
    marginBottom: 4,
  },
  badgeDescription: {
    fontSize: 12,
    color: '#757575',
    textAlign: 'center',
  },
  achievementItem: {
    marginBottom: 16,
  },
  achievementHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  achievementName: {
    fontSize: 16,
    color: '#212121',
  },
  achievementProgress: {
    fontSize: 16,
    color: '#673ab7',
    fontWeight: 'bold',
  },
  progressBarContainer: {
    height: 8,
    backgroundColor: '#ede7f6',
    borderRadius: 4,
  },
  progressBar: {
    height: 8,
    backgroundColor: '#673ab7',
    borderRadius: 4,
  },
  actionsContainer: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    backgroundColor: '#673ab7',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    flex: 1,
    marginHorizontal: 4,
    alignItems: 'center',
  },
  actionButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  signOutButton: {
    backgroundColor: '#f5f5f5',
    borderWidth: 1,
    borderColor: '#673ab7',
  },
  signOutButtonText: {
    color: '#673ab7',
  },
});

export default ProfileScreen;
