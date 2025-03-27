# 🚀 Commit & Pull Request Guidelines | VolunChain
This guideline establishes clear conventions for **Creating Pull Requests, Branching, and Commit Messages** in this project. Following these conventions ensures a consistent and readable commit history.

## 🛠️ General Rules
* **ALL BRANCHES AND COMMIT MESSAGES SHOULD BE IN LOWERCASE.**
* Keep commit messages short and descriptive (less than 72 characters).

## 🌳 Branch Naming Convention
Use the following branch prefixes based on the type of change:

* `feat/` 🌟: For new features
* `fix/` 🐛: For bug fixes
* `remove/` 🗑️: For file removals
* `docs/` 📖: For documentation updates
* `style/` 🎨: For style changes (formatting, spacing, etc.)
* `refactor/` ♻️: For code refactoring (no functional changes)
* `perf/` ⚡: For performance improvements
* `test/` 🧪: For adding or fixing tests
* `build/` 🏗️: For build system changes
* `ci/` 🔄: For CI/CD configuration changes
* `change/` ✏️: For small changes or tweaks
* `chore/` 🛠️: For maintenance tasks

### Example Branch Names
* `feat/user-registration` 🌟
* `fix/product-price-validation` 🐛
* `docs/readme-update` 📖
* `style/button-styling` 🎨

## ✍️ Commit Message Convention
### Commit Message Format
Each commit message should follow this structure:

```
<type>: <short description>
```

### Commit Types
* `feat` 🌟: A new feature
* `fix` 🐛: A bug fix
* `docs` 📖: Documentation changes
* `style` 🎨: Changes that do not affect code behavior (e.g., formatting)
* `refactor` ♻️: Code changes without affecting functionality
* `perf` ⚡: Performance improvements
* `test` 🧪: Adding or fixing tests
* `build` 🏗️: Changes to the build system or external dependencies
* `ci` 🔄: Changes to CI/CD scripts
* `chore` 🛠️: Maintenance tasks or other minor changes

### Writing Commit Messages
1. **Keep It Short:** Less than 72 characters for the title.
2. **Be Clear:** Explain what was done and why (if necessary).
3. **Use Present Tense:** Write commit messages as if you're giving commands.

### Example Commit Messages
* `feat: add user registration support` 🌟
* `fix: resolve price validation bug` 🐛
* `docs: update API usage instructions` 📖
* `style: adjust button alignment` 🎨
* `perf: optimize database queries` ⚡

## 🔀 Pull Request Guidelines
### Creating a Pull Request
Every pull request should follow the structure below to ensure clarity and completeness:

### PR Title Format
```
[type]: [short description]
```
Example: `feat: implement user authentication`

### Pull Request Template
#### Description of Changes
<!-- Provide a summary of the changes made in this PR. Explain why these changes are necessary. -->

#### Type of Change
- [ ] Bug fix (fix)
- [ ] New feature (feat)
- [ ] Breaking change (refactor/perf)
- [ ] Documentation update (docs)
- [ ] Style update (style)
- [ ] Test addition/fix (test)
- [ ] Build system change (build/ci)
- [ ] Maintenance task (chore/change)

#### How Has This Been Tested?
<!-- Describe how you tested your changes. Include details about the testing environment, test cases, and results. -->

#### Screenshots / Recordings (if applicable)
<!-- Attach screenshots or screen recordings to illustrate the changes when necessary. -->

#### Checklist
- [ ] My code follows the style guidelines of this project.
- [ ] I have performed a self-review of my code.
- [ ] I have commented my code where necessary.
- [ ] I have added tests that prove my fix is effective or that my feature works.
- [ ] New and existing unit tests pass locally with my changes.
- [ ] I have updated the documentation accordingly.

### 🙏 Thank You for Following the Guidelines
By adhering to these guidelines, you help maintain a clean and professional repository. Let's build great things together! 🚀




