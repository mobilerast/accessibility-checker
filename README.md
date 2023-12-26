
# Accessibility Checker

Accessibility Checker is a tool designed to help web developers and accessibility auditors in assessing the accessibility of websites. It leverages Puppeteer and axe-core to automate the detection of common accessibility issues, providing a quick and efficient means to ensure web content is accessible to all users, including those with disabilities. This tool is particularly useful for ensuring compliance with Web Content Accessibility Guidelines (WCAG).

## Getting Started

These instructions will guide you on how to set up and run the Accessibility Checker on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (Download from [Node.js website](https://nodejs.org/))
- npm (Comes with Node.js)

### Installing

First, clone the repository to your local machine:

```bash
git clone https://github.com/mobilerast/accessibility-checker.git
cd accessibility-checker
```

Then, install the necessary dependencies:

```bash
npm install
```

### Usage

To run the Accessibility Checker, execute the following command in the root directory of the project:

```bash
node accessibilityCheck.js
```

By default, the script checks the accessibility of 'https://example.com'. To check a different website, edit the `accessibilityCheck.js` file and replace the URL in the `runAccessibilityCheck` function call with the desired website URL.

```javascript
// Replace with the URL you want to test
runAccessibilityCheck('https://yourwebsite.com');
```

The script will output a list of accessibility violations found on the specified webpage.

### Contributing

Contributions to the Accessibility Checker are welcome. Please fork the repository and submit a pull request with your changes. For major changes, please open an issue first to discuss what you would like to change.

### License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

### Contact

For any queries, please reach out to Rast Mobile at mobilerast@gmail.com.

### Acknowledgments

- Puppeteer (https://pptr.dev/)
- axe-core (https://www.deque.com/axe/)
