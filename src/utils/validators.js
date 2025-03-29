/**
 * Copyright (c) 2025 OryxForge Labs LLC
 * MoneyMasters - Financial Education Mobile App for Kids
 * All rights reserved.
 */

/**
 * Utility functions for validation
 */

/**
 * Validate email format
 * 
 * @param {string} email - Email to validate
 * @returns {boolean} Whether email is valid
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate password strength
 * 
 * @param {string} password - Password to validate
 * @returns {Object} Validation result with isValid flag and message
 */
export const validatePassword = (password) => {
  if (!password || password.length < 8) {
    return {
      isValid: false,
      message: 'Password must be at least 8 characters long'
    };
  }
  
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);
  
  if (!hasUpperCase || !hasLowerCase || !hasNumbers) {
    return {
      isValid: false,
      message: 'Password must contain uppercase, lowercase, and numbers'
    };
  }
  
  return {
    isValid: true,
    message: 'Password is strong'
  };
};

/**
 * Validate age is within acceptable range for the app
 * 
 * @param {number} age - Age to validate
 * @returns {boolean} Whether age is valid
 */
export const isValidAge = (age) => {
  return age >= 5 && age <= 13;
};

/**
 * Validate form fields
 * 
 * @param {Object} fields - Form fields to validate
 * @param {Object} validations - Validation rules
 * @returns {Object} Validation errors
 */
export const validateForm = (fields, validations) => {
  const errors = {};
  
  Object.keys(validations).forEach(fieldName => {
    const value = fields[fieldName];
    const validation = validations[fieldName];
    
    if (validation.required && (!value || value.trim() === '')) {
      errors[fieldName] = `${fieldName} is required`;
    } else if (validation.validator && value) {
      const validatorResult = validation.validator(value);
      if (typeof validatorResult === 'object' && !validatorResult.isValid) {
        errors[fieldName] = validatorResult.message;
      } else if (validatorResult === false) {
        errors[fieldName] = validation.message || `${fieldName} is invalid`;
      }
    }
  });
  
  return errors;
};
