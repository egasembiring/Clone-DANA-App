# Contributing to DANAIN

We love your input! We want to make contributing to DANAIN as easy and transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features
- Becoming a maintainer

## Development Process

We use GitHub to host code, track issues and feature requests, and accept pull requests.

## Pull Requests Process

1. Fork the repo and create your branch from `master`.
2. If you've added code that should be tested, add tests.
3. If you've changed APIs, update the documentation.
4. Ensure the test suite passes.
5. Make sure your code lints.
6. Issue that pull request!

## Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/egasembiring/Clone-DANA-App.git
   cd Clone-DANA-App
   ```

2. **Install dependencies for all components**
   ```bash
   cd server && npm install
   cd ../client && npm install  
   cd ../admin && npm install
   ```

3. **Start development environment**
   ```bash
   # Terminal 1 - Backend
   cd server && npm run dev
   
   # Terminal 2 - Admin Panel  
   cd admin && npm start
   
   # Terminal 3 - Mobile App
   cd client && npm start
   ```

## Code Style

We use ESLint and Prettier to maintain code quality and consistency.

- Run `npm run lint:all` to check code style
- Most editors will auto-format on save with Prettier
- Follow existing code patterns and naming conventions

## Testing

We use Jest for testing. Please add tests for any new features.

```bash
# Run all tests
npm run test:all

# Run specific component tests
npm run test:server
npm run test:client
npm run test:admin
```

## Commit Guidelines

We follow conventional commit messages:

- `feat:` new feature
- `fix:` bug fix
- `docs:` documentation changes
- `style:` formatting, missing semicolons, etc.
- `refactor:` code refactoring
- `test:` adding tests
- `chore:` maintenance tasks

Example:
```
feat: add user profile API endpoint
fix: resolve login authentication issue
docs: update installation instructions
```

## Bug Reports

We use GitHub issues to track bugs. Report a bug by [opening a new issue](https://github.com/egasembiring/Clone-DANA-App/issues).

**Great Bug Reports** include:

- A quick summary and/or background
- Steps to reproduce
  - Be specific!
  - Give sample code if you can
- What you expected would happen
- What actually happens
- Notes (possibly including why you think this might be happening)

## Feature Requests

We welcome feature requests! Please:

1. Check if the feature already exists
2. Open a new issue with the `enhancement` label
3. Describe the feature and its use case
4. Consider contributing the implementation

## Component-Specific Guidelines

### Mobile App (React Native)
- Follow React Native best practices
- Test on both iOS and Android if possible
- Maintain responsive design principles
- Use TypeScript when adding new features

### Backend API (Node.js)
- Follow RESTful API principles
- Add proper error handling and validation
- Include API documentation
- Write unit tests for new endpoints

### Admin Panel (React)
- Use Ant Design components consistently
- Maintain responsive design
- Add proper loading states and error handling
- Follow React best practices

## Project Structure

```
Clone-DANA-App/
├── client/          # React Native Mobile App
├── server/          # Node.js Backend API
├── admin/           # React Admin Panel
├── Assets/          # Images and Screenshots
├── DEVELOPMENT.md   # Development Guide
├── CHANGELOG.md     # Version History
└── README.md        # Project Documentation
```

## Resources

- [React Native Documentation](https://reactnative.dev/docs/getting-started)
- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices)
- [React Documentation](https://reactjs.org/docs)
- [Ant Design Components](https://ant.design/components/overview/)

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

## Questions?

Feel free to reach out by opening an issue or contacting the maintainers.

---

Thanks for contributing to DANAIN! 🎉