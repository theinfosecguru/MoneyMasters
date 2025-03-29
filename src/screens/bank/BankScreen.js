/**
 * Copyright (c) 2025 OryxForge Labs LLC
 * MoneyMasters - Financial Education Mobile App for Kids
 * All rights reserved.
 */

import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const BankScreen = () => {
  const navigation = useNavigation();
  const [balance, setBalance] = useState(250.00);
  const [savingsGoal, setSavingsGoal] = useState(500.00);
  
  const transactions = [
    { id: '1', type: 'deposit', amount: 50.00, date: '2025-03-25', description: 'Allowance' },
    { id: '2', type: 'withdrawal', amount: 15.00, date: '2025-03-26', description: 'Game purchase' },
    { id: '3', type: 'deposit', amount: 20.00, date: '2025-03-27', description: 'Birthday gift' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Bank</Text>
      <Text style={styles.subheader}>Manage your virtual money</Text>
      
      <View style={styles.balanceCard}>
        <Text style={styles.balanceLabel}>Current Balance</Text>
        <Text style={styles.balanceAmount}>${balance.toFixed(2)}</Text>
        <View style={styles.goalContainer}>
          <Text style={styles.goalLabel}>Savings Goal: ${savingsGoal.toFixed(2)}</Text>
          <View style={styles.progressBarContainer}>
            <View 
              style={[
                styles.progressBar, 
                { width: `${Math.min(100, (balance/savingsGoal) * 100)}%` }
              ]} 
            />
          </View>
          <Text style={styles.progressText}>
            {Math.round((balance/savingsGoal) * 100)}% of goal
          </Text>
        </View>
      </View>
      
      <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>Deposit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>Withdraw</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>Set Goal</Text>
        </TouchableOpacity>
      </View>
      
      <Text style={styles.sectionTitle}>Recent Transactions</Text>
      <ScrollView style={styles.transactionList}>
        {transactions.map(transaction => (
          <View key={transaction.id} style={styles.transactionItem}>
            <View style={styles.transactionDetails}>
              <Text style={styles.transactionDescription}>{transaction.description}</Text>
              <Text style={styles.transactionDate}>{transaction.date}</Text>
            </View>
            <Text 
              style={[
                styles.transactionAmount,
                transaction.type === 'deposit' ? styles.depositText : styles.withdrawalText
              ]}
            >
              {transaction.type === 'deposit' ? '+' : '-'}${transaction.amount.toFixed(2)}
            </Text>
          </View>
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
    color: '#f57c00',
  },
  subheader: {
    fontSize: 16,
    color: '#757575',
    marginBottom: 24,
  },
  balanceCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  balanceLabel: {
    fontSize: 16,
    color: '#757575',
    marginBottom: 8,
  },
  balanceAmount: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#f57c00',
    marginBottom: 16,
  },
  goalContainer: {
    marginTop: 8,
  },
  goalLabel: {
    fontSize: 14,
    color: '#757575',
    marginBottom: 8,
  },
  progressBarContainer: {
    height: 12,
    backgroundColor: '#ffe0b2',
    borderRadius: 6,
    marginBottom: 8,
  },
  progressBar: {
    height: 12,
    backgroundColor: '#f57c00',
    borderRadius: 6,
  },
  progressText: {
    fontSize: 14,
    color: '#757575',
    textAlign: 'right',
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  actionButton: {
    backgroundColor: '#f57c00',
    paddingHorizontal: 16,
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
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#424242',
  },
  transactionList: {
    flex: 1,
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 8,
  },
  transactionDetails: {
    flex: 1,
  },
  transactionDescription: {
    fontSize: 16,
    color: '#424242',
    marginBottom: 4,
  },
  transactionDate: {
    fontSize: 14,
    color: '#757575',
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  depositText: {
    color: '#4caf50',
  },
  withdrawalText: {
    color: '#f44336',
  },
});

export default BankScreen;
