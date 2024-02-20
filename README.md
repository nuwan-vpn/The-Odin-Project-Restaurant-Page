# The Odin Project: Restaurant Page

This project is a simple restaurant website built using webpack and JavaScript. It features multiple tabs for navigating through different sections of the restaurant, including the homepage, menu, and contact page.

## Project Setup

To set up the project, follow these steps:

1. Initialize npm in your project directory:

2. Install webpack and webpack-cli as dev dependencies:

3. Create `src` and `dist` directories with necessary files:
- `src/index.js`: JavaScript entry point
- `dist/index.html`: HTML skeleton with script tag linked to main.js

4. Create a `webpack.config.js` file for webpack configuration.

5. Set up the HTML structure inside `dist/index.html`, including a header with navigation buttons and a content div.

6. Write initial page-load function inside `src/index.js` to create the homepage content.

7. Implement tabbed browsing functionality for accessing the menu and contact pages.

8. Create individual modules for each tab content and import them into `src/index.js`.

9. Write tab-switching logic to handle events for each navigation button.

10. Set up GitHub Pages for hosting the project and create an npm script for easy deployment.

## Usage

To run the project locally, execute the following commands:

1. Build the project using webpack:

2. Open `dist/index.html` in a web browser to view the website.

## Deployment

To deploy the project to GitHub Pages, follow these steps:

1. Configure GitHub Pages source branch in repository settings.

2. Add an npm script in `package.json` for deploying to GitHub Pages.

3. Run the npm script to push the `dist` folder to the `gh-pages` branch.

## About

This project serves as a simple demonstration of building a website using webpack and modular JavaScript. It showcases how to create dynamic content and implement tabbed navigation for improved user experience.

## License

Copyright &copy; 2024 vpnSolutions.com. All Rights Reserved. <br>
This project is licensed under the [MIT License](License.txt) - see the [MIT License](License.txt) file for details.

