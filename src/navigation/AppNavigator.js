/**
 * Copyright (c) 2025 OryxForge Labs LLC
 * MoneyMasters - Financial Education Mobile App for Kids
 * All rights reserved.
 */

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

// Import screens
import LearnScreen from '../screens/learn/LearnScreen';
import PlayScreen from '../screens/play/PlayScreen';
import TeamUpScreen from '../screens/teamup/TeamUpScreen';
import BankScreen from '../screens/bank/BankScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import AuthScreen from '../screens/auth/AuthScreen';
import WelcomeScreen from '../screens/auth/WelcomeScreen';
import AgeSelectionScreen from '../screens/auth/AgeSelectionScreen';
import ParentSignUpScreen from '../screens/auth/ParentSignUpScreen';
import AvatarCreationScreen from '../screens/auth/AvatarCreationScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="AgeSelection" component={AgeSelectionScreen} />
      <Stack.Screen name="ParentSignUp" component={ParentSignUpScreen} />
      <Stack.Screen name="AvatarCreation" component={AvatarCreationScreen} />
      <Stack.Screen name="Auth" component={AuthScreen} />
    </Stack.Navigator>
  );
};

const LearnStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LearnHome" component={LearnScreen} options={{ title: 'Learn' }} />
      {/* Add more screens for the Learn section */}
    </Stack.Navigator>
  );
};

const PlayStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PlayHome" component={PlayScreen} options={{ title: 'Play' }} />
      {/* Add more screens for the Play section */}
    </Stack.Navigator>
  );
};

const TeamUpStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TeamUpHome" component={TeamUpScreen} options={{ title: 'Team Up' }} />
      {/* Add more screens for the TeamUp section */}
    </Stack.Navigator>
  );
};

const BankStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BankHome" component={BankScreen} options={{ title: 'Bank' }} />
      {/* Add more screens for the Bank section */}
    </Stack.Navigator>
  );
};

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ProfileHome" component={ProfileScreen} options={{ title: 'Profile' }} />
      {/* Add more screens for the Profile section */}
    </Stack.Navigator>
  );
};

const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Learn') {
            iconName = focused ? 'book' : 'book-outline';
          } else if (route.name === 'Play') {
            iconName = focused ? 'game-controller' : 'game-controller-outline';
          } else if (route.name === 'TeamUp') {
            iconName = focused ? 'people' : 'people-outline';
          } else if (route.name === 'Bank') {
            iconName = focused ? 'cash' : 'cash-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Learn" component={LearnStack} />
      <Tab.Screen name="Play" component={PlayStack} />
      <Tab.Screen name="TeamUp" component={TeamUpStack} />
      <Tab.Screen name="Bank" component={BankStack} />
      <Tab.Screen name="Profile" component={ProfileStack} />
    </Tab.Navigator>
  );
};

export const AppNavigator = () => {
  // In a real app, you would check if the user is authenticated
  const isAuthenticated = false;

  return isAuthenticated ? <MainTabs /> : <AuthStack />;
};
