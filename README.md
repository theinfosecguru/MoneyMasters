# MoneyMasters Mobile App

A financial education mobile app for kids that teaches money management, saving, and investing through interactive games and challenges.

Copyright © 2025 OryxForge Labs LLC. All rights reserved.

## Features

- **Learn**: Educational modules organized by age group and topic
- **Play**: Interactive games and simulations
- **TeamUp**: Collaborative challenges and leaderboards
- **Bank**: Virtual bank for saving and investing coins
- **Profile**: User profile, avatar customization, and settings

## Technology Stack

- React Native / Expo
- Firebase Authentication and Firestore
- AWS S3 for asset storage
- Cloudflare Workers + Pages for web deployment

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Expo CLI

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/MoneyMastersApp.git
cd MoneyMastersApp
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm start
# or
yarn start
```

4. Open the app on your device using the Expo Go app or run on a simulator

### Web Deployment

To deploy the web version using Cloudflare Workers + Pages:

1. Build the web version
```bash
npm run build:web
```

2. Deploy to Cloudflare Pages
```bash
npm run deploy:web
```

## Project Structure

```
MoneyMastersApp/
├── src/
│   ├── assets/         # Images, fonts, and other static files
│   ├── components/     # Reusable UI components
│   ├── contexts/       # React context providers
│   ├── navigation/     # Navigation configuration
│   ├── screens/        # Screen components
│   │   ├── auth/       # Authentication screens
│   │   ├── bank/       # Banking screens
│   │   ├── learn/      # Educational content screens
│   │   ├── play/       # Game screens
│   │   ├── profile/    # User profile screens
│   │   └── teamup/     # Collaborative challenge screens
│   ├── services/       # API and service integrations
│   └── utils/          # Utility functions
├── App.js              # Main application component
├── package.json        # Project dependencies and scripts
└── architecture.md     # Detailed architecture documentation
```

## License

MIT
