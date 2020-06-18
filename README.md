This project was developed with [Create React App](https://github.com/facebook/create-react-app).

## Installing the dependencies

in the root of this projects's folder, run:

### `npm install`

to install the dependencies libraries.

## Application specifications:

Based on the requiremets provided in the Front End Assignment PDF file:

1. Must read data from the endpoint (http://pb-api.herokuapp.com/bars)
2. Multiple bars
3. One set of controls that can control each bar on the fly
4. Can't go under 0
5. Can go over limit (defined in API), but limit the bar itself and change its colour
6. Display usage amount, centered
7. Write tests for your code (hint: TDD strongly preferred)
8. Implement a responsive solution: testing it on mobile, tablet, etc. Getting it working nicely.
9. Animate the bar change, make sure it works well when you tap buttons quickly.
10. Version control (git)

In addition, from the bonus points, the following are implemented:

1. Setting up as a project: this is a React projects which is the default way of implementing the development.
2. Code quality: the user interface is broken down into components as per standards and stateless function components are used whenever it is more effecient for code simplicity. Moreover, within classes and components, fragments of codes are put into separate functions and code refactoring is implemented as applicable.
3. Styling to a production quality level: few UI stylings have been applied to the UI components along with the responsive behaviour of these components.

## Automated Testing:

For automated testing, the React Testing Library is used to test the components in this app.
The components are placed in individual folders inside the "components" folder, and in each component folder, there is a "**test**" folder which contains the code testing script. These scripts will test for the successful creation of a single component in a <div>, the correct rendering of a component by checking for the component elements being created, and the matching with the component snapshot which is found in the "**snapshots**" folder in the component's individual folder.

Testing can be executed by running:

### `npm test`

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
