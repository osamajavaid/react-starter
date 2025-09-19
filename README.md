Got it. I won’t change your README text, just reformat the commands so they appear in proper code editor blocks instead of being escaped. Here’s the fixed version with correct code block syntax:

```markdown
# React Starter Project

A modern React application starter template built with Vite, featuring a comprehensive development setup and best practices.

## Features

- ⚡️ [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- ⚛️ [React 19](https://react.dev/) - JavaScript library for building user interfaces
- 🎨 [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework
- 🧭 [React Router](https://reactrouter.com/) - Client-side routing
- 📦 [Zustand](https://zustand-demo.pmnd.rs/) - State management
- 🔍 [ESLint](https://eslint.org/) - Code linting
- 💅 [Prettier](https://prettier.io/) - Code formatting
- 🐶 [Husky](https://typicode.github.io/husky/) - Git hooks
- 📝 [CommitLint](https://commitlint.js.org/) - Lint commit messages


````

````markdown
## Project Structure

```plaintext
src/
├── assets/          # Static assets (images, fonts, etc.)
├── components/      # Reusable components
│   ├── common/      # Common components used across pages
│   └── ui/          # UI components (buttons, inputs, etc.)
├── context/         # React context providers
├── hooks/           # Custom React hooks
├── layouts/         # Layout components
├── lib/             # Utils and constant folder
│   ├── utils/       # Utility functions only
│   └── constants/   # Constant functions only
├── pages/           # Page components
├── store/           # Zustand store configurations
└── style/           # Global styles and Tailwind configuration
````

```

✅ The key fix is using `plaintext` (or `bash`) right after the opening triple backticks.  
This way the indentation, pipes, and comments won’t get messed up in different Markdown renderers.  

Do you want me to **apply this fix to your whole README.md** and give you a final cleaned version?
```


## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd react-starter
````

2. Install dependencies:

```bash
npm install
# or
yarn install
```

### Development

Start the development server:

```bash
npm run dev
# or
yarn dev
```

### Building for Production

Build the application:

```bash
npm run build
# or
yarn build
```

Preview the production build:

```bash
npm run preview
# or
yarn preview
```

## Git Hooks and Commit Convention

This project uses Husky to enforce code quality and commit message conventions.

### Setting up Husky

Husky is automatically installed and configured when you run `npm install`. It sets up the following hooks:

* Pre-commit: Runs linting and formatting checks
* Commit-msg: Validates commit messages follow conventional commits

Please initialze the husky using this command:

```bash
npx husky init
```

### Commit Message Convention

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification. Commit messages should be structured as follows:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

Types include:

* feat: New feature
* fix: Bug fix
* docs: Documentation changes
* style: Code style changes (formatting, etc.)
* refactor: Code refactoring
* test: Adding or modifying tests
* chore: Maintenance tasks

Example:

```
feat(auth): add login functionality
```

## Available Scripts

* `npm run dev`: Start development server
* `npm run build`: Build for production
* `npm run preview`: Preview production build
* `npm run lint`: Lint code using ESLint
* `npm run format`: Format code using Prettier
* `npm run prettier`: Check code formatting

```

Do you also want me to apply consistent **syntax highlighting** (like `bash` for shell commands, `json` if configs appear later) throughout, or keep it minimal?
```
