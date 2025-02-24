# banana-grabber

Welcome to the app

# Running the App

- node version must be >18.8.0 (Node.js)[https://nodejs.org/en/download]. For more info on automating the nvm version, find the section below on Setting Up Node.js with NVM. 

- For *FIRST TIME* set up, you'll need to install yarn:
 ```sh
npm install --global yarn
  ```
- If/when `yarn` is already installed, run: 
```sh
yarn
```
this will ensure that all packages are up to date.

- To launch the development server and view localhost, run: 
```sh
yarn dev
```


# Setting Up Node.js with NVM

This guide will help you configure and manage your Node.js version using `nvm` (Node Version Manager) to ensure consistency across your development environment.

## Prerequisites
- Ensure `nvm` is installed. If not, install it by running:
  ```sh
  curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.4/install.sh | bash
  ```
- Reload your shell:
  ```sh
  source ~/.zshrc
  ```
- Verify installation:
  ```sh
  nvm -v
  ```

## Installing and Using Node.js 20.18.3
1. Install Node.js 20.18.3:
   ```sh
   nvm install 20.18.3
   ```
2. Use Node.js 20.18.3 for the current session:
   ```sh
   nvm use 20.18.3
   ```
3. Set Node.js 20.18.3 as the default version:
   ```sh
   nvm alias default 20.18.3
   ```
4. Verify the active version:
   ```sh
   node -v
   ```
   Expected output:
   ```
   v20.18.3
   ```

## Using `.nvmrc` for Project-Specific Node.js Version
To ensure that your project always uses the correct Node.js version:
1. Navigate to your project directory:
   ```sh
   cd /path/to/your/project
   ```
2. Create an `.nvmrc` file and set the version:
   ```sh
   echo "20.18.3" > .nvmrc
   ```
3. Verify the file contents:
   ```sh
   cat .nvmrc
   ```
4. Use the specified Node.js version whenever you enter the project:
   ```sh
   nvm use
   ```

## Automating Node.js Version Switching
To automatically switch to the correct Node.js version when navigating into a project directory, add the following to your `~/.zshrc`:
```sh
autoload -U add-zsh-hook
load-nvmrc() {
  if [[ -f .nvmrc ]]; then
    nvm use
  fi
}
add-zsh-hook chpwd load-nvmrc
load-nvmrc
```
Then, apply the changes:
```sh
source ~/.zshrc
```
Now, every time you `cd` into a directory with an `.nvmrc` file, `nvm` will automatically switch to the correct Node.js version.

## Troubleshooting
- If `nvm use` does not switch versions, try restarting your terminal or running:
  ```sh
  source ~/.zshrc
  ```
- If you see an older version when running `node -v`, make sure you’ve set the default version correctly:
  ```sh
  nvm alias default 20.18.3
  ```

## Conclusion
Using `nvm` to manage Node.js versions helps maintain consistency across projects and ensures compatibility with dependencies. Setting up `.nvmrc` and automating version switching will streamline your workflow.

Happy coding! 🚀

---

### File Format
Save this file as `README.md` so it is properly formatted as a Markdown file.


