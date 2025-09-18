# Contributing to Interview Prep

Thank you for your interest in contributing to Interview Prep! This document outlines the process and guidelines for contributing to this project.

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- Git
- A GitHub account

### Development Setup

1. **Fork the repository**
   - Click the "Fork" button at the top right of this repository
   - Clone your fork locally:

   ```bash
   git clone https://github.com/YOUR_USERNAME/interview-prep.git
   cd interview-prep
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Create a new branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

## 📝 Contribution Workflow

### 1. Choose What to Work On

- Browse our [Issues](../../issues) page
- Look for issues labeled `good first issue` or `help wanted`
- Comment on the issue to let others know you're working on it

### 2. Development Process

- Make your changes in small, logical commits
- Write clear commit messages following this format:

  ```
  type(scope): brief description

  Longer description if needed
  ```

  Examples:
  - `feat(auth): add user login functionality`
  - `fix(api): resolve data validation bug`
  - `docs(readme): update installation instructions`

### 3. Testing

- Ensure all existing tests pass: `npm test`
- Add tests for new functionality
- Test your changes manually

### 4. Code Quality

- Follow the existing code style
- Run linting: `npm run lint`
- Format code: `npm run format`

## 🔄 Pull Request Process

1. **Before submitting:**
   - Rebase your branch on the latest main branch
   - Ensure all tests pass
   - Update documentation if needed

2. **Submit your PR:**
   - Use a clear, descriptive title
   - Fill out the pull request template completely
   - Link any related issues using "Closes #123"

3. **Review process:**
   - Maintainers will review your PR
   - Address any feedback promptly
   - Be open to suggestions and changes

## 📋 Code Style Guidelines

### JavaScript/TypeScript

- Use 2 spaces for indentation
- Use semicolons
- Use single quotes for strings
- Use camelCase for variables and functions
- Use PascalCase for classes and components

### Git Commit Messages

- Use present tense ("Add feature" not "Added feature")
- Keep first line under 50 characters
- Reference issues and pull requests when applicable

## 🐛 Bug Reports

When reporting bugs, please include:

- **Description**: Clear description of the bug
- **Steps to reproduce**: Detailed steps to reproduce the issue
- **Expected behavior**: What you expected to happen
- **Actual behavior**: What actually happened
- **Environment**: OS, browser, Node.js version, etc.
- **Screenshots**: If applicable

## 💡 Feature Requests

For feature requests, please include:

- **Problem**: What problem does this solve?
- **Solution**: Describe your proposed solution
- **Alternatives**: Any alternative solutions considered
- **Additional context**: Any other relevant information

## 📚 Documentation

- Update README.md if you change functionality
- Add comments for complex code
- Update API documentation for backend changes
- Update component documentation for frontend changes

## 🤝 Code of Conduct

- Be respectful and inclusive
- Welcome newcomers and help them learn
- Focus on what's best for the community
- Show empathy towards other community members

## 🎯 Project Structure

```
interview-prep/
├── frontend/          # React/Vue frontend application
├── backend/           # Node.js/Express backend API
├── docs/              # Documentation files
├── tests/             # Test files
├── .github/           # GitHub templates and workflows
└── README.md          # Project overview
```

## 📞 Getting Help

- **Questions**: Open a discussion in [Discussions](../../discussions)
- **Issues**: Report bugs in [Issues](../../issues)
- **Chat**: Join our community chat (if applicable)

## 🏆 Recognition

Contributors will be recognized in:

- README.md contributors section
- Release notes
- Hall of fame (for significant contributions)

---

Thank you for contributing! Every contribution, no matter how small, makes a difference. 🙏
