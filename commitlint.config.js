export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat", // New feature
        "fix", // Bug fix
        "docs", // Documentation changes
        "style", // Formatting changes (no code changes)
        "refactor", // Code refactoring (no behavior changes)
        "perf", // Performance improvements
        "test", // Adding or updating tests
        "chore", // Build tasks, package manager configs, etc.
        "ci", // CI/CD related changes
        "revert", // Reverting a previous commit
      ],
    ],
    "scope-empty": [0], // Scope is optional
    "subject-case": [0], // No capitalization rule
    "subject-full-stop": [2, "never", "."], // No full stop at the end
    "header-max-length": [2, "always", 72], // Limit commit message header to 72 characters
  },
};
