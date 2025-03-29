/**
 * Copyright (c) 2025 OryxForge Labs LLC
 * MoneyMasters - Financial Education Mobile App for Kids
 * All rights reserved.
 */

/**
 * Utility functions for formatting currency values
 */

/**
 * Format a number as currency
 * 
 * @param {number} amount - The amount to format
 * @param {string} currencyCode - Currency code (default: USD)
 * @returns {string} Formatted currency string
 */
export const formatCurrency = (amount, currencyCode = 'USD') => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currencyCode,
  }).format(amount);
};

/**
 * Format a number as a percentage
 * 
 * @param {number} value - The value to format as percentage
 * @param {number} decimalPlaces - Number of decimal places to show
 * @returns {string} Formatted percentage string
 */
export const formatPercentage = (value, decimalPlaces = 2) => {
  return `${(value * 100).toFixed(decimalPlaces)}%`;
};

/**
 * Calculate compound interest
 * 
 * @param {number} principal - Initial investment amount
 * @param {number} rate - Annual interest rate (decimal)
 * @param {number} time - Time in years
 * @param {number} compounds - Number of times compounded per year
 * @returns {number} Final amount after compound interest
 */
export const calculateCompoundInterest = (principal, rate, time, compounds = 1) => {
  return principal * Math.pow(1 + rate / compounds, compounds * time);
};

/**
 * Calculate simple interest
 * 
 * @param {number} principal - Initial amount
 * @param {number} rate - Annual interest rate (decimal)
 * @param {number} time - Time in years
 * @returns {number} Interest earned
 */
export const calculateSimpleInterest = (principal, rate, time) => {
  return principal * rate * time;
};
