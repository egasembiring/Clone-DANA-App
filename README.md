<div align="center">
  <h1>🏦 DANAIN - Digital Wallet Clone</h1>
  <p>A comprehensive fintech application clone featuring digital wallet functionality, payment processing, and financial services</p>
  
  <img src="Assets/logo.jpeg" width="300" alt="DANAIN Logo"/>

  [![React Native](https://img.shields.io/badge/React%20Native-0.72.6-blue.svg?style=flat-square)](https://reactnative.dev/)
  [![Node.js](https://img.shields.io/badge/Node.js-18%2B-green.svg?style=flat-square)](https://nodejs.org/)
  [![Express.js](https://img.shields.io/badge/Express.js-4.18-lightgrey.svg?style=flat-square)](https://expressjs.com/)
  [![React](https://img.shields.io/badge/React-18.2-61dafb.svg?style=flat-square)](https://reactjs.org/)
  [![License](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)
</div>

---

## 📱 About DANAIN

DANAIN is a modern digital wallet application clone that provides comprehensive fintech services. It features a React Native mobile app, Node.js backend API, and a React-based admin panel for complete digital payment ecosystem management.

### ✨ Key Features

- 💳 **Digital Payments** - Seamless money transfers and payments
- 💰 **Balance Management** - Real-time balance tracking and top-up services  
- 🏪 **Merchant Integration** - QR code payments and merchant services
- 📊 **Transaction History** - Detailed transaction tracking and reporting
- 🛡️ **Security** - Multi-layer security with PIN protection and encryption
- 👥 **User Management** - Comprehensive user profile and verification system
- 📱 **Cross-Platform** - Native mobile experience on iOS and Android

---

## 🏗️ Project Structure

```
Clone-DANA-App/
├── 📱 client/          # React Native Mobile App
├── 🖥️ server/          # Node.js Backend API  
├── 👨‍💼 admin/           # React Admin Panel
├── 🖼️ Assets/          # Images and Screenshots
└── 📖 README.md        # Documentation
```

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+ 
- **npm** 9+ or **yarn**
- **React Native CLI**
- **Android Studio** (for Android development)
- **Xcode** (for iOS development - macOS only)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/egasembiring/Clone-DANA-App.git
   cd Clone-DANA-App
   ```

2. **Start the Backend Server**
   ```bash
   cd server
   npm install
   npm run dev
   # Server will run on http://localhost:3000
   ```

3. **Launch the Mobile App**
   ```bash
   cd client
   npm install
   
   # For Android
   npm run android
   
   # For iOS
   cd ios && pod install && cd ..
   npm run ios
   ```

4. **Run the Admin Panel**
   ```bash
   cd admin
   npm install
   npm start
   # Admin panel will open on http://localhost:3001
   ```

---

## 📱 Mobile App (React Native)

### Features
- **Modern UI/UX** - Clean, intuitive interface following material design
- **Real-time Updates** - Live balance and transaction updates
- **Offline Support** - Basic functionality available offline
- **Biometric Auth** - Fingerprint and Face ID support
- **Push Notifications** - Transaction alerts and updates

### Tech Stack
- React Native 0.72.6
- React 18.2.0
- React Navigation 6
- React Native Paper (UI Components)
- Async Storage
- Vector Icons

### Screenshots

<div align="center">
  <img src="Assets/splash.jpeg" width="200" alt="Splash Screen"/>
  <img src="Assets/onboarding.jpeg" width="200" alt="Onboarding"/>
  <img src="Assets/login.jpeg" width="200" alt="Login"/>
  <img src="Assets/dashboard.jpeg" width="200" alt="Dashboard"/>
</div>

---

## ⚡ Backend API (Node.js + Express)

### Features
- **RESTful API** - Clean, well-documented API endpoints
- **Authentication** - JWT-based secure authentication
- **Rate Limiting** - API rate limiting for security
- **Input Validation** - Comprehensive request validation
- **Error Handling** - Centralized error handling and logging
- **Security** - Helmet.js, CORS, and security best practices

### API Endpoints

#### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout

#### User Management  
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile
- `GET /api/users/balance` - Get user balance

#### Transactions
- `GET /api/transactions` - Get transaction history
- `POST /api/transactions/transfer` - Money transfer
- `POST /api/transactions/topup` - Account top-up
- `POST /api/transactions/payment` - Make payment

### Tech Stack
- Node.js 18+
- Express.js 4.18
- JWT for authentication
- Express Validator
- Morgan (logging)
- Helmet (security)
- CORS

---

## 👨‍💼 Admin Panel (React)

### Features
- **Dashboard Analytics** - Real-time statistics and charts
- **User Management** - Comprehensive user administration
- **Transaction Monitoring** - Transaction oversight and management  
- **System Settings** - Application configuration and settings
- **Responsive Design** - Works on desktop, tablet, and mobile

### Tech Stack
- React 18.2.0
- Ant Design (UI Framework)
- React Router 6
- Chart.js (Analytics)
- Axios (API Client)

---

## 🛠️ Development

### Available Scripts

#### Mobile App (client/)
```bash
npm start          # Start Metro bundler
npm run android    # Run on Android
npm run ios        # Run on iOS
npm test           # Run tests
npm run lint       # Lint code
npm run clean      # Clean build cache
```

#### Backend (server/)
```bash
npm start          # Start production server
npm run dev        # Start development server with nodemon
npm test           # Run tests
npm run lint       # Lint code
```

#### Admin Panel (admin/)
```bash
npm start          # Start development server
npm run build      # Build for production
npm test           # Run tests
npm run lint       # Lint code
```

### Environment Variables

Create a `.env` file in the server directory:

```env
# Server Configuration
PORT=3000
NODE_ENV=development

# Frontend Configuration  
FRONTEND_URL=http://localhost:3000

# Security
JWT_SECRET=your_jwt_secret_here
BCRYPT_ROUNDS=12

# Database (Optional)
MONGODB_URI=mongodb://localhost:27017/danain
```

---

## 🧪 Testing

### Running Tests
```bash
# Mobile App
cd client && npm test

# Backend API  
cd server && npm test

# Admin Panel
cd admin && npm test
```

### Test Coverage
- Unit tests for core functionality
- Integration tests for API endpoints
- Component tests for React components
- E2E tests for critical user flows

---

## 📦 Building for Production

### Mobile App
```bash
cd client

# Android
npm run build:android
# APK will be generated in android/app/build/outputs/apk/

# iOS  
npm run build:ios
# Archive will be generated in Xcode
```

### Backend
```bash
cd server
npm start
# Use PM2 or Docker for production deployment
```

### Admin Panel
```bash
cd admin  
npm run build
# Static files will be generated in build/
```

---

## 🔧 Configuration

### Mobile App Configuration
- **Metro Config**: `client/metro.config.js`
- **Babel Config**: `client/babel.config.js`
- **ESLint**: `client/.eslintrc.js`

### Backend Configuration
- **Main App**: `server/src/app.js`
- **Routes**: `server/src/routes/`
- **Middleware**: `server/src/middleware/`

---

## 🚀 Deployment

### Recommended Deployment Stack

#### Mobile App
- **Android**: Google Play Store
- **iOS**: Apple App Store
- **Distribution**: Firebase App Distribution (Testing)

#### Backend
- **Cloud**: AWS EC2, Google Cloud, or DigitalOcean
- **Container**: Docker + Kubernetes
- **Database**: MongoDB Atlas or PostgreSQL
- **CDN**: CloudFlare or AWS CloudFront

#### Admin Panel
- **Static Hosting**: Vercel, Netlify, or AWS S3 + CloudFront
- **Domain**: Custom domain with SSL certificate

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Development Guidelines

- Follow existing code style and conventions
- Write comprehensive tests for new features
- Update documentation for any API changes
- Ensure all tests pass before submitting PR

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 📞 Support

- **Email**: support@danain.com
- **Documentation**: [API Docs](http://localhost:3000/api/docs)
- **Issues**: [GitHub Issues](https://github.com/egasembiring/Clone-DANA-App/issues)

---

## 🏆 Contributors

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/Derida23">
        <img width="100" src="https://avatars1.githubusercontent.com/Derida23" alt="Arian Derida"/><br/>
        <sub><b>Arian Derida S</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/ditanh97">
        <img width="100" src="https://avatars0.githubusercontent.com/ditanh97" alt="Dita Nurhalimah"/><br/>
        <sub><b>Dita Nurhalimah</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/nhasoenhasan">
        <img width="100" src="https://avatars1.githubusercontent.com/nhasoenhasan" alt="Nur Hasan"/><br/>
        <sub><b>Nur Hasan</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/mohammadalviyan">
        <img width="100" src="https://avatars1.githubusercontent.com/mohammadalviyan" alt="Mohammad Alviyan"/><br/>
        <sub><b>Mohammad Alviyan</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/egasembiring">
        <img width="100" src="https://avatars.githubusercontent.com/egasembiring" alt="Egasembiring"/><br/>
        <sub><b>Egasembiring</b></sub>
      </a>
    </td>
  </tr>
</table>

---

<div align="center">
  <p>Made with ❤️ by the DANAIN Team</p>
  <p>⭐ Star this repository if you find it helpful!</p>
</div>