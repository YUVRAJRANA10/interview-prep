# 🚀 **Contributor Quick Start Guide**

## **One-Command Setup**

After forking and cloning this repository, contributors only need:

```bash
# 1. Install everything at once
npm install

# 2. Verify setup works
npm run validate
```

**That's it!** 🎉

---

## **What Gets Installed Automatically**

When contributors run `npm install`, they get:

### **React Dependencies:**

- ✅ `react` - React library
- ✅ `react-dom` - React DOM rendering
- ✅ `@types/react` - TypeScript types for React
- ✅ `@types/react-dom` - TypeScript types for React DOM

### **Code Quality Tools:**

- ✅ `eslint` - Code quality checker
- ✅ `eslint-plugin-react` - React-specific linting rules
- ✅ `eslint-plugin-react-hooks` - React Hooks linting rules
- ✅ `prettier` - Code formatter
- ✅ `typescript` - TypeScript compiler

### **Development Tools:**

- ✅ `husky` - Git hooks
- ✅ `lint-staged` - Run linting on staged files
- ✅ `concurrently` - Run multiple commands

---

## **Available Commands**

| Command                | Purpose              | When to Use                  |
| ---------------------- | -------------------- | ---------------------------- |
| `npm run validate`     | **Run all checks**   | Before committing            |
| `npm run lint`         | Check code quality   | Find bugs/issues             |
| `npm run lint:fix`     | Auto-fix code issues | Fix what's possible          |
| `npm run format`       | Fix formatting       | Make code pretty             |
| `npm run format:check` | Check formatting     | See if formatting is correct |
| `npm run type-check`   | Check TypeScript     | Verify types are correct     |

---

## **Contributor Workflow**

```bash
# 1. Fork repo on GitHub
# 2. Clone your fork
git clone https://github.com/YOUR_USERNAME/interview-prep.git
cd interview-prep

# 3. Install everything (one command!)
npm install

# 4. Create feature branch
git checkout -b feature/my-awesome-feature

# 5. Make your changes
# ... edit files ...

# 6. Validate before committing
npm run validate

# 7. If validation fails, fix issues:
npm run lint:fix    # Auto-fix code issues
npm run format      # Auto-fix formatting
npm run validate    # Try again

# 8. Commit and push
git add .
git commit -m "feat: add awesome feature"
git push origin feature/my-awesome-feature

# 9. Create Pull Request on GitHub
```

---

## **Supported File Types**

This project supports both **JavaScript** and **TypeScript**:

- ✅ `.js` - Plain JavaScript
- ✅ `.jsx` - React with JavaScript
- ✅ `.ts` - Plain TypeScript
- ✅ `.tsx` - React with TypeScript

**Example TypeScript (.tsx):**

```typescript
import React from 'react';

interface Props {
  name: string;
}

const Component: React.FC<Props> = ({ name }) => {
  return <div>Hello {name}!</div>;
};
```

**Example JavaScript (.jsx):**

```javascript
import React from 'react';

const Component = ({ name }) => {
  return <div>Hello {name}!</div>;
};
```

---

## **Troubleshooting**

### **Problem: `npm run validate` fails**

**Solution:**

```bash
npm run lint:fix    # Fix code issues automatically
npm run format      # Fix formatting automatically
npm run validate    # Try again
```

### **Problem: TypeScript errors**

**Solution:**

```bash
npm run type-check  # See specific TypeScript errors
# Fix the type errors manually
npm run validate    # Try again
```

### **Problem: Need to start fresh**

**Solution:**

```bash
npm run clean       # Removes node_modules and reinstalls
npm run validate    # Verify everything works
```

---

## **Why This Setup?**

- ✅ **Zero configuration** for contributors
- ✅ **Consistent code quality** across all PRs
- ✅ **Automatic fixing** of simple issues
- ✅ **Professional workflow** used by major open source projects
- ✅ **Supports both JS and TS** for gradual migration

**This is exactly how React, Vue, Angular, and other major projects work!** 🚀
