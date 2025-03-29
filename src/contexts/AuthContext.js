/**
 * Copyright (c) 2025 OryxForge Labs LLC
 * MoneyMasters - Financial Education Mobile App for Kids
 * All rights reserved.
 */

import React, { createContext, useState, useContext, useEffect } from 'react';
import { Alert } from 'react-native';

// Create the authentication context
const AuthContext = createContext();

// Custom hook to use the auth context
export const useAuth = () => useContext(AuthContext);

// Provider component that wraps the app and provides auth context
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if user is logged in on app start
  useEffect(() => {
    // This would typically check with Firebase or another auth provider
    // For now, we'll just simulate a loading state
    const checkUserLoggedIn = async () => {
      try {
        // Simulate API call
        setTimeout(() => {
          setUser(null); // No user logged in initially
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error('Error checking authentication status:', error);
        setLoading(false);
      }
    };

    checkUserLoggedIn();
  }, []);

  // Sign in function
  const signIn = async (email, password) => {
    try {
      setLoading(true);
      // This would typically use Firebase or another auth provider
      // For now, we'll just simulate a successful login
      setTimeout(() => {
        setUser({
          id: '123',
          email,
          name: 'Test User',
          age: 10,
          avatar: 'default',
        });
        setLoading(false);
      }, 1000);
    } catch (error) {
      Alert.alert('Error', 'Failed to sign in. Please try again.');
      setLoading(false);
    }
  };

  // Sign up function
  const signUp = async (email, password, name, age) => {
    try {
      setLoading(true);
      // This would typically use Firebase or another auth provider
      // For now, we'll just simulate a successful registration
      setTimeout(() => {
        setUser({
          id: '123',
          email,
          name,
          age,
          avatar: 'default',
        });
        setLoading(false);
      }, 1000);
    } catch (error) {
      Alert.alert('Error', 'Failed to create account. Please try again.');
      setLoading(false);
    }
  };

  // Sign out function
  const signOut = async () => {
    try {
      setLoading(true);
      // This would typically use Firebase or another auth provider
      // For now, we'll just simulate a successful logout
      setTimeout(() => {
        setUser(null);
        setLoading(false);
      }, 500);
    } catch (error) {
      Alert.alert('Error', 'Failed to sign out. Please try again.');
      setLoading(false);
    }
  };

  // Update user profile
  const updateProfile = async (updates) => {
    try {
      setLoading(true);
      // This would typically use Firebase or another auth provider
      // For now, we'll just simulate a successful profile update
      setTimeout(() => {
        setUser(prevUser => ({
          ...prevUser,
          ...updates
        }));
        setLoading(false);
      }, 500);
    } catch (error) {
      Alert.alert('Error', 'Failed to update profile. Please try again.');
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        signIn,
        signUp,
        signOut,
        updateProfile
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
