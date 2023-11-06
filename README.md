# Bot Battlr

Welcome to **Bot Battlr**, the one and only spot in the known universe where you
can custom build your own Bot Army! This is our app:

# Demo

![demo](https://curriculum-content.s3.amazonaws.com/phase-2/phase-2-hooks-code-challenge-bot-battlr/checkpoint_demo.gif)

**Bot Battlr** is a web app where you can create your own bot army. This app displays a list of available bots 
among other features.

As a user I can:
- See profiles of all bots rendered in `BotCollection`.
- Add an individual bot to my army by clicking on it. The selected bot should
  render in the `YourBotArmy` component. The bot can be enlisted only **once**.
  The bot **does not** disappear from the `BotCollection`.
- Release a bot from my army by clicking on it. The bot disappears from the
  `YourBotArmy` component.
- Discharge a bot from their service forever, by clicking the red button marked
  "x", which would delete the bot both from the backend and from the
  `YourBotArmy` on the frontend.

## Prerequisites

Before you begin, ensure that you have met the following requirements:


* [Git](https://git-scm.com/downloads "Download Git") must be installed on your operating system.
* Make sure **Npm** and [Node](https://nodejs.org/en/download "Download Node") are also installed on your operating system.

## Bot Battlr Setup

1. To install **Bot Battlr**, follow these steps:

Linux and Mac OS:

```bash
sudo git clone https://github.com/codeitownit/phase-2-Bot-Battlr--code-challenge.git
```

Windows:
```bash
git clone https://github.com/codeitownit/phase-2-Bot-Battlr--code-challenge.git
```

2. Installing JSON Server:

To install JSON Server in your application, navigate to your project directory in your terminal or command prompt and type in this command:
```bash
npm install -g json-server
```
This will install the JSON server globally on your system. If you want to install it locally for just a particular project instead, use this command:
```bash
npm i json-server
```

Run the following command to run the JSON server:
```bash
json-server --watch db.json
```

3. You can use the JSON file **db.json** in the project folder for your server DB.



## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## License

This project is **free to use** and does not contains any license.