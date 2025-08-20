# DANAIN Development Guide

## Quick Setup

### One-command installation
```bash
npm run install:all
```

### Development servers
```bash
npm run dev  # Starts backend and admin panel
```

### Individual components
```bash
npm run dev:server  # Backend only
npm run dev:client  # Mobile app only  
npm run dev:admin   # Admin panel only
```

## API Testing

The backend server includes several endpoints for testing:

### Health Check
```bash
curl http://localhost:3000/health
```

### Register User
```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"phone": "+6281234567890", "name": "Test User", "pin": "123456"}'
```

### Login User
```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"phone": "+6281234567890", "pin": "123456"}'
```

### Get API Documentation
```bash
curl http://localhost:3000/api/docs
```

## Mobile App Development

### Android Setup
1. Install Android Studio
2. Set up Android SDK
3. Create virtual device
4. Run: `cd client && npm run android`

### iOS Setup (macOS only)
1. Install Xcode
2. Install CocoaPods: `sudo gem install cocoapods`
3. Install pods: `cd client/ios && pod install`
4. Run: `cd client && npm run ios`

## Troubleshooting

### Metro bundler issues
```bash
cd client
npm run clean
npm start --reset-cache
```

### Node modules issues
```bash
npm run clean
npm run install:all
```

### Port conflicts
- Backend: PORT=3000 (configurable via .env)
- Admin Panel: PORT=3001 (auto-assigned by React)
- Metro: PORT=8081 (React Native bundler)

## Testing Strategy

### Backend Tests
```bash
cd server && npm test
```

### Frontend Tests  
```bash
cd client && npm test
cd admin && npm test
```

### E2E Testing
- Use Detox for React Native E2E tests
- Use Cypress for web admin panel E2E tests

## Code Quality

### Linting
```bash
npm run lint        # All projects
npm run lint:server # Backend only
npm run lint:client # Mobile app only
npm run lint:admin  # Admin panel only
```

### Prettier (Auto-format)
Most IDEs will auto-format on save. Manual formatting:
```bash
npx prettier --write "**/*.{js,jsx,ts,tsx,json,md}"
```

## Deployment

### Backend
```bash
cd server
npm install --production
NODE_ENV=production npm start
```

### Admin Panel
```bash
cd admin  
npm run build
# Serve build/ folder with nginx or similar
```

### Mobile App
```bash
cd client
# Android
npm run build:android
# iOS  
npm run build:ios
```