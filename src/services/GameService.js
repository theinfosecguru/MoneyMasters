/**
 * Copyright (c) 2025 OryxForge Labs LLC
 * MoneyMasters - Financial Education Mobile App for Kids
 * All rights reserved.
 */

/**
 * API service for game-related operations
 */
class GameService {
  /**
   * Get available games for the user
   * 
   * @param {string} ageGroup - Age group filter
   * @returns {Promise<Array>} List of games
   */
  async getGames(ageGroup) {
    try {
      // This would be replaced with actual API call
      console.log(`Fetching games for age group: ${ageGroup}`);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Mock game data
      return [
        {
          id: 'game1',
          title: 'Stock Market Game',
          description: 'Learn how the stock market works by investing virtual money',
          difficulty: 'Medium',
          ageGroup: '10-13',
          imageUrl: 'stock_market_game.png'
        },
        {
          id: 'game2',
          title: 'Budget Challenge',
          description: 'Create and manage a budget to achieve financial goals',
          difficulty: 'Easy',
          ageGroup: '8-13',
          imageUrl: 'budget_challenge.png'
        },
        {
          id: 'game3',
          title: 'Entrepreneur Simulator',
          description: 'Start and grow your own business',
          difficulty: 'Hard',
          ageGroup: '11-13',
          imageUrl: 'entrepreneur_simulator.png'
        }
      ].filter(game => !ageGroup || game.ageGroup.includes(ageGroup));
    } catch (error) {
      console.error('Error fetching games:', error);
      throw new Error('Failed to load games. Please try again later.');
    }
  }

  /**
   * Get game details by ID
   * 
   * @param {string} gameId - Game ID
   * @returns {Promise<Object>} Game details
   */
  async getGameDetails(gameId) {
    try {
      // This would be replaced with actual API call
      console.log(`Fetching details for game: ${gameId}`);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 600));
      
      // Mock game details
      const games = {
        'game1': {
          id: 'game1',
          title: 'Stock Market Game',
          description: 'Learn how the stock market works by investing virtual money',
          longDescription: 'The Stock Market Game is a simulation that teaches kids how to invest in stocks, understand market trends, and build a diversified portfolio. Players start with virtual money and compete to see who can grow their investments the most over time.',
          difficulty: 'Medium',
          ageGroup: '10-13',
          imageUrl: 'stock_market_game.png',
          rules: [
            'Start with $1000 virtual dollars',
            'Research and select stocks to buy',
            'Monitor your portfolio performance',
            'Buy low and sell high to maximize returns',
            'The player with the highest portfolio value at the end wins'
          ]
        },
        'game2': {
          id: 'game2',
          title: 'Budget Challenge',
          description: 'Create and manage a budget to achieve financial goals',
          longDescription: 'The Budget Challenge teaches kids how to create and stick to a budget. Players must manage their virtual income, pay for necessities, save for goals, and handle unexpected expenses.',
          difficulty: 'Easy',
          ageGroup: '8-13',
          imageUrl: 'budget_challenge.png',
          rules: [
            'Receive a virtual weekly allowance',
            'Create a budget for spending and saving',
            'Pay for necessities first',
            'Save for short and long-term goals',
            'Handle surprise expenses that test your budget'
          ]
        },
        'game3': {
          id: 'game3',
          title: 'Entrepreneur Simulator',
          description: 'Start and grow your own business',
          longDescription: 'The Entrepreneur Simulator lets kids experience what it\'s like to start and run a business. Players must develop a business idea, create a business plan, manage resources, and make strategic decisions to grow their company.',
          difficulty: 'Hard',
          ageGroup: '11-13',
          imageUrl: 'entrepreneur_simulator.png',
          rules: [
            'Choose a business type to start',
            'Create a business plan and set prices',
            'Manage inventory and resources',
            'Market your business to attract customers',
            'Reinvest profits to grow your business'
          ]
        }
      };
      
      return games[gameId] || null;
    } catch (error) {
      console.error('Error fetching game details:', error);
      throw new Error('Failed to load game details. Please try again later.');
    }
  }
}

export default new GameService();
