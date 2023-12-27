
# Accessibility Checker

Accessibility Checker is a web-based tool designed to help web developers and accessibility auditors in assessing the accessibility of websites. It leverages Puppeteer and axe-core to automate the detection of common accessibility issues, providing a quick and efficient means to ensure web content is accessible to all users, including those with disabilities. This tool is particularly useful for ensuring compliance with Web Content Accessibility Guidelines (WCAG).

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
node server.js
```

Open a browser and navigate to `http://localhost:3001`. Enter the URL of the website you want to check in the input field and click the "Check Accessibility" button. The results will be displayed in an HTML table format.

### UI Customization

- The project includes a `style.css` file for basic styling.
- The footer of the UI contains links to Rast Mobile's website and social media accounts.
- You can modify `style.css` and the HTML files to customize the UI according to your branding and design preferences.

### Contributing

Contributions to the Accessibility Checker are welcome. Please fork the repository and submit a pull request with your changes. For major changes, please open an issue first to discuss what you would like to change.

### License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

### Contact

For any queries, please reach out to Rast Mobile at mobilerast@gmail.com.

### Acknowledgments

- Puppeteer (https://pptr.dev/)
- axe-core (https://www.deque.com/axe/)
